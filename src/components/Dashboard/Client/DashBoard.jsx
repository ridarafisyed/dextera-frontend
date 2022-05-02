/** @format */

import React, { Fragment } from "react";
// import axios from 'axios';

import { Grid } from "@mui/material";

import Calender from "../Calender";
import ProgressBar from "../ProgressBar";

import Tasks from "../Tasks";
import { CustomerCards } from "../Cards";

const DashBoard = () => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item lg={2} xs={12}>
          <CustomerCards />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Calender />
        </Grid>
        <Grid item p={2} lg={6} xs={12}>
          <Tasks />
        </Grid>
        <Grid item lg={12} xs={12}>
          <ProgressBar />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DashBoard;
