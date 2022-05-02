/** @format */

import { Typography, Box, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Fillters from "./Fillters";
import LedgerCards from "./LedgerCards";
import LedgerTimeList from "./LedgerTImeList";
import { LinkButton } from "../../styles/styles";

const LegderDashbard = () => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Box>
          <LedgerCards />
          <Fillters />
          <LedgerTimeList />
        </Box>
      </Grid>
    </Fragment>
  );
};

export default LegderDashbard;
