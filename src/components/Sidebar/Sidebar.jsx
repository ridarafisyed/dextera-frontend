/** @format */

import React, { useState, useEffect, Fragment } from "react";

import { connect } from "react-redux";
import {
  Button,
  Box,
  Paper,
  Link,
  Grid,
  Container,
  Stack,
} from "@mui/material";

import { KeyboardArrowDown } from "@mui/icons-material";

import { useToggle } from "../../context/useToggle";
import AdminSidebar from "./AdminSidebar";
import LawyerSidebar from "./LawyerSidebar";
import FirmSidebar from "./FirmSidebar";
import CustomerSidebar from "./CutomerSidebar";
import "./style.css";
import TestingSidebar from "./TestingSidebar";

const Sidebar = ({ user }) => {
  const [controlToggle, setControlToggle] = useToggle(true);

  const [localuser, setLocalUser] = useState({
    username: "Admin",
    is_firm: false,
    is_lawyer: true,
    is_client: false,
  });

  useEffect(() => {
    if (user) {
      setLocalUser({
        username: user.username,
        is_firm: user.is_firm,
        is_lawyer: user.is_lawyer,
        is_client: user.is_client,
      });
    }
  }, [user]);

  const SidebarRedirect = () => {
    switch (user.username) {
      case "admin":
        return <AdminSidebar />;
      case "firm":
        return <FirmSidebar />;
      case "lawyer":
        return <LawyerSidebar />;
      default:
        return <CustomerSidebar />;
    }
  };

  // const [state, dispatch] = useContext(UserContext);
  return (
    <Fragment>
      <Paper component={Stack} elevation={3} spacing={1}>
        <Box
          sx={{
            height: "calc(83vh - 40px)",
            overflowY: "scroll",
          }}
        >
          {/* {SidebarRedirect()} */}
          <TestingSidebar />
        </Box>
        {/* <Box p={2}>
          <Button
            variant="contained"
            fullWidth
            color="error"
            style={{
              padding: "1rem",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Report
          </Button>
        </Box> */}
      </Paper>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Sidebar);

// export default Sidebar;
