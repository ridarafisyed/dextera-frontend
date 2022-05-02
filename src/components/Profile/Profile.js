/** @format */

import React, { Fragment, useState } from "react";

import {
  Button,
  TextField,
  Checkbox,
  Grid,
  FormControlLabel,
  Tab,
  Paper,
  Box,
  Typography,
  Switch,
} from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import { connect } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";

import { ActionAlerts } from "../../utils/ActionAlerts";

import { CONFIG } from "../../api/MatterApi";
import NumberFormat from "react-number-format";

// import { update_profile } from "../../store/actions/profile";

const Profile = ({ profile }) => {
  const [value, setValue] = React.useState("1");
  const [gradYear, setGradYear] = useState("");
  const [barDate, setBarDate] = useState("");
  const [underGradYear, setUnderGradYear] = useState("");

  const [mobileNo, setMobileNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [barNo, setBarNo] = useState("");
  const [practiceTime, setPracticeTime] = useState("");
  const [longestTenure, setLongestTenure] = useState("");
  const [averageTenure, setAverageTenure] = useState("");
  const [currentTenure, setCurrentTenure] = useState("");
  const [zip2, setZip2] = useState("");
  const [plus42, setPlus42] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: 0,
    phone: 0,
    state: "",
    city: "",
    language: "",
    locate: false,
    search_active: false,
    law_school: "",
    grad_year: "",
    bar_admit_date: "",
    undergrad_school: "",
    undergrad_area: "",
    undergrad_year: "",
    bar_no: 0,
    admitted_practice: "",
    practice_time: "",
    longest_tenure: "",
    average_tenure: "",
    current_tenure: "",
    past_bar_companies_no: "",
    primary_area: "",
  });
  const {
    username,
    email,
    mobile,
    phone,
    state,
    city,
    language,
    locate,
    search_active,
    law_school,
    grad_year,
    bar_admit_date,
    undergrad_school,
    undergrad_area,
    undergrad_year,
    bar_no,
    admitted_practice,
    practice_time,
    longest_tenure,
    average_tenure,
    current_tenure,
    past_bar_companies_no,
    primary_area,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let id = profile.id;
    const body = JSON.stringify({
      username,
      email,
      mobile,
      phone,
      state,
      city,
      language,
      locate,
      search_active,
      law_school,
      grad_year,
      bar_admit_date,
      undergrad_school,
      undergrad_area,
      undergrad_year,
      bar_no,
      admitted_practice,
      practice_time,
      longest_tenure,
      average_tenure,
      current_tenure,
      past_bar_companies_no,
      primary_area,
    });
    console.log(body);
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/profile/${id}/`,
        body,
        CONFIG,
      )
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      {/* {profile ? ( */}
      <Box p={5}>
        <Paper elevation={5} sx={{ borderRadius: 3 }}>
          <TabContext value={value} p={8}>
            <Box component="form" onSubmit={(e) => onSubmit(e)}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Profile" value="1" />
                  <Tab label="Education" value="2" />
                  <Tab label="Work History" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid container spacing={2}>
                  <Grid item sx={12} xs={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      variant="outlined"
                      label="Username"
                      value={username}
                      id="username"
                      name="username"
                      type="text"
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.username}
                      disabled
                    />

                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Mobile #"
                      id="mobile"
                      thousandsGroupStyle="thousand"
                      format="+1 (###) ###-####"
                      mask="_"
                      customInput={TextField}
                      name="mobile"
                      type="text"
                      thousandSeparator={true}
                      value={mobileNo}
                      onValueChange={(e) => setMobileNo(e.value)}
                    />

                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Phone #"
                      id="phone"
                      thousandsGroupStyle="thousand"
                      format="+1 (###) ###-####"
                      mask="_"
                      customInput={TextField}
                      name="phone"
                      type="text"
                      thousandSeparator={true}
                      value={phoneNo}
                      onValueChange={(e) => setPhoneNo(e.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.email}
                      disabled
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="State"
                      id="state"
                      name="state"
                      type="text"
                      value={state}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.state}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="City"
                      id="city"
                      name="city"
                      type="text"
                      value={city}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.city}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Language(s)"
                      value={language}
                      id="language"
                      name="language"
                      type="text"
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.language}
                    />
                    <FormControlLabel
                      fullWidth
                      control={<Switch defaultChecked />}
                      label="Willing to locate"
                      id="locate"
                      name="locate"
                      value={locate}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.locate}
                    />
                    <FormControlLabel
                      fullWidth
                      control={<Switch defaultChecked />}
                      label="Search Type (Active/ Passiv)"
                      id="search_active"
                      name="search_active"
                      value={search_active}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.search_active}
                    />
                    <br />
                    <br />
                    <Button
                      m={5}
                      variant="contained"
                      sx={{
                        float: "right",
                        color: "white",
                      }}
                      color="success"
                      onClick={() => setValue("2")}
                      endIcon={<KeyboardArrowRightIcon />}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      variant="outlined"
                      label="Law School"
                      id="law_school"
                      name="law_school"
                      value={law_school}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.law_school}
                    />

                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Grad year"
                      id="grad_year"
                      format="####"
                      placeholder="YYYY"
                      mask={["Y", "Y", "Y", "Y"]}
                      customInput={TextField}
                      name="grad_year"
                      type="text"
                      thousandSeparator={true}
                      value={gradYear}
                      onValueChange={(e) => setGradYear(e.value)}
                    />

                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      format="####/##/##"
                      placeholder="YYYY/MM/DD"
                      mask={["Y", "Y", "Y", "Y", "M", "M", "D", "D"]}
                      customInput={TextField}
                      label="Bar Admittance Date"
                      id="bar_admit_date"
                      name="bar_admit_date"
                      value={barDate}
                      onValueChange={(e) => setBarDate(e.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Undergrad school"
                      id="undergrad_school"
                      name="undergrad_school"
                      value={undergrad_school}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.undergrad_school}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Undergrade area of study"
                      id="undergrad_area"
                      name="undergrad_area"
                      value={undergrad_area}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.undergrad_area}
                    />

                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      format="####"
                      placeholder="YYYY"
                      mask={["Y", "Y", "Y", "Y"]}
                      customInput={TextField}
                      label="Undergrade year"
                      id="undergrad_year"
                      name="undergrad_year"
                      value={underGradYear}
                      type="text"
                      onValueChange={(e) => setUnderGradYear(e.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      format="#### #### ##"
                      customInput={TextField}
                      label="Bar #"
                      id="bar_no"
                      name="bar_no"
                      value={barNo}
                      type="text"
                      onValueChange={(e) => setBarNo(e.value)}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Admitted practice (state & District)"
                      value={admitted_practice}
                      id="admitted_practice"
                      name="admitted_practice"
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.admitted_practice}
                    />
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      mb={5}
                      sx={{
                        float: "right",
                        color: "white",
                      }}
                      color="success"
                      onClick={() => setValue("3")}
                      endIcon={<KeyboardArrowRightIcon />}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      placeholder="MM/YY"
                      mask={["M", "M", "Y", "Y"]}
                      format="##/##"
                      customInput={TextField}
                      label="Practive Time (months / years)"
                      id="practice_time"
                      name="practice_time"
                      value={practiceTime}
                      type="text"
                      onValueChange={(e) => setPracticeTime(e.value)}
                    />
                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      placeholder="MM/YY"
                      mask={["M", "M", "Y", "Y"]}
                      format="##/##"
                      customInput={TextField}
                      label="Longest tenure (months / years)"
                      id="longest_tenure"
                      name="longest_tenure"
                      value={longestTenure}
                      type="text"
                      onValueChange={(e) => setLongestTenure(e.value)}
                    />
                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      placeholder="MM/YY"
                      mask={["M", "M", "Y", "Y"]}
                      format="##/##"
                      customInput={TextField}
                      label="Average tenure (months / years)"
                      value={averageTenure}
                      id="average_tenure"
                      name="average_tenure"
                      type="text"
                      onValueChange={(e) => setAverageTenure(e.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <NumberFormat
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      placeholder="MM/YY"
                      mask={["M", "M", "Y", "Y"]}
                      format="##/##"
                      customInput={TextField}
                      label="Time at Current Company (months / years)"
                      id="current_tenure"
                      name="current_tenure"
                      value={currentTenure}
                      type="text"
                      onValueChange={(e) => setCurrentTenure(e.value)}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="# of Companies Post Bar"
                      id="past_bar_companies_no"
                      name="past_bar_companies_no"
                      value={past_bar_companies_no}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.past_bar_companies_no}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Primary areas of Law"
                      id="primary_area"
                      name="primary_area"
                      value={primary_area}
                      onChange={(e) => onChange(e)}
                      //defaultValue={profile.primary_area}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        float: "right",
                        marginTop: "10rem",
                        color: "white",
                      }}
                      color="success"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </TabContext>
        </Paper>
      </Box>
      {/* // ) : ( // <Typography>Something wend wrong!</Typography>
      // )} */}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  profile: state.auth.profile,
});

export default connect(mapStateToProps)(Profile);
