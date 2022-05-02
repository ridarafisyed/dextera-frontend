/** @format */

import React, { Fragment } from "react";

import { Grid } from "@mui/material";
import Calender from "../Calender";
import Tasks from "../Tasks";
import { Chart2, PieChart, BarChart } from "./Chart";
import { LawyerCards } from "../Cards";

const DashBoard = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <LawyerCards />
        </Grid>
        <Grid item lg={4}>
          <PieChart />
        </Grid>
        <Grid item lg={6}>
          <Tasks />
        </Grid>
        <Grid item lg={4}>
          <Chart2 />
        </Grid>
        <Grid item lg={8}>
          <BarChart />
        </Grid>
        <Grid item>
          <Calender />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DashBoard;
