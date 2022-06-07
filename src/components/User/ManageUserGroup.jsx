/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import Table from "@mui/material/Table"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableBody from "@mui/material/TableBody"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import CircularProgress from '@mui/material/CircularProgress';
import {
  LinkButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";

import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";

import { CONFIG } from "../../api/MatterApi";

const ManageUserGroup = () => {
  const [filter, setFilter] = useState("");
  const [searchItem, setSearchItem] = useState("")
  const [selectedUser, setSelectedUser] = useState({})

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const [group, setGroup] = useState(null);
  const [groups, setGroups] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [roles, setRoles] = useState([]);
	const [role, setRole] = useState(null);
  const [error, setError] = useState("null")
	const [loadingRole, setLoadingRole] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);
  const [status, setStatus] = useState("")
  const [formData, setFormData] = useState({
    name: "",
  });

  const { name } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  
  const [openView, setOpenView] = useState(false);

  const handleClickOpenView = (data) => {
    setSelectedUser(data)
    setRole(data.role)
    setGroup(data.group)
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const FetchRoleData = () => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/user/auth/roles/`, CONFIG)
			.then((res) => {
				console.log(res.data);
				setLoadingRole(false);
				setStatus(res.statusText);
				setRoles(res.data);
			})
			.catch((err) => {
				console.log(err);
				setLoadingRole(false);
				setError(err.message);
			});
	};
  const FetchUserData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/create-member/`, CONFIG)
      .then((res) => {
        // setLoading(false);
        setStatus(res.statusText);
        setUsersData(res.data);
        setLoadingUser(false);
        console.log(usersData)

      })
      .catch((err) => {
        setLoadingUser(false);
      });
  };
  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/auth/groups/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setGroups(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    FetchData();
    FetchUserData();
    FetchRoleData();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/user/auth/groups/${id}/`, CONFIG)
      .then((res) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      });
  };
  const handleSubmitUpdate = (e) => {
  
    const body = JSON.stringify({ group, role });
    axios
      .patch(`${process.env.REACT_APP_API_URL}/api/member-update/${selectedUser.id}/`, body, CONFIG)
      .then((res) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      })
      .catch((err) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: err.statusText, message: "Success" }}
          />
        );
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({ name });
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/auth/groups/`, body, CONFIG)
      .then((res) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      })
      .catch((err) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: err.statusText, message: "Success" }}
          />
        );
      });
  };
  const showGroup = () => {
    if (groups.length === 0) {
      return <p> No data found...</p>;
    } else {
      return groups.map((data) => (
        <Box mt={1}>
          <List>
            <ListItem disablePadding>
              <ListItemText color="primary" size="small" sx={{textTransform:"uppercase", color: "#796ef0"}}>{data.name}</ListItemText>
              <Button
                variant="contained"
                size="small"
                value={data.id}
                onClick={() => handleDelete(data.id)}
                sx={{
                  borderRadius: "0.5rem",
                  float: "right",
                  
                }}
              >
                <ClearIcon />
              </Button>
            </ListItem>
          </List>
        </Box>
      ));
    }
  };

  const showUser = () => {
    if (usersData.length === 0) {
      return <p>No data found...</p>;
    } else
      return usersData.filter((val)=>{
        if (searchItem === ""){
          return val
        } else if((filter === "group") && (val.group.toLowerCase().includes(searchItem.toLowerCase()))) {
          return val
        }else if((filter === "role") &&(val.role.toLowerCase().includes(searchItem.toLowerCase()))){
          return val
        }
        else if((filter === "name") &&(val.last_name.toLowerCase().includes(searchItem.toLowerCase()))){
          return val
        }
        else if((filter === "name") &&(val.first_name.toLowerCase().includes(searchItem.toLowerCase()))){
          return val
        }
      }).map((data) => 
          <TableRow>
            <TableCell>{data.first_name}</TableCell>
            <TableCell>{data.last_name} </TableCell>
            <TableCell>{data.role}</TableCell>
            <TableCell>{data.group}</TableCell>
            <TableCell>
                   <Button onClick={()=>handleClickOpenView(data)}> View</Button>
            </TableCell>
          </TableRow>
  );
    
  };
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Grid container spacing={3} direction="row">
            <Grid item lg={3}>
              <Typography variant="h5" component="h5" m={1} color="primary">
                Manage Group
              </Typography>
            </Grid>
            <Grid item lg={9}>
              <Stack direction="row" sx={{ float: "right" }}>
                <Typography m={2} component="span" color="primary">
                  Filter & Sort By
                </Typography>
                <FormControl sx={{ width: "10rem", height: "2.5rem" }}>
                  <InputLabel id="demo-simple-select-label" color="primary">
                    Custom Sort
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="name">By Name</MenuItem>
                    <MenuItem value="role">By Role</MenuItem>
                    <MenuItem value="group">By Group</MenuItem>
                  </Select>
                </FormControl>
                <Search sx={{ width: "20rem", height: "2.5rem", m: 1 }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onChange ={e => setSearchItem(e.target.value)}
                  />
                </Search>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} component={Paper} p={3} elevation={3}>
          <Typography
            variant="h5"
            component="h5"
            color="primary"
            align="center"
          >
            Groups
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            fullWidth
            sx={{
              borderRadius: "0.5rem",
            }}
          >
            + New Group
          </Button>
          <Dialog
            open={openView}
            onClose={handleCloseView}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth="true"
            maxWidth="md"
            sx={{
              alignContent:"center"
            }}
          >
            <DialogTitle id="alert-dialog-title">{"Update Group & Role"}</DialogTitle>
            <DialogContent>
             
              <Box component="form" autoComplete="off"
                    Validate onSubmit={(e) => handleSubmitUpdate(e)}>
                <Typography component="h5" variant="h5">
                  {selectedUser.first_name } {selectedUser.last_name }
                </Typography>
        
                  <Grid
                        container
                        spacing={2}
                        mt={2}
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "14rem", "input::-webkit-outer-spin-button": {
                            webkitAappearance: "none"
                          },  },
                        }}

                      >    
                        <Grid item >
                          <TextField
                            select
                            size="small"
                            margin="normal"
                            variant="outlined"
                            value = {role}
                            name="role"
                            label="Role"
                            onChange={(e) => setRole(e.target.value)}
                            id="role"
                          >
                            {!loading ? (
                              roles.map((data) => (
                                <MenuItem key={data.id} value={data.name}>
                                  {data.name}
                                </MenuItem>
                              ))
                            ) : (
                              <Box mt={5} sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>
                            )}
                          </TextField>
                        </Grid>
                        <Grid item >
                          <TextField
                    
                            select
                            size="small"
                            margin="normal"
                            value={group}
                            variant="outlined"
                            name="group"
                            label="Group"
                            type="text"
                            onChange={(e) => setGroup(e.target.value)}
                            id="group"
                          >
                            {!loading ? (
                              groups.map((data) => (
                                <MenuItem key={data.id} value={data.name}>
                                  {data.name}
                                </MenuItem>
                              ))
                            ) : (
                              <Box mt={5} sx={{ display: 'flex' }}>
                                <CircularProgress />
                              </Box>
                            )}
                          </TextField>
                        </Grid>
                        
                        
                      </Grid>

                      <Grid item >
                        <Box
                          sx={{
                            "& .MuiButton-root": { m: 1, mr:5 },
                            float: "right",
                            color:"white"
                          }}
                        >
                        <Button
                            variant="contained"
                            color="success"
                            type="submit"
                            sx={{ color: "white" }}
                            
                          >
                            Update
                          </Button>
                        </Box>
                      </Grid>
              
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseView}>Close</Button>
            </DialogActions>
          </Dialog>
          <Dialog
            component="form"
            Validate
            onSubmit={(e) => handleSubmit(e)}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Add New Group"}</DialogTitle>
            <DialogContent>
              <TextField
                required
                fullWidth
                size="small"
                margin="normal"
                variant="outlined"
                name="name"
                label="Group Name"
                type="text"
                value={name}
                onChange={(e) => onChange(e)}
                id="name"
                autoComplete="name"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button type="submit" autoFocus>
                Add
              </Button>
            </DialogActions>
          </Dialog>
          {!loading ? showGroup() : <Box mt={5} sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>}
        </Grid>
        <Grid item lg={9}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow bgColor="#796ef0">
                  <TableCell>
                    <Typography color="white">First Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">Last Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">Role</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">Group</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">Action</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{!loadingUser ? showUser() : <Box mt={5} sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>}</TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={12}>
          <Box sx={{ float: "right" }}>
            <Button variant="contained" color="success" sx={{ color: "white" }}>
              Done
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ManageUserGroup;
