/** @format */

import React, { Fragment } from "react";
import { Menu, MenuItem, Divider } from "@mui/material";

const ViewTasks = () => {
  return (
    <Fragment>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Account</MenuItem>
      <MenuItem>Setting</MenuItem>
      <Divider sx={{ my: 0.5 }} />
      <MenuItem>Logout</MenuItem>
    </Fragment>
  );
};

export default ViewTasks;
