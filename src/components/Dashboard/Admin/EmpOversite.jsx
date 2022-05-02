/** @format */

import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";

import NumberFormat from "react-number-format";

const EmpOversite = () => {
  return (
    <Fragment>
      <Typography color="blue" sx={{ fontSize: "1.1rem" }}>
        Employee Oversite
      </Typography>
      <Typography variant="h3" component="h3" sx={{ fontSize: "1.8rem" }}>
        <NumberFormat
          value={3498}
          displayType={"text"}
          thousandSeparator={true}
        />
      </Typography>

      <Typography component="h4" sx={{ fontSize: "1.1rem" }}>
        Employees logged in
      </Typography>

      <Typography component="h4" sx={{ fontSize: "1.2rem" }}>
        <span style={{ color: "purple" }}> Total ticket issued:</span>
        <NumberFormat
          value={3498}
          displayType={"text"}
          thousandSeparator={true}
        />
      </Typography>
      <Typography component="h4" sx={{ fontSize: "1.2rem" }}>
        <span style={{ color: "seagreen" }}>Trouble ticket Resolved: </span>
        <NumberFormat
          value={3498}
          displayType={"text"}
          thousandSeparator={true}
        />
      </Typography>
    </Fragment>
  );
};

export default EmpOversite;
