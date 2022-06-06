/** @format */

import React, { Fragment } from "react";

import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import SubCategory from "./SubCategory";
import Category from "./Category";
import Classification from "./Classification";

const ManageCategory = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item lg={8}>
          <Typography component="h3" variant="h5">
            Manage Category, Sub-category, Classification
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Box sx={{ float: "right" }}>
            <Button variant="contained" color="error">
              Delete Checked
            </Button>
          </Box>
        </Grid>

        <Grid item lg={12}>
          <Grid container spacing={5} mt={1}>
            <Grid item lg={4}>
              <Category />
            </Grid>
            <Grid item lg={4}>
              <SubCategory />
            </Grid>
            <Grid item lg={4}>
              <Classification />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ManageCategory;
