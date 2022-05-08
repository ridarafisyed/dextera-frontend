/** @format */

import React, { useState } from "react";
import isWeekend from "date-fns/isWeekend";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { TextField, Box, Paper, Grid } from "@mui/material";

const Calender = () => {
  const [value, setValue] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  return (
    <Box component={Paper} m={2}>
      <Grid container>
        {" "}
        <Grid item lg={6} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>{" "}
        <Grid item lg={6} xs={12}>
          {tasks.length !== 0 ? (
            tasks.map((task) => (
              <li>
                {task.id} - {task.name}
              </li>
            ))
          ) : (
            <h4> No record found</h4>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calender;
