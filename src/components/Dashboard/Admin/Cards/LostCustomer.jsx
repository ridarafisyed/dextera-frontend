/** @format */

import React, { Fragment, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
} from "@mui/material";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from "react-redux";

import { lostCustomerActive } from "../../../../redux/features/sidebarSlice";

import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export const LostCustomerCards = ({ isWeekly }) => {
  const [dateValue, setDateValue] = useState([null, null]);
  const dispatch = useDispatch();
  const amount = () => {
    switch (isWeekly) {
      case "daily":
        return 0;
      case "weekly":
        return 0;
      case "monthly":
        return 3;
      case "quarterly":
        return 6;
      case "yearly":
        return 15;
      case "range":
        return 3;
    }
  };
  const [option, setOption] = useState("");
  return (
    <Grid container>
      <Grid item>
        <Grid container>
          <Grid item lg={6}>
            <Typography sx={{ fontSize: "1.3rem" }} color="blue" gutterBottom>
              Lost Customers
            </Typography>
            <Typography
              variant="h3"
              mt={2}
              component="h4"
              sx={{ fontSize: "2.2rem" }}
            >
              <NumberFormat
                value={isWeekly ? 0 : 3}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item lg={6} xs={12}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>Today:</span>
                  <NumberFormat
                    value={0}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>This Week:</span>
                  <NumberFormat
                    value={0}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>This Month:</span>
                  <NumberFormat
                    value={3}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>Last Week:</span>
                  <NumberFormat
                    value={1}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>Last Month:</span>
                  <NumberFormat
                    value={2}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>Last Quarter:</span>
                  <NumberFormat
                    value={6}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateRangePicker
                    startText="Start Date"
                    endText="End Date"
                    value={dateValue}
                    onChange={(newValue) => {
                      setDateValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <Fragment>
                        <TextField size="small" {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField size="small" {...endProps} />
                      </Fragment>
                    )}
                  />
                </LocalizationProvider>
              </li>
            </ul>
          </Grid>
          {/* <Grid lg={1}>
                <Button
                  component={IconButton}
                  aria-label="delete"
                  onClick={() => dispatch(lostCustomerActive())}
                >
                  <CloseIcon fontSize="small" />
                </Button>
              </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isWeekly: state.data.isWeekly,
});

export default connect(mapStateToProps)(LostCustomerCards);
