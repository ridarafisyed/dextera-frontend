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
} from "@mui/material";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from "react-redux";
import { newCustomerActive } from "../../../../redux/features/sidebarSlice";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export const NewCustomerCards = ({ isWeekly }) => {
  const [dateValue, setDateValue] = useState([null, null]);
  const dispatch = useDispatch();
  const amount = () => {
    switch (isWeekly) {
      case "daily":
        return 2;
      case "weekly":
        return 23;
      case "monthly":
        return 69;
      case "quarterly":
        return 200;
      case "yearly":
        return 610;
      case "range":
        return 10;
    }
  };
  const [option, setOption] = useState("");
  return (
    <Grid container>
      <Grid item>
        <Grid container>
          <Grid item lg={6}>
            <Typography sx={{ fontSize: "1.3rem" }} color="blue" gutterBottom>
              New Customers
            </Typography>
            <Typography
              variant="h3"
              mt={2}
              component="h4"
              sx={{ fontSize: "2.2rem" }}
            >
              <NumberFormat
                value={isWeekly ? 23 : 69}
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
                    value={2}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>This Week:</span>
                  <NumberFormat
                    value={23}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>This Month:</span>
                  <NumberFormat
                    value={69}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>Last Week:</span>
                  <NumberFormat
                    value={15}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>Last Month:</span>
                  <NumberFormat
                    value={50}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
                  <span style={{ color: "blue" }}>Last Quarter:</span>
                  <NumberFormat
                    value={200}
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
                <IconButton
                  aria-label="delete"
                  onClick={() => dispatch(newCustomerActive())}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state) => ({
  isWeekly: state.data.isWeekly,
});

export default connect(mapStateToProps)(NewCustomerCards);
