/** @format */

import React, { Fragment, useEffect, useState } from "react";
import {
  TextField,
  Box,
  Grid,
  Switch,
  MenuItem,
  Button,
  Typography,
  Divider,
  FormControlLabel,
  Stack,
} from "@mui/material";
import axios from "axios";

import { ActionAlerts } from "../../utils/ActionAlerts";
import { useToggle } from "../../context/useToggle";
import { CONFIG } from "../../api/MatterApi";

const CreateUser = () => {
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

  const FetchRoleData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/role/`, CONFIG)
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
      .get(`${process.env.REACT_APP_API_URL}/api/group/`, CONFIG)
      .then((res) => {
        setLoading2(false);
        setGroups(res.data);
      })
      .catch((err) => {
        setLoading2(false);
      });
  };
  useEffect(() => {
    FetchRoleData();
    FetchGroupData();
  }, []);
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
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
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
      <Box component="form" Validate onSubmit={(e) => handleSubmit(e)}>
        <Typography component="h3" variant="h4">
          Create User
        </Typography>
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
                <span>Loading ...</span>
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
              onChange={(e) => onChange(e)}
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
                <span>Loading ...</span>
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
      </Box>
    </Fragment>
  );
};

export default CreateUser;
