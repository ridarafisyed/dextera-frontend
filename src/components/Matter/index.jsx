/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import MatterList from "./MatterList";
import { Grid, Box } from "@mui/material";
import Cards from "./Cards";
import Calendar from "./Calendar";
import Filters from "./Filters";
import MatterCards from "./MatterCards";
import MatterListLong from "./MatterListLong";
import NewMatter from "./NewMatter";
import MatterDetail from "./MatterDetail";

const Matters = () => {
  return (
    <Fragment>
      <Box>
        <Grid container>
          <Grid item lg={12}>
            <Filters />
          </Grid>
          <Grid item lg={12}>
            <MatterCards />
          </Grid>
          <Grid item lg={12} mt={2}>
            <MatterListLong />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

const MatterDashboard = () => {
  return (
    <Fragment>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={7}>
            <MatterList />
            <Calendar />
          </Grid>
          <Grid item lg={5}>
            <Cards />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

const Index = () => {
  return (
    <Fragment>
      <Tabs>
        <div label="Dashboard">
          <MatterDashboard />
        </div>
        <div label="Matter">
          <Matters />
        </div>
        <div label="New Matter">
          <NewMatter />
        </div>
        <div label="Smith vs. Jhon">
          <MatterDetail />
        </div>
      </Tabs>
    </Fragment>
  );
};

export default Index;
