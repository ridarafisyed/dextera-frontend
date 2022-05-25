/** @format */

import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import { Box, Paper, Stack,} from "@mui/material";

import AdminSidebar from "./AdminSidebar";
import LawyerSidebar from "./LawyerSidebar";
import FirmSidebar from "./FirmSidebar";
import CustomerSidebar from "./CutomerSidebar";
import "./style.css";

const Sidebar = () => {

  const { user } = useSelector((state) => state.auth.user);
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


  return (
    <Fragment>
      <Paper component={Stack} elevation={3} spacing={1}>
        <Box
          sx={{
            height: "calc(83vh - 40px)",
            overflowY: "scroll",
          }}
        >
          {SidebarRedirect()}

        </Box>
      </Paper>
    </Fragment>
  );
};

export default Sidebar;
