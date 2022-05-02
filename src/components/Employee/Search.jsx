/** @format */

import React, { Fragment, useState } from "react";
import axios from "axios";
import { TextField, Box, Grid, Switch, FormControlLabel } from "@mui/material";
import NumberFormat from "react-number-format";

import { LinkButton } from "../../styles/styles";

const Search = () => {
  const [longestTenure, setLongestTenure] = useState("");
  const [averageTenure, setAverageTenure] = useState("");
  const [currentTenure, setCurrentTenure] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [barDate, setBarDate] = useState("");
  const [searchData, setSearchData] = useState({
    state: "",
    city: "",
    practice_area: "",
    law_school: "",

    undergrad_study: "",
    lamguages: "",
    admitted_state: "",
    relocate: false,
  });

  const {
    state,
    city,
    practice_area,
    law_school,

    undergrad_study,
    lamguages,
    admitted_state,
    relocate,
  } = searchData;

  const onChange = (e) =>
    setSearchData({ ...searchData, [e.target.name]: e.target.value });

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
          <Grid item xs={4}>
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="state"
              label="state"
              type="number"
              min="0"
              value={state}
              onChange={(e) => onChange(e)}
              id="state"
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
              size="small"
              margin="normal"
              variant="outlined"
              name="admitted_state"
              label="admitted_state"
              type="text"
              value={admitted_state}
              onChange={(e) => onChange(e)}
              id="admitted_state"
            />
          </Grid>
          <Grid item xs={4}>
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

            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="undergrad_study"
              label="undergrad_study"
              step="0.01"
              type="text"
              value={undergrad_study}
              onChange={(e) => onChange(e)}
              id="undergrad_study"
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
          <Grid item xs={4}>
            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="practice_area"
              label="practice_area"
              type="text"
              value={practice_area}
              onChange={(e) => onChange(e)}
              id="practice_area"
              disabled
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

            <TextField
              size="small"
              fullWidth
              margin="normal"
              variant="outlined"
              name="lamguages"
              label="lamguages"
              type="text"
              value={lamguages}
              onChange={(e) => onChange(e)}
              id="lamguages"
            />
            {/* <Button
              variant="contained"
              type="submit"
              sx={{ float: "right" }}
              endIcon={<SaveIcon />}
            >
              Apply
            </Button> */}
            <Box m={3}>
              <LinkButton to="/job-result" sx={{ float: "right" }}>
                Apply
              </LinkButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Search;
