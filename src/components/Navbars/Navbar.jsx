/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import NumberFormat from "react-number-format";
import { useToggle } from "../../context/useToggle";

// styling imports
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  ListSubheader,
  TextField,
} from "@mui/material";
import {
  MainSearch,
  MainSearchIconWrapper,
  StyledMainInputBase,
} from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Logo from "../../asserts/logo_white copy.png";
import { updateIsWeekly } from "../../actions/data";

const Navbar = ({
  logout,
  isAuthenticated,
  user,
  updateIsWeekly,
  isWeekly,
}) => {
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [today, setToday] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dateValue, setDateValue] = useState([null, null]);

  const timeFormater = () => {
    if (checked) {
      return currentTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    } else {
      return currentTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });
    }
  };
  const [isChecked, setIsChecked] = useToggle(false);

  const [settingAcnchorEl, setSettingAcnchorEl] = useState(null);
  const openSetting = Boolean(settingAcnchorEl);

  const [redirect, setRedirect] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOnChage = (e) => {
    updateIsWeekly(e.target.value);
  };

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <Button component={Link} color="inherit" to="/login">
        Login{" "}
      </Button>
      <Button component={Link} color="inherit" to="/signup">
        Sign Up
      </Button>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <Typography variant="h5" component="h5">
        <Typography
          component="span"
          variant="h5"
          color="primary"
          style={{ marginRight: "0.5rem" }}
        >
          Expected Balance :
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Expected Balance
            </InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={isWeekly}
              label="Expected Balance"
              onChange={handleOnChage}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="quarterly">Quarterly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>

              <MenuItem value="range">Custom Range</MenuItem>
              {isWeekly === "range" ? (
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
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                      </Fragment>
                    )}
                  />
                </LocalizationProvider>
              ) : null}
            </Select>
          </FormControl>
        </Typography>
        <NumberFormat
          value={isWeekly ? 3254 : 32564}
          displayType={"text"}
          thousandSeparator={true}
          prefix="$"
        />
      </Typography>

      <Typography variant="h5" component="h5" ml={1} mr={1}>
        {" "}
        |{" "}
      </Typography>
      <Typography variant="h5" component="h5">
        {timeFormater()}
        <Switch
          size="small"
          defaultChecked
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          sx={{ transform: "rotate(90deg)" }}
        />
      </Typography>
    </Fragment>
  );
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, backgroundColor: "white" }} component="nav">
        <AppBar position="static" color="transparent" sx={{ border: "none" }}>
          <Toolbar>
            <Typography
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ height: "2rem", width: "auto" }}
                />
              </Link>
            </Typography>
            <MainSearch>
              <MainSearchIconWrapper>
                <SearchIcon />
              </MainSearchIconWrapper>
              <StyledMainInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </MainSearch>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {isAuthenticated ? authLinks() : guestLinks()}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isWeekly: state.data.isWeekly,
});

export default connect(mapStateToProps, { logout, updateIsWeekly })(Navbar);
