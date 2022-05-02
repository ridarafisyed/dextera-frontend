/** @format */

import React, { Fragment, useState } from "react";

import {
  TextField,
  Box,
  Grid,
  Switch,
  Button,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import NumberFormat from "react-number-format";

import { LocalizationProvider, TimePicker, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const Saved = () => {
  const [pickTime, setPickTime] = useState(new Date("2021-12-01T21:00:00"));
  const [pickDate, setPickDate] = useState(new Date("2021-12-01T21:11:54"));
  const [jobData, setJobData] = useState({
    name: "",
    state: "",
    city: "",
    email: "",
    mobile: "",
    home: "",
    law_school: "",
    grad_year: "",
    bar_adm_year: "",
    practice_area: "",
    mail_add: "",
    relocate: false,
    date: "",
    time: "",
    link: "",
    notes: "",
    file: "",
  });

  const {
    name,
    state,
    city,
    email,
    mobile,
    home,
    law_school,
    grad_year,
    bar_adm_year,
    practice_area,
    mail_add,
    relocate,
    date,
    time,
    link,
    notes,
    file,
  } = jobData;

  const onChange = (e) =>
    setJobData({ ...jobData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                control={<Checkbox />}
                label="Save"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Contacted"
                labelPlacement="start"
              />
              <Typography component="label" m={1}>
                Interested :
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="Yes"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="No"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Interviewed"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Accept"
                labelPlacement="start"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Reject"
                labelPlacement="start"
              />
              <Box ml={3}>
                <Typography component="h4" color="success" variant="h5">
                  Overall Score: 74%
                </Typography>
              </Box>
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="name"
              label="name"
              type="text"
              value={name}
              onChange={(e) => onChange(e)}
              id="name"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="city"
              label="city"
              type="text"
              value={city}
              onChange={(e) => onChange(e)}
              id="city"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="state"
              type="text"
              value={state}
              onChange={(e) => onChange(e)}
              id="state"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="email"
              label="email"
              type="email"
              value={email}
              onChange={(e) => onChange(e)}
              id="email"
            />
          </Grid>
          <Grid item xs={4}>
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
              value={mobile}
              onValueChange={(value) => onChange(value)}
            />
            <NumberFormat
              fullWidth
              margin="normal"
              variant="outlined"
              label="Home #"
              id="home"
              thousandsGroupStyle="thousand"
              format="+1 (###) ###-####"
              mask="_"
              customInput={TextField}
              name="home"
              type="text"
              thousandSeparator={true}
              value={home}
              onValueChange={(value) => onChange(value)}
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="law_school"
              label="law_school"
              type="text"
              value={law_school}
              onChange={(e) => onChange(e)}
              id="law_school"
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
              value={grad_year}
              onValueChange={(value) => onChange(value)}
            />
          </Grid>
          <Grid item xs={4}>
            <NumberFormat
              fullWidth
              margin="normal"
              variant="outlined"
              format="####/##/##"
              placeholder="YYYY/MM/DD"
              mask={["Y", "Y", "Y", "Y", "M", "M", "D", "D"]}
              customInput={TextField}
              label="Bar Admittance"
              id="bar_adm_year"
              name="bar_adm_year"
              value={bar_adm_year}
              type="text"
              onValueChange={(value) => onChange(value)}
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="mail_add"
              label="mail_add"
              type="text"
              value={mail_add}
              onChange={(e) => onChange(e)}
              id="mail_add"
            />
            <FormControlLabel
              control={
                <Switch
                  name="relocate"
                  value={relocate}
                  onChange={(e) => onChange(e)}
                />
              }
              label="Relocate"
              labelPlacement="start"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box m={1}>
                  <Typography component="lable"> Writing Sample </Typography>

                  <Button variant="contained" disabled>
                    + Attach File
                  </Button>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Pick Time"
                    name="picktime"
                    id="picktime"
                    value={pickTime}
                    onChange={(e) => {
                      setPickTime(e);
                    }}
                    renderInput={(params) => (
                      <TextField size="small" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="yyyy-MM-dd"
                    mask="____-__-__"
                    label="Pick Date"
                    value={pickDate}
                    name="pickdate"
                    id="pickdate"
                    onChange={(e) => setPickDate(e)}
                    renderInput={(params) => (
                      <TextField size="small" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>

                <TextField
                  size="small"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="link"
                  type="link"
                  defaultValue="2021-12-01"
                  value={link}
                  onChange={(e) => onChange(e)}
                  id="link"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  multiline
                  rows={8}
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="notes"
                  type="text"
                  value="Notes ..."
                  id="notes"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Saved;
