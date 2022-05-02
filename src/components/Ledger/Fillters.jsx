/** @format */

import React, { Fragment, useState } from "react";
import {
  Box,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TextField,
  FormControlLabel,
} from "@mui/material";

import { LocalizationProvider, DateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const Fillters = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [billedby, setBilledby] = useState("");
  const [status, setStatus] = useState("");
  const [filter, setFilter] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Box
        component="form"
        Validate
        sx={{
          "& .MuiTextField-root": { m: 1, width: "15rem" },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <FormControl sx={{ width: "8rem", m: 2 }}>
          <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter By"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "8rem", m: 2 }}>
          <InputLabel id="demo-simple-select-label">Billed by</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={billedby}
            label="Billed By"
            onChange={(e) => setBilledby(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "8rem", m: 2 }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Age"
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Typography sx={{ mt: 2, mb: 1 }}> Date Range </Typography>
          <DateRangePicker
            calendars={1}
            value={dateRange}
            onChange={(newValue) => {
              setDateRange(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <Fragment>
                <TextField size="small" {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField size="small" {...endProps} />
              </Fragment>
            )}
          />
        </LocalizationProvider>
      </Box>
    </Fragment>
  );
};

export default Fillters;
