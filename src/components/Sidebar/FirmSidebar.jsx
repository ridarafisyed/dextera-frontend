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

const FirmSidebar = () => {
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
          <Box component={Link} to="/users">
            <Grid item>
              <Person fontSize="medium" />
            </Grid>
            <Grid item>Manage User</Grid>
          </Box>
        </Grid>
      </SideBarBtn>
      <SideBarBtn variant="outlined">
        <Grid>
          <Box component={Link} to="/manage-categories">
            <Grid item>
              <FileCopy fontSize="medium" />
            </Grid>
            <Grid item>Manage Categories</Grid>
          </Box>
        </Grid>
      </SideBarBtn>
      <SideBarBtn variant="outlined">
        <Grid>
          <Box component={Link} to="/ledgers">
            <Grid item>
              <MoneyOff fontSize="medium" />
            </Grid>
            <Grid item>Ledger</Grid>
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
      <SideBarBtn variant="outlined">
        <Grid>
          <Box component={Link} to="/employee-search">
            <Grid item>
              <Work fontSize="medium" />
            </Grid>
            <Grid item>Employee Search</Grid>
          </Box>
        </Grid>
      </SideBarBtn>
      <SideBarBtn variant="outlined">
        <Grid>
          <Box component={Link} to="/matter-dashboard">
            <Grid item>
              <AssignmentTurnedIn fontSize="medium" />
            </Grid>
            <Grid item>Matters</Grid>
          </Box>
        </Grid>
      </SideBarBtn>
      <SideBarBtn variant="outlined">
        <Grid>
          <Box component={Link} to="/contact">
            <Grid item>
              <AssignmentTurnedIn fontSize="medium" />
            </Grid>
            <Grid item>Contact</Grid>
          </Box>
        </Grid>
      </SideBarBtn>
    </Fragment>
  );
};

export default FirmSidebar;
