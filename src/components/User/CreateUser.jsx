/** @format */

import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Switch from "@mui/material/Switch"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider"
import FormControlLabel from "@mui/material/FormControlLabel"
import Stack from "@mui/material/Stack"
import axios from "axios";
import NumberFormat from 'react-number-format';
import {ActionAlerts}  from "../../utils/ActionAlerts";
import {useToggle}  from "../../context/useToggle";
import  {CONFIG}  from "../../api/MatterApi";

const CreateUser = ({userId}) => {

  const history = useHistory();

  // const [data, setData] = useState([])
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("");
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  // const [rateType, setRateType] = useState("");

  
  const [approvel, setApprovel] = useToggle(false);
  const [userData, setUserData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
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
    first_name,
    middle_name,
    last_name,
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

  const FetchRoleData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/auth/roles/`, CONFIG)
      .then((res) => {
        console.log(res.data);
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
        setGroups(res.data);
      })
      .catch((err) => {
        setLoading2(false);
      });
  };
  useEffect(() => {
    if(userId >= 0){
    
    }
    
  }, []);
  useEffect(() => {
    FetchRoleData();
    FetchGroupData();
  }, []);

const handleDelete = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/create-member/${id}/`,
        CONFIG,
      )
      .then((res) => {
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      });
  };
const handleDeactivate = (id) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/user/auth/is-active-user/${id}/`, false,
        CONFIG,
      )
      .then((res) => {
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      });
  };
const handleSubmit = (e) => {

    // console.log("some thing happen")
    const username = first_name.toLowerCase() + last_name.toLowerCase()
    const password = username
    const email = c_email
    
    const member = {
      first_name,
      middle_name,
      last_name,
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
    };
    const body = JSON.stringify({username, first_name, last_name, email, password, member})
      axios.post(`${process.env.REACT_APP_API_URL}/user/auth/create-user-member/`,body, CONFIG)
    
      .then((res) => {
      
        return (
            // <Redirect to='/users' />
            history.push("/users", { params: false })
        );
      })
      .catch((err) => {
      
        return (
          <ActionAlerts
            value={{ status: err.statusText, message: "Success" }}
          />
        );
      });
  };
  return (
    <Fragment>
      <Box component="form" autoComplete="off"
            Validate onSubmit={(e) => handleSubmit(e)}>
        <Typography component="h3" variant="h4">
          Create User
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
                <Grid item lg={3}>
                  <TextField
                    required
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="first_name"
                    label="First Name"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="first_name"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="middle_name"
                    label="Middle Name"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="middle_name"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    required
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="last_name"
                    label="Last Name"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="last_name"
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    required
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="c_email"
                    label="Company Email"
                    type="email"
                    onChange={(e) => onChange(e)}
                    id="c_email"
                  />
                </Grid>
                <Grid item lg={3}>
              
                  <NumberFormat
                      required
                      id="rate"
                      customInput={TextField}
                      size="small"
                      margin="normal"
                      variant="outlined"
                      name="rate"
                      label="Rate $"
                      onChange={(e) => onChange(e)}
                      type="number"
                      decimalScale={2}
                      InputProps={{
                            inputProps: { 
                                max: 100, min: 10 
                            }
                        }}
                      thousandSeparator={true}
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
                    required
                    select
                    size="small"
                    margin="normal"
                    variant="outlined"
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
                      <span>Loading ...</span>
                    )}
                  </TextField>
                </Grid>

                <Grid item lg={3}>
                  <TextField
                    required
                    select
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="time_zone"
                    label="Time Zone"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="time_zone"
                  >
                    <MenuItem value="AKST">Alaska Standard Time</MenuItem>
                    <MenuItem value="PST">Pacific Standard Time</MenuItem>
                    <MenuItem value="CST">Central Standard Time</MenuItem>
                    <MenuItem value="EST">Eastern Standard Time</MenuItem>
                  </TextField>
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    required
                    select
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="group"
                    label="Group"
                    type="text"
                    onChange={(e) => setGroup(e.target.value)}
                    id="group"
                  >
                    {!loading2 ? (
                      groups.map((data) => (
                        <MenuItem key={data.id} value={data.name}>
                          {data.name}
                        </MenuItem>
                      ))
                    ) : (
                      <span>Loading ...</span>
                    )}
                  </TextField>
                </Grid>
                <Grid item lg={3}>
                  <TextField
                  required
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="job_title"
                    label="Job Title"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="job_title"
                  />
                </Grid>
                <Grid item lg={3}>
                  {role === "Sr. Atterney" || role === "Jr. Atterney"  ? <NumberFormat
                      customInput={TextField}
                      size="small"
                      margin="normal"
                      variant="outlined"
                      name="bar_no"
                      label="Bar #"
                      onChange={(e) => onChange(e)}
                      id="bar_no"

                      format="######"
                      type="tel"
                    />: <NumberFormat
                      disabled
                      customInput={TextField}
                      size="small"
                      margin="normal"
                      variant="outlined"
                      name="bar_no"
                      label="Bar #"
                      onChange={(e) => onChange(e)}
                      id="bar_no"

                      format="######"
                      type="tel"
                    />}
                   
                </Grid>
              </Grid>
              <Box mt={4} mb={2}>
                <Divider />
                <Typography mt={2} component="h3" color="primary" variant="h5">
                  Contact Info
                </Typography>
              </Box>Admin
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
                  />
                </Grid>
                <Grid item lg={3}>
                  <NumberFormat
                      customInput={TextField}
                      format="#####"
                      size="small"
                      margin="normal"
                      variant="outlined"
                      name="zip"
                      label="Zip"
                      type="tel"
                      onChange={(e) => onChange(e)}
                      id="zip"

                    />
                </Grid>
                <Grid item lg={3}> 
                  <NumberFormat
                      customInput={TextField}
                      format="####"
                      size="small"
                      margin="normal"
                      variant="outlined"
                      name="ext"
                      label="+4"
                      type="tel"
                      onChange={(e) => onChange(e)}
                      id="ext"

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
                  
                  <NumberFormat
                      customInput={TextField}
                      format="### ### ####"
                       size="small"
                      margin="normal"
                      variant="outlined"
                      name="mobile"
                      label="Mobile #"
                      type="phone"
                      onChange={(e) => onChange(e)}
                      id="mobile"

                    />
                </Grid>
                <Grid item lg={3}>
                  <NumberFormat
                      customInput={TextField}
                      format="### ### ####"
                       size="small"
                      margin="normal"
                      variant="outlined"
                      name="home"
                      label="Home #"
                      type="phone"
                      onChange={(e) => onChange(e)}
                      id="home"

                    />
                </Grid>
                <Grid item lg={3}>
                  <NumberFormat
                      customInput={TextField}
                      format="### ### ####"
                      size="small"
                      margin="normal"
                      variant="outlined"
                      name="work"
                      label="Work #"
                      type="phone"
                      onChange={(e) => onChange(e)}
                      id="work"

                    />
                </Grid>
                <Grid item lg={3}>
              
                  <NumberFormat
                    customInput={TextField}
                    format="####"
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="phone_ext"
                    label="Extesion"
                    type="text"
                    onChange={(e) => onChange(e)}
                    id="phone_ext"
                    />
                </Grid>
              </Grid>
              <Grid item lg={12}>
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
                    Create
                  </Button>
                  
                  <Button variant="contained" color="warning"sx={{color:"#fff"}}>
                    Deactivate
                  </Button>
                  <Button variant="contained" color="error" sx={{color:"#fff"}}>
                    Delete
                  </Button>
                </Box>
              </Grid>
       
      </Box>
    </Fragment>
  );
};

export default CreateUser;
