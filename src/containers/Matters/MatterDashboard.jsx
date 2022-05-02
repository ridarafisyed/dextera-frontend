/** @format */

import { Grid, Box } from "@mui/material";
import React, { Fragment } from "react";
import Cards from "../../components/Matter/Cards";
import Calendar from "../../components/Matter/Calendar";
import MatterList from "../../components/Matter/MatterList";

const MatterDashboard = () => {
  return (
    <Fragment>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <MatterList />
            <Calendar />
          </Grid>
          <Grid item xs={5}>
            <Cards />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MatterDashboard;
