/** @format */

import React, { Fragment } from "react";
import { Grid, Box } from "@mui/material";
import Filters from "../../components/Matter/Filters";
import MatterCards from "../../components/Matter/MatterCards";
import MatterListLong from "../../components/Matter/MatterListLong";

const Matters = () => {
  return (
    <Fragment>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Filters />
          </Grid>
          <Grid item xs={12}>
            <MatterCards />
          </Grid>
          <Grid item xs={12} mt={2}>
            <MatterListLong />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Matters;
