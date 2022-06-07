/** @format */

import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import SaveIcon from "@mui/icons-material/Save";

import NumberFormat from "react-number-format";



const Contact = () => {
  const [clientNo, setClientNo] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [homeNo, setHomeNo] = useState("");
  const [officeNo, setOfficeNo] = useState("");
  const [faxNo, setFaxNo] = useState("");
  const [otherNo, setOtherNo] = useState("");
  const [zip, setZip] = useState("");
  const [plus4, setPlus4] = useState("");
  const [zip2, setZip2] = useState("");
  const [plus42, setPlus42] = useState("");

  const [contactData, setContactData] = useState({
    // company info
    company_name: "",
    website: "",
    ger_email: "",
    billing_email: "",
    // address
    street: "",
    suite: "",
    city: "",
    state: "",
    note: "",
    f_name: "",
    l_name: "",
    email_1: "",
    email_2: "",
    email_3: "",
    // other address
    street2: "",
    suite2: "",
    city2: "",
    state2: "",
    office: "",
    team: "",
    member: "",
    assign_to: "",
    contact: "",
    relation: "",
  });

  const {
    company_name,
    website,
    ger_email,
    billing_email,
    street,
    suite,
    city,
    state,
    note,
    f_name,
    l_name,
    email_1,
    email_2,
    email_3,
    street2,
    suite2,
    city2,
    state2,
    office,
    team,
    member,
    assign_to,
    contact,
    relation,
  } = contactData;

  const onChange = (e) => {
    e.persist();
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //   let date = GetDate(pickDate);
    //   const body = JSON.stringify({
    //     company_name,
    //     website,
    //     ger_email,
    //     billing_email,
    //     street,
    //     suite,
    //     city,
    //     state,
    //     zip,
    //     plus4,
    //     client_no,
    //     f_name,
    //     l_name,
    //     dob,
    //     ssn,
    //     mobile_no,
    //     home_no,
    //     office_no,
    //     fax_no,
    //     other_no,
    //     email_1,
    //     email_2,
    //     email_3,
    //     street2,
    //     suite2,
    //     city2,
    //     state2,
    //     zip2,
    //     plus42,
    //     office,
    //     team,
    //     member,
    //     assign_to,
    //     contact,
    //     relation,
    //   });
    //   axios
    //     .post(`${process.env.REACT_APP_API_URL}/api/contact/`, body, CONFIG)
    //     .then((res) => {
    //       <ActionAlerts value={{ status: res.statusText, message: "Success" }} />;
    //     })
    //     .catch((err) => {
    //       <ActionAlerts value={{ status: err.statusText, message: "Failed" }} />;
    //     });
    //   console.log(body);
  };

  return (
    <Fragment>
      <Box
        component="form"
        Validate
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <Grid container p={2}>
          <Grid item xs={6}>
            <Typography component="h4" variant="h5">
              Company info
            </Typography>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="company_name"
              label="Company Name"
              type="text"
              value={company_name}
              onChange={(e) => onChange(e)}
              id="company_name"
              autoComplete="company_name"
            />
            <NumberFormat
              size="small"
              margin="normal"
              variant="outlined"
              label="Client #"
              id="clientno"
              thousandsGroupStyle="thousand"
              format="+1 (###) ###-####"
              mask="_"
              customInput={TextField}
              name="clientno"
              type="text"
              thousandSeparator={true}
              value={clientNo}
              onValueChange={(e) => setClientNo(e.value)}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="First Name"
              label="f_name"
              type="text"
              value={f_name}
              onChange={(e) => onChange(e)}
              id="f_name"
              autoComplete="f_name"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="Last Name"
              label="l_name"
              type="text"
              value={l_name}
              onChange={(e) => onChange(e)}
              id="l_name"
              autoComplete="l_name"
            />
            <NumberFormat
              size="small"
              margin="normal"
              variant="outlined"
              label="DOB"
              id="dob"
              format="####/##/##"
              placeholder="YYYY/MM/DD"
              mask={["Y", "Y", "Y", "Y", "M", "M", "D", "D"]}
              customInput={TextField}
              name="dob"
              type="text"
              thousandSeparator={true}
              value={dob}
              onValueChange={(e) => setDob(e.value)}
            />
            <NumberFormat
              size="small"
              margin="normal"
              variant="outlined"
              format="#### #### ##"
              customInput={TextField}
              label="SSN"
              id="ssn"
              name="ssn"
              value={ssn}
              type="text"
              onValueChange={(e) => setSsn(e.value)}
            />
            <NumberFormat
              size="small"
              margin="normal"
              variant="outlined"
              label="Mobile #"
              id="mobile_no"
              thousandsGroupStyle="thousand"
              format="+1 (###) ###-####"
              mask="_"
              customInput={TextField}
              name="mobile_no"
              type="text"
              thousandSeparator={true}
              value={mobileNo}
              onValueChange={(e) => setMobileNo(e.value)}
            />
            <NumberFormat
              size="small"
              margin="normal"
              variant="outlined"
              label="Home #"
              id="home_no"
              thousandsGroupStyle="thousand"
              format="+1 (###) ###-####"
              mask="_"
              customInput={TextField}
              name="home_no"
              type="text"
              thousandSeparator={true}
              value={homeNo}
              onValueChange={(e) => setHomeNo(e.value)}
            />
            <NumberFormat
              size="small"
              margin="normal"
              variant="outlined"
              label="Office #"
              id="offlice_no"
              thousandsGroupStyle="thousand"
              format="+1 (###) ###-####"
              mask="_"
              customInput={TextField}
              name="office_no"
              type="text"
              thousandSeparator={true}
              value={officeNo}
              onValueChange={(e) => setOfficeNo(e.value)}
            />
            <NumberFormat
              size="small"
              margin="normal"
              variant="outlined"
              label="Fax #"
              id="fax_no"
              thousandsGroupStyle="thousand"
              format="+1 (###) ###-####"
              mask="_"
              customInput={TextField}
              name="fax_no"
              type="text"
              thousandSeparator={true}
              value={faxNo}
              onValueChange={(value) => setFaxNo(value)}
            />
            <NumberFormat
              size="small"
              margin="normal"
              variant="outlined"
              label="Other #"
              id="other_no"
              thousandsGroupStyle="thousand"
              format="+1 (###) ###-####"
              mask="_"
              customInput={TextField}
              name="other_no"
              type="text"
              thousandSeparator={true}
              value={otherNo}
              onValueChange={(e) => setOtherNo(e.value)}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="email_1"
              label="Email 1"
              type="email"
              value={email_1}
              onChange={(e) => onChange(e)}
              id="email_1"
              autoComplete="email_1"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="email_2"
              label="Email 2"
              type="email"
              value={email_2}
              onChange={(e) => onChange(e)}
              id="email_2"
              autoComplete="email_2"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="email_3"
              label="Email 3"
              value={email_3}
              type="email"
              onChange={(e) => onChange(e)}
              id="email_3"
              autoComplete="email_3"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="street"
              label="street"
              type="text"
              value={street}
              onChange={(e) => onChange(e)}
              id="street"
              autoComplete="street"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="suite"
              label="Suite"
              type="text"
              value={suite}
              onChange={(e) => onChange(e)}
              id="suite"
              autoComplete="suite"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="city"
              label="City"
              value={city}
              type="text"
              onChange={(e) => onChange(e)}
              id="city"
              autoComplete="city"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="State"
              type="text"
              value={state}
              onChange={(e) => onChange(e)}
              id="state"
              autoComplete="state"
            />
            <NumberFormat
              margin="normal"
              variant="outlined"
              thousandsGroupStyle="thousand"
              format="####"
              customInput={TextField}
              name="zip"
              label="zip"
              type="text"
              id="zip"
              type="text"
              value={zip}
              onValueChange={(e) => setZip(e.value)}
            />

            <NumberFormat
              margin="normal"
              variant="outlined"
              thousandsGroupStyle="thousand"
              format="####"
              customInput={TextField}
              name="plus4"
              label="+4"
              type="text"
              id="plus4"
              type="text"
              value={plus4}
              onValueChange={(e) => setPlus4(e.value)}
            />
            <TextField
              fullWidth
              size="small"
              multiline
              rows={5}
              margin="normal"
              variant="outlined"
              name="Notes..."
              label="note"
              type="text"
              value={note}
              onChange={(e) => onChange(e)}
              id="note"
              autoComplete="note"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h6">
              Alternate Information
            </Typography>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="webiste"
              label="Webiste"
              type="text"
              value={website}
              onChange={(e) => onChange(e)}
              id="webiste"
              autoComplete="webiste"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="ger_email"
              label="General Email"
              type="text"
              value={ger_email}
              onChange={(e) => onChange(e)}
              id="ger_email"
              autoComplete="ger_email"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="billing_email"
              label="Invoice/ Billing Email"
              type="text"
              value={billing_email}
              onChange={(e) => onChange(e)}
              id="billing_email"
              autoComplete="billing_email"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="street"
              label="Street"
              type="text"
              value={street2}
              onChange={(e) => onChange(e)}
              id="street"
              autoComplete="street"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="suite"
              label="Suite"
              type="text"
              value={suite2}
              onChange={(e) => onChange(e)}
              id="suite"
              autoComplete="suite"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="city"
              label="City"
              type="text"
              value={city2}
              onChange={(e) => onChange(e)}
              id="city"
              autoComplete="city"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="State"
              type="text"
              value={state}
              onChange={(e) => onChange(e)}
              id="state"
              autoComplete="state"
            />
            <NumberFormat
              margin="normal"
              variant="outlined"
              thousandsGroupStyle="thousand"
              format="####"
              customInput={TextField}
              name="zip2"
              label="Zip"
              type="text"
              id="zip2"
              type="text"
              value={zip2}
              onValueChange={(e) => setZip2(e.value)}
            />
            <NumberFormat
              margin="normal"
              variant="outlined"
              thousandsGroupStyle="thousand"
              format="####"
              customInput={TextField}
              name="plus42"
              label="+4"
              type="text"
              id="plus42"
              type="text"
              value={plus42}
              onValueChange={(e) => setPlus42(e.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <Typography component="h4" variant="h6">
                  Source
                </Typography>
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="office"
                  label="Office"
                  type="text"
                  value={office}
                  onChange={(e) => onChange(e)}
                  id="office"
                  autoComplete="office"
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="team"
                  label="Team"
                  type="text"
                  value={team}
                  onChange={(e) => onChange(e)}
                  id="team"
                  autoComplete="team"
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="member"
                  label="Member"
                  type="text"
                  value={member}
                  onChange={(e) => onChange(e)}
                  id="member"
                  autoComplete="member"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography component="h4" variant="h6">
                  Assigned To
                </Typography>
                <FormControl
                  size="small"
                  sx={{ mt: 2, mb: 2, minWidth: "14rem" }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Assigned To
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={assign_to}
                    onChange={(e) => onChange(e)}
                    autoWidth
                    label="assign_to"
                  >
                    <MenuItem value="">
                      <em>Auto Assign</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </FormControl>

                <Button variant="contained" color="primary">
                  Auto Assign
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Typography component="h4" variant="h6">
                  Linked Contacts
                </Typography>
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="contact"
                  label="Contact"
                  type="text"
                  value={contact}
                  onChange={(e) => onChange(e)}
                  id="contact"
                  autoComplete="contact"
                />
                <TextField
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="relation"
                  label="Relation"
                  type="text"
                  value={relation}
                  onChange={(e) => onChange(e)}
                  id="relation"
                  autoComplete="relation"
                />
              </Grid>
            </Grid>
            <Box sx={{ float: "right" }}>
              <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Contact;
