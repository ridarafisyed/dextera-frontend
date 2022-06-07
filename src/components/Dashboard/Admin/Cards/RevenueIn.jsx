/** @format */

import React, { useState } from "react";
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
import { connect } from "react-redux";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from "react-redux";
import { revenueInActive } from "../../../../redux/features/sidebarSlice";

export const RevenueInCards = ({ isWeekly }) => {
  const dispatch = useDispatch();
  const amount = () => {
    switch (isWeekly) {
      case "daily":
        return 460;
      case "weekly":
        return 3254;
      case "monthly":
        return 32564;
      case "quarterly":
        return 130256;
      case "yearly":
        return 521024;
      case "range":
        return 1500;
    }
  };
  return (
    <Grid container>
      <Grid item lg={12}>
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
            value={amount()}
            displayType={"text"}
            thousandSeparator={true}
            prefix="$"
          />
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isWeekly: state.data.isWeekly,
});

export default connect(mapStateToProps)(RevenueInCards);
