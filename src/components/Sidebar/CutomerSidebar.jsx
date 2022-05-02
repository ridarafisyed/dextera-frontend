/** @format */

import React, { Fragment } from "react";
import { Grid, Box } from "@mui/material";

import {
  Task,
  MoneyOff,
  FileCopy,
  Receipt,
  AssignmentTurnedIn,
  AddCircle,
  Work,
  Person,
} from "@mui/icons-material";

import { useToggle } from "../../context/useToggle";

import { SideBarBtn } from "../../styles/styles";
import { Link } from "react-router-dom";
// import { UserContext } from '../../context/User';
import "./style.css";

const CustomerSidebar = () => {
  return (
    <Fragment>
      <SideBarBtn variant="outlined">
        <Grid>
          <Box component={Link} to="/">
            <Grid item>
              <AddCircle fontSize="medium" />
            </Grid>
            <Grid item>DashBoard</Grid>
          </Box>
        </Grid>
      </SideBarBtn>
      <SideBarBtn variant="outlined">
        <Grid>
          <Box component={Link} to="/invoices">
            <Grid item>
              <Receipt fontSize="medium" />
            </Grid>
            <Grid item>Invoices</Grid>
          </Box>
        </Grid>
      </SideBarBtn>

      <SideBarBtn variant="outlined">
        <Grid>
          <Box component={Link} to="/create-task">
            <Grid item>
              <Task fontSize="medium" />
            </Grid>
            <Grid item>Manage Task</Grid>
          </Box>
        </Grid>
      </SideBarBtn>
    </Fragment>
  );
};

export default CustomerSidebar;
