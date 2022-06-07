/** @format */

import React, { Fragment, useState, useEffect } from "react";
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableBody from "@mui/material/TableBody"
import Switch from "@mui/material/Switch"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import axios from "axios";
import { CONFIG } from "../../api/MatterApi";
import CreateUser from "./CreateUser";
import CircularProgress from '@mui/material/CircularProgress';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styles";
import { useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useToggle } from "../../context/useToggle";
import{ useDispatch} from "react-redux"
import UpdateUser from "./UpdateUser";

const User = () => {
  const [usersData, setUsersData] = useState([]);
  const [userId, setUserId] = useState(null)
  const [isActive, setIsActive] = useToggle(false);
  const [searchItem, setSearchItem] = useState("")
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [rateType, setRateType] = useState("");

  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    setRateType(event.target.value);
  };
  
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    
    setOpen(true);
  };
 const handleClickOpen2 = (data) => {
    setUserId(data)
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 const handleClose2 = () => {
    setOpen2(false);
  };

  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/members-list/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setStatus(res.statusText);
        setUsersData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setStatus(err.statusText);
      });
  };
  useEffect(() => {
    if (location.state)  {
      handleClose(location.state.params)
    }
    FetchData();
  }, []);

  
  const showUsers = () => {
    if (usersData.length === 0) {
      return <p>No data found...</p>;
    } else
      return usersData.filter((val)=>{
        if (searchItem === ""){
          return val
        } else if(val.first_name.toLowerCase().includes(searchItem.toLowerCase())) {
          return val
        }else if(val.last_name.toLowerCase().includes(searchItem.toLowerCase())) {
          return val
        }

      }).map((data) => {if(isActive){
        return (data.is_active === "True")? (<TableRow>
          <TableCell>{data.first_name}</TableCell>
          <TableCell>{data.last_name}</TableCell>
          <TableCell>{data.c_email}</TableCell>
          <TableCell>{data.role}</TableCell>
          <TableCell>{data.group}</TableCell>
          <TableCell>{data.last_login}</TableCell>
          <TableCell>{(data.is_active === "True") ? "active":"inactive"}</TableCell>
          <TableCell><Button onClick={()=>handleClickOpen2(data)}>View</Button></TableCell>
          <TableCell></TableCell>
        </TableRow>) : null
      }
    else return <TableRow>
          <TableCell> {data.first_name}</TableCell>
          <TableCell>{data.last_name}</TableCell>
          <TableCell>{data.c_email}</TableCell>
          <TableCell>{data.role}</TableCell>
          <TableCell>{data.group}</TableCell>
          <TableCell>{data.last_login}</TableCell>
          <TableCell>{(data.is_active === "True") ? "active" : "inactive"}</TableCell>
          <TableCell><Button onClick={()=>handleClickOpen2(data)}>View</Button></TableCell>
          <TableCell></TableCell>
        </TableRow>});
  };

  return (
    <Fragment>
      <Box mb={7} >
        <Typography component="h4" variant="h5" color="primary" mb={2}>
          Manage Users
        </Typography>
        <Stack p={3} direction="row" spacing={2} sx={{ float: "right" }}>
          <Search sx={{ width: "15rem" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange ={e => setSearchItem(e.target.value)}
            />
          </Search>
          <Button
            color="success"
            onClick={()=>handleClickOpen()}
            variant="contained"
            sx={{ color: "white", background: "#28c570" }}
          >
            + Add User
          </Button>
          <Dialog
           
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth="true"
            maxWidth="xl"
          >
            <DialogTitle id="alert-dialog-title">{"Add New User"}</DialogTitle>
            <DialogContent>
              <CreateUser/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
          <Dialog
           
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth="true"
            maxWidth="xl"
          >
            <DialogTitle id="alert-dialog-title">{"Add New User"}</DialogTitle>
            <DialogContent>
              <UpdateUser data={userId}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2}>Close</Button>
            </DialogActions>
          </Dialog>
        </Stack>

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
                  <Typography color="white">Email</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Role</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Group</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Last Login</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">Action</Typography>
                </TableCell>
                
                <TableCell>
                  <Switch
                    color="success"
                    value={isActive}
                    onChange={() => setIsActive()}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading ? showUsers() : <Box mt={5} sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
};

export default User;