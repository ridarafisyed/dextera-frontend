/** @format */

import React, { Fragment } from "react";
import { Grid, Button, Box } from "@mui/material";

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
import { KeyboardArrowDown } from "@mui/icons-material";
// import { UserContext } from '../../context/User';
import "./style.css";

const Controls = () => {
  return (
    <Fragment>
      <Box px={3}>
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
      </Box>
    </Fragment>
  );
};
const EmployeeOversite = () => {
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/users">
              <Grid item>
                <Person fontSize="medium" />
              </Grid>
              <Grid item>EmployeeOversite</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/user-roles">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Calls</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/user-roles">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Emails</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};
const Marketing = () => {
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/users">
              <Grid item>
                <Person fontSize="medium" />
              </Grid>
              <Grid item>Email</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/user-roles">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Marketing</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

const HumanResources = () => {
  return (
    <Fragment>
      <Box px={3}>
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
            <Box component={Link} to="/user-roles">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Manage Role</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/user-groups">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Manage Group</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

const RevenueControls = () => {
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Revenue In</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Revenue Out</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

const AccountControls = () => {
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>New Customers</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Lost Customer</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>New Accounts</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Trouble Ticket Map</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

const AdminSidebar = () => {
  const [controlToggle, setControlToggle] = useToggle(false);
  const [revenueToggle, setRevenueToggle] = useToggle(false);
  const [customerToggle, setCustomerToggle] = useToggle(false);
  const [marketingToggle, setMarketingToggle] = useToggle(false);
  const [empOversiteToggle, setEmpOversiteToggle] = useToggle(false);
  const [hrToggle, setHrToggle] = useToggle(false);

  return (
    <Fragment>
      <Button
        variant="text"
        fullWidth
        endIcon={<KeyboardArrowDown />}
        sx={{
          textTransform: "none",
          marginTop: "3rem",
        }}
        onClick={() => setControlToggle(controlToggle)}
      >
        Controls
      </Button>
      {empOversiteToggle ? EmployeeOversite() : null}
      <Button
        variant="text"
        fullWidth
        endIcon={<KeyboardArrowDown />}
        sx={{
          textTransform: "none",
          marginTop: "3rem",
        }}
        onClick={() => setEmpOversiteToggle(empOversiteToggle)}
      >
        Controls
      </Button>
      {controlToggle ? Controls() : null}
      <Button
        variant="text"
        fullWidth
        endIcon={<KeyboardArrowDown />}
        sx={{
          textTransform: "none",
        }}
        onClick={() => setHrToggle(hrToggle)}
      >
        Human Resources
      </Button>
      {hrToggle ? HumanResources() : null}
      <Button
        variant="text"
        fullWidth
        endIcon={<KeyboardArrowDown />}
        sx={{
          textTransform: "none",
        }}
        onClick={() => setRevenueToggle(revenueToggle)}
      >
        Revenue
      </Button>
      {revenueToggle ? RevenueControls() : null}
      <Button
        variant="text"
        fullWidth
        endIcon={<KeyboardArrowDown />}
        sx={{
          textTransform: "none",
        }}
        onClick={() => setCustomerToggle(customerToggle)}
      >
        Customers
      </Button>
      {customerToggle ? AccountControls() : null}
      <Button
        variant="text"
        fullWidth
        endIcon={<KeyboardArrowDown />}
        sx={{
          textTransform: "none",
        }}
        onClick={() => setMarketingToggle(marketingToggle)}
      >
        Marketing
      </Button>
      {marketingToggle ? Marketing() : null}
    </Fragment>
  );
};

export default AdminSidebar;
