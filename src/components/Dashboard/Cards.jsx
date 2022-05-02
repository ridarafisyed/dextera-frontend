/** @format */

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import NumberFormat from "react-number-format";

export const AdminCards = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item lg={2} xs={12}>
          <Card element={Paper} elevation={3} sx={{ height: "12rem" }}>
            <CardContent>
              <Typography sx={{ fontSize: "1.3rem" }} color="blue" gutterBottom>
                Revenue In
              </Typography>
              <Typography
                variant="h3"
                mt={3}
                component="h4"
                sx={{ fontSize: "2.2rem" }}
              >
                <NumberFormat
                  value={23345}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={2} xs={12}>
          <Card element={Paper} elevation={3} sx={{ height: "12rem" }}>
            <CardContent>
              <Typography sx={{ fontSize: "1.3rem" }} color="blue" gutterBottom>
                Revenue out
              </Typography>
              <Typography
                variant="h3"
                mt={3}
                component="h4"
                sx={{ fontSize: "2.2rem" }}
              >
                <NumberFormat
                  value={13345}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Card element={Paper} elevation={3} sx={{ height: "12rem" }}>
            <CardContent>
              <Grid container>
                <Grid item lg={5} xs={12}>
                  <Typography
                    sx={{ fontSize: "1.3rem" }}
                    color="blue"
                    gutterBottom
                  >
                    New Customers
                  </Typography>
                  <Typography
                    variant="h3"
                    mt={2}
                    component="h4"
                    sx={{ fontSize: "2.2rem" }}
                  >
                    <NumberFormat
                      value={3425}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </Grid>
                <Grid item lg={7} xs={12}>
                  <ul>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Today:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>This Week:</span>
                        <NumberFormat
                          value={1123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>This Month:</span>
                        <NumberFormat
                          value={3012}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Last Week:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Last Month:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Last Quater:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Last Quater:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Card element={Paper} elevation={3} sx={{ height: "12rem" }}>
            <CardContent>
              <Grid container>
                <Grid item lg={5}>
                  <Typography
                    sx={{ fontSize: "1.3rem" }}
                    color="blue"
                    gutterBottom
                  >
                    Lost Customers
                  </Typography>
                  <Typography
                    variant="h3"
                    mt={2}
                    component="h4"
                    sx={{ fontSize: "2.2rem" }}
                  >
                    <NumberFormat
                      value={3425}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </Grid>
                <Grid item lg={7} xs={12}>
                  <ul>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Today:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>This Week:</span>
                        <NumberFormat
                          value={1123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>This Month:</span>
                        <NumberFormat
                          value={3012}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Last Week:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Last Month:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Last Quater:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                        <span style={{ color: "blue" }}>Last Quater:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export const LawyerCards = () => {
  return (
    <>
      <Grid container m={2} spacing={1}>
        <Grid item lg={12} xs={12}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
                color="primary"
                gutterBottom
              >
                Projected Billable Hours
              </Typography>
              <Typography sx={{ fontSize: 26 }}>
                <NumberFormat value={230} displayType={"text"} postfix="hr" />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
                color="primary"
                gutterBottom
              >
                Annual Trending Billable Hours
              </Typography>
              <Typography sx={{ fontSize: 26 }}>
                <NumberFormat value={768} displayType={"text"} postfix="hr" />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export const FirmCards = () => {
  return (
    <>
      <Grid container m={2} spacing={1}>
        <Grid item lg={3} xs={12}>
          <Card sx={{ height: "10rem" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                color="primary"
                gutterBottom
              >
                Revenue In
              </Typography>
              <Typography
                variant="h5"
                mt={3}
                component="h4"
                sx={{ fontSize: "2.2rem" }}
              >
                <NumberFormat
                  value={23345}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3} xs={12}>
          <Card sx={{ height: "10rem" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                color="primary"
                gutterBottom
              >
                Revenue out
              </Typography>
              <Typography
                variant="h3"
                mt={3}
                component="h4"
                sx={{ fontSize: "2.2rem" }}
              >
                <NumberFormat
                  value={13345}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Card sx={{ height: "10rem" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                color="primary"
                gutterBottom
              >
                Lost Customers
              </Typography>
              <Grid container>
                <Grid item lg={5}>
                  <Typography
                    variant="h3"
                    mt={2}
                    component="h4"
                    sx={{ fontSize: "2.2rem" }}
                  >
                    <NumberFormat
                      value={3425}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </Grid>
                <Grid item lg={7} xs={12}>
                  <ul>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: 10 }}>
                        <span style={{ color: "primary" }}>Today:</span>
                        <NumberFormat
                          value={123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: 10 }}>
                        <span style={{ color: "primary" }}>This Week:</span>
                        <NumberFormat
                          value={1123}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="caption" sx={{ fontSize: 10 }}>
                        <span style={{ color: "primary" }}>This Month:</span>
                        <NumberFormat
                          value={3012}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export const CustomerCards = () => {
  return (
    <>
      <Grid container m={2} spacing={2}>
        <Grid item lg={12} xs={12}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
                color="primary"
                gutterBottom
              >
                Balance
              </Typography>
              <Typography sx={{ fontSize: 26 }}>
                <NumberFormat
                  value={23345}
                  displayType={"text"}
                  prefix="$"
                  thousandSeparator={","}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: "0.8rem", fontWeight: "bold" }}
                color="primary"
                gutterBottom
              >
                Payment Due
              </Typography>
              <Typography sx={{ fontSize: 26 }}>
                <NumberFormat
                  value={12345}
                  displayType={"text"}
                  prefix="$"
                  thousandSeparator={","}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
const Cards = () => {
  return (
    <>
      <Grid container m={2} spacing={1}>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: "1.3rem" }}
                color="text.secondary"
                gutterBottom
              >
                Revenue In
              </Typography>
              <Typography variant="h3" component="h4">
                <NumberFormat
                  value={23345}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: "1.3rem" }}
                color="text.secondary"
                gutterBottom
              >
                Revenue out
              </Typography>
              <Typography variant="h3" component="h4">
                <NumberFormat
                  value={13345}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="$"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: "1.3rem" }}
                color="text.secondary"
                gutterBottom
              >
                New Matters
              </Typography>
              <Typography variant="h3" component="h4">
                <NumberFormat
                  value={3425}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
