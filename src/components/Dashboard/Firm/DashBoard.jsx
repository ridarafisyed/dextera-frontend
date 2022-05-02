/** @format */

import React, { Fragment } from "react";

import { Paper, Grid, Box } from "@mui/material";

import Tasks from "../Tasks";
import { FirmCards } from "../Cards";

import { Chart, Chart2, BarChart, BarChart2, BarChart3 } from "./Charts";

const DashBoard = () => {
  return (
    <Fragment>
      {/*main dashboard section for display  */}
      <Box component={Paper} elevation={3} mt={4}>
        <Grid container spacing={2}>
          <Grid item lg={8} xs={12}>
            <FirmCards />
            <Grid container>
              <Grid item lg={5} xs={12}>
                <Chart2 />
              </Grid>
              <Grid item lg={7} xs={12}>
                <Tasks />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Chart />
          </Grid>
          <Grid item lg={12} xs={12}>
            <BarChart />
          </Grid>
          <Grid item lg={6} xs={6}>
            <BarChart2 />
          </Grid>
          <Grid item lg={6} xs={12}>
            <BarChart3 />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default DashBoard;
