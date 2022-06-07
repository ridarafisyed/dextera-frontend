/** @format */

import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Switch,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Box,
  Grid,
  MenuItem,
  Typography,
  Divider,
  FormControlLabel,
  Stack,
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

import { ActionAlerts } from "../../utils/ActionAlerts";
import { CONFIG } from "../../api/MatterApi";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styles";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { useToggle } from "../../context/useToggle";

const User = () => {
  const [usersData, setUsersData] = useState([]);

  const [isActive, setIsActive] = useToggle(false);

  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("");
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [rateType, setRateType] = useState("");

  const handleChange = (event) => {
    setRateType(event.target.value);
  };

  const [approvel, setApprovel] = useToggle(false);

  const [userData, setUserData] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    c_email: "",
    rate_type: "",
    rate: " ",
    time_zone: "",
    job_title: "",
    bar_no: " ",
    street: "",
    suite: "",
    city: "",
    state: "",
    zip: "",
    ext: "",
    mobile: "",
    home: "",
    work_no: "",
    p_email: "",
    phone_ext: "",
  });

  const {
    f_name,
    m_name,
    l_name,
    c_email,
    rate,
    time_zone,
    job_title,
    bar_no,
    street,
    suite,
    city,
    state,
    zip,
    ext,
    mobile,
    home,
    work_no,
    p_email,
    phone_ext,
  } = userData;
  const onChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      f_name,
      m_name,
      l_name,
      p_email,
      role,
      c_email,
      rate,
      time_zone,
      group,
      job_title,
      bar_no,
      street,
      suite,
      city,
      state,
      zip,
      ext,
      mobile,
      home,
      work_no,
      phone_ext,
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/create-member/`, body, CONFIG)
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
  const handleDelete = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/create-member/${id}/`,
        CONFIG,
      )
      .then((res) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      });
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
        // console.log(res.data);
        setLoading(false);
        setStatus(res.statusText);
        setRoles(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };
  const FetchGroupData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/auth/groups/`, CONFIG)
      .then((res) => {
        setLoading2(false);
        console.log(res.data)
        setGroups(res.data);
      })
      .catch((err) => {
        setLoading2(false);
      });
  };

  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/auth/users-list/`, CONFIG)
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
    FetchRoleData();
    FetchData();
    FetchGroupData();
  }, []);
  const showUsers = () => {
    if (usersData.length === 0) {
      return <p>No data found...</p>;
    } else
      return usersData.map((data) => (
        <TableRow>
          <TableCell>{data.first_name}</TableCell>
          <TableCell>{data.last_name}</TableCell>
          <TableCell>{data.email}</TableCell>
          <TableCell>{data.role}</TableCell>
          <TableCell>{data.group}</TableCell>
          <TableCell>{data.last_login}</TableCell>
          <TableCell>{data.is_active ? "active":"inactive"}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              value={data.id}
              onClick={() => handleDelete(data.id)}
              sx={{
                borderRadius: "0.5rem",
                float: "right",
              }}
            >
              <ClearIcon />
            </Button>
          </TableCell>
        </TableRow>
      ));
  };

  return (
    <Fragment>
      <Box>
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
            />
          </Search>
          <Button
            color="success"
            onClick={handleClickOpen}
            variant="contained"
            sx={{ color: "white", background: "#28c570" }}
          >
            + Add User
          </Button>
          <Dialog
            component="form"
            Validate
            onSubmit={(e) => handleSubmit(e)}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth="true"
            maxWidth="xl"
          >
            <DialogTitle id="alert-dialog-title">{"Add New User"}</DialogTitle>
            <DialogContent>
              <Grid
                container
                spacing={2}
                mt={2}
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "14rem" },
                }}
              >
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="f_name"
                    label="First Name"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="f_name"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="m_name"
                    label="Middle Name"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="m_name"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="l_name"
                    label="Last Name"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="l_name"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="c_email"
                    label="Company Email"
                    type="email"
                    onChange={(e) => onChange(e)}
                    id="c_email"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="rate"
                    label="Rate $"
                    type="number"
                    onChange={(e) => onChange(e)}
                    id="rate"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={6}>
                  <Stack direction="row" spacing={2} ml={2}>
                    <FormControlLabel
                      sx={{ fontSize: "2rem" }}
                      label=""
                      control={
                        <Switch
                          checked={approvel}
                          onChange={() => setApprovel(approvel)}
                        />
                      }
                    />
                    <Typography>
                      Round Entries (Round [up/down] to nearnest
                      <TextField
                        margin="dense"
                        variant="standard"
                        type="text"
                        size="small"
                        placeholder="0.00"
                        sx={{
                          maxWidth: "5rem",
                        }}
                      />
                      fraction of the hour
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    select
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="role"
                    label="Role"
                    onChange={(e) => setRole(e.target.value)}
                    id="role"
                    autoComplete="new-password"
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

                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="time_zone"
                    label="Time Zone"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="time_zone"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    select
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="group"
                    label="Group"
                    type="text"
                    onChange={(e) => setGroup(e.target.value)}
                    id="group"
                    autoComplete="new-password"
                  >
                    {!loading2 ? (
                      groups.map((data) => (
                        <MenuItem key={data.id} value={data.name}>
                          {data.name}
                        </MenuItem>
                      ))
                    ) : (
                        <Box mt={5}sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>
                    )}
                  </TextField>
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="job_title"
                    label="Job Title"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="job_title"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="bar_no"
                    label="Bar #"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="bar_no"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Box mt={4} mb={2}>
                <Divider />
                <Typography mt={2} component="h3" color="primary" variant="h5">
                  Contact Info
                </Typography>
              </Box>

              <Grid
                container
                spacing={2}
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "14rem" },
                }}
              >
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="street"
                    label="Street"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="street"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="suite"
                    label="Suite"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="suite"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="city"
                    label="City"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="city"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="state"
                    label="State"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="state"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="zip"
                    label="Zip"
                    type="number"
                    onChange={(e) => onChange(e)}
                    id="zip"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="ext"
                    label="+4"
                    type="number"
                    onChange={(e) => onChange(e)}
                    id="ext"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="p_email"
                    label="Personal Email"
                    type="email"
                    onChange={(e) => onChange(e)}
                    id="p_email"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <Box mt={1} ml={1}>
                    <Button variant="contained" color="primary">
                      Reset Password
                    </Button>
                  </Box>
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="mobile"
                    label="Mobile #"
                    type="phone"
                    onChange={(e) => onChange(e)}
                    id="mobile"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="home"
                    label="Home #"
                    type="phone"
                    onChange={(e) => onChange(e)}
                    id="home"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="work_no"
                    label="Work #"
                    type="phone"
                    onChange={(e) => onChange(e)}
                    id="work_no"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="phone_ext"
                    label="Extesion"
                    type="number"
                    onChange={(e) => onChange(e)}
                    id="phone_ext"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Grid item lg={12}>
                <Box
                  sx={{
                    "& .MuiButton-root": { m: 1, mr: 8 },
                    float: "right",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    sx={{ color: "white" }}
                  >
                    Activate
                  </Button>
                  <Button variant="contained" color="error">
                    Deactivate
                  </Button>
                </Box>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
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
                  <Typography color="white">Deactivate</Typography>
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
              {!loading ? showUsers() : <Box mt={5}sx={{ display: 'flex' }}>
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
