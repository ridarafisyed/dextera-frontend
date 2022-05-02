/** @format */

import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { TextField, Box, Grid, Button, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

import { LocalizationProvider, DateRangePicker, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { CreateMatter, CONFIG } from "../../api/MatterApi";

import { ActionAlerts, TotalDays, GetDate } from "../../utils/ActionAlerts";

const NewMatter = () => {
  // const matter_number = Math.floor(Math.random() * 10000000);
  const mask = "____-__-__";
  const matter_number = 23568;
  const [openDate, setOpenDate] = useState(new Date("2021-12-01T21:11:54"));
  const [whenDate, setWhenDate] = useState(new Date("2021-12-01T21:11:54"));
  const [closeDate, setCloseDate] = useState(new Date("2021-12-01T21:11:54"));
  const [totalDays, setTotalDays] = useState(0);
  const [matterData, setMatterData] = useState({
    contact: 0,
    matter_name: "",
    matter_type: "",
    matter_source: "",
    matter_status: "",
    assign_to: 0,
    assign_by: 0,
    billing_rate: 0,
    alerts: "",

    jurisdiction: "",
    status_limitaion: null,
    opposing_counsel: "",
    where: "",
    involved: "",
    witnesses: "",
    narrative: "",
  });

  const {
    contact,
    matter_name,
    matter_type,
    matter_source,
    matter_status,
    assign_to,
    assign_by,
    billing_rate,
    alerts,

    jurisdiction,
    status_limitaion,
    opposing_counsel,
    where,
    involved,
    witnesses,
    narrative,
  } = matterData;

  const onChange = (e) =>
    setMatterData({ ...matterData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    let open_date = GetDate(openDate);
    let close_date = GetDate(closeDate);
    let when = GetDate(whenDate);
    let total_days = totalDays;
    const body = JSON.stringify({
      contact,
      matter_name,
      matter_type,
      matter_source,
      matter_status,
      assign_to,
      assign_by,
      billing_rate,
      alerts,
      open_date,
      close_date,
      total_days,
      jurisdiction,
      status_limitaion,
      opposing_counsel,
      where,
      when,
      involved,
      witnesses,
      narrative,
    });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/new-matter/`, body, CONFIG)
      .then((res) => {
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      })
      .catch((err) => {
        return (
          <ActionAlerts value={{ status: err.statusText, message: "Failed" }} />
        );
      });
    console.log(body);
  };
  useEffect(() => {
    let days = TotalDays(openDate, closeDate);
    setTotalDays(days);
  }, [openDate, closeDate]);

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
        <Typography component="h3" variant="h4">
          Create New Matter
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={8}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="contact"
              label="contact"
              type="number"
              min="0"
              value={contact}
              onChange={(e) => onChange(e)}
              id="contact"
              sx={{
                width: "97%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_number"
              label="matter_number"
              type="text"
              value={matter_number}
              // onChange={(e) => onChange(e)}
              id="matter_number"
              disabled
              sx={{
                width: "48%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_name"
              label="matter_name"
              type="text"
              value={matter_name}
              onChange={(e) => onChange(e)}
              id="matter_name"
              sx={{
                width: "47%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="alerts"
              label="alerts"
              type="text"
              value={alerts}
              onChange={(e) => onChange(e)}
              id="alerts"
              autoComplete="alerts"
              sx={{
                width: "97%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_type"
              label="matter_type"
              type="text"
              value={matter_type}
              onChange={(e) => onChange(e)}
              id="matter_type"
              sx={{
                width: "48%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_source"
              label="matter_source"
              type="text"
              value={matter_source}
              onChange={(e) => onChange(e)}
              id="matter_source"
              sx={{
                width: "47%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_status"
              label="matter_status"
              type="text"
              value={matter_status}
              onChange={(e) => onChange(e)}
              id="matter_status"
              sx={{
                width: "48%",
              }}
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="assign_to"
              label="assign_to"
              type="number"
              value={assign_to}
              onChange={(e) => onChange(e)}
              id="assign_to"
              sx={{
                width: "47%",
              }}
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="billing_rate"
              label="billing_rate"
              step="0.01"
              type="number"
              value={billing_rate}
              onChange={(e) => onChange(e)}
              id="billing_rate"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="yyyy-MM-dd"
                mask={mask}
                label="Open Date"
                value={openDate}
                name="open"
                id="open"
                onChange={(e) => setOpenDate(e)}
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="yyyy-MM-dd"
                mask={mask}
                label="Close Date"
                value={closeDate}
                name="closed"
                id="closed"
                onChange={(e) => setCloseDate(e)}
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </LocalizationProvider>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="total_days"
              label="total_days"
              type="number"
              value={totalDays}
              onChange={(e) => setTotalDays(TotalDays(openDate, closeDate))}
              id="total_days"
              disabled
            />
          </Grid>

          <Grid item lg={4}>
            <br />
            <Typography component="h5" variant="h6">
              Legal Concerns
            </Typography>
            <br />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="jurisdiction"
              label="jurisdiction"
              type="text"
              value={jurisdiction}
              onChange={(e) => onChange(e)}
              id="jurisdiction"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="status_limitaion"
              label="status_limitaion"
              type="text"
              value={status_limitaion}
              onChange={(e) => onChange(e)}
              id="status_limitaion"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="opposing_counsel"
              label="opposing_counsel"
              type="text"
              value={opposing_counsel}
              onChange={(e) => onChange(e)}
              id="opposing_counsel"
            />
          </Grid>
          <Grid item lg={4}>
            <Typography component="h5" variant="h6" sx={{ fontSize: "1rem" }}>
              Event Detail
            </Typography>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="where"
              label="where"
              type="text"
              value={where}
              onChange={(e) => onChange(e)}
              id="where"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="yyyy-MM-dd"
                mask={mask}
                label="When"
                value={whenDate}
                name="when"
                id="when"
                onChange={(e) => setWhenDate(e)}
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </LocalizationProvider>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="involved"
              label="Who was involved"
              type="text"
              value={involved}
              onChange={(e) => onChange(e)}
              id="involved"
            />
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="witnesses"
              label="witnesses"
              type="text"
              value={witnesses}
              onChange={(e) => onChange(e)}
              id="witnesses"
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              size="small"
              fullWidth
              label="Customer Narrative of the Event"
              multiline
              type="text"
              rows={10}
              value={narrative}
              onChange={(e) => onChange(e)}
              defaultValue="Narrative"
              name="narrative"
              id="narrative"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{ float: "right" }}
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Box>
    </Fragment>
  );
};

export default NewMatter;
