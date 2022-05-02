/** @format */

import React from "react";

import { Typography, Box, Paper, Grid } from "@mui/material";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const randomDate = (start, end) => {
  const getDateTime = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  const date = getDateTime.toLocaleDateString();
  const hour = getDateTime.getHours();
  const min = getDateTime.getMinutes();

  return date + " " + hour + ":" + min;
};

const Task = () => {
  return (
    <Grid container>
      <Grid item lg={12} xs={12}>
        <Typography component="h5" variant="h6" color="primary">
          My Tasks
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="primary" variant="p">
                    ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="p">
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="p">
                    Subject
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="p">
                    Detail
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow bgColor="#e85355">
                <TableCell>
                  <Typography variant="caption">123452</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    {randomDate(new Date(2012, 0, 1), new Date())}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">Submit Document X</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    Display first 3 links
                  </Typography>{" "}
                </TableCell>
              </TableRow>
              <TableRow bgColor="#fd9905">
                <TableCell>
                  <Typography variant="caption">113457</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    {randomDate(new Date(2012, 0, 1), new Date())}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">Document Y</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    Display more details
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow bgColor="#28c570">
                <TableCell>
                  <Typography variant="caption">113455</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    {randomDate(new Date(2012, 0, 1), new Date())}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">Document Z</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">Note in popup</Typography>
                </TableCell>
              </TableRow>
              <TableRow bgColor="white">
                <TableCell>
                  <Typography variant="caption">113458</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    {randomDate(new Date(2012, 0, 1), new Date())}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">Document XY</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    Display First 3 links
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Task;
