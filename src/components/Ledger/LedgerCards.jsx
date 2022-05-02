/** @format */

import React, { Fragment } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import NumberFormat from "react-number-format";

const LedgerCards = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item>
              <Card sx={{ minWidth: 160 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Time Entries
                  </Typography>
                  <Typography variant="h4" component="h5">
                    <NumberFormat
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      f
                    />
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
                    Soft Cost
                  </Typography>
                  <Typography variant="h4" component="h5">
                    <NumberFormat
                      value={65000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix="$"
                    />
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
                    Hard Cost
                  </Typography>
                  <Typography variant="h4" component="h5">
                    <NumberFormat
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix="$"
                    />
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
                    Total Cost
                  </Typography>
                  <Typography variant="h4" component="h5">
                    <NumberFormat
                      value={70000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix="$"
                    />
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
                    Trust
                  </Typography>
                  <Typography variant="h4" component="h5">
                    <NumberFormat
                      value={4000}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
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
                    Total Due
                  </Typography>
                  <Typography variant="h4" component="h5">
                    <NumberFormat
                      value={100000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix="$"
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item={5}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Hours</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell> Jhon Johnson</TableCell>
                  <TableCell>
                    <NumberFormat
                      value={74.3}
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                    />
                  </TableCell>
                  <TableCell>
                    <NumberFormat
                      value={39007.05}
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                      prefix="$"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mark MacCalloff</TableCell>
                  <TableCell>
                    <NumberFormat
                      value={4.0}
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                    />
                  </TableCell>
                  <TableCell>
                    <NumberFormat
                      value={800.0}
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                      prefix="$"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cindy Madenuff</TableCell>
                  <TableCell>
                    <NumberFormat
                      value={127.3}
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                    />
                  </TableCell>
                  <TableCell>
                    <NumberFormat
                      value={41372.5}
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                      prefix="$"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LedgerCards;
