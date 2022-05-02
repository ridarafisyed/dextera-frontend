/** @format */

import React, { Fragment } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Cards = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ minWidth: 160 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                Tasks cleared Last day
              </Typography>
              <Typography variant="h3" component="h4">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minWidth: 160 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                Goal Today
              </Typography>
              <Typography variant="h3" component="h4">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minWidth: 160 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                Personal Best
              </Typography>
              <Typography variant="h3" component="h4">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minWidth: 160 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                Company Record
              </Typography>
              <Typography variant="h3" component="h4">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Cards;
