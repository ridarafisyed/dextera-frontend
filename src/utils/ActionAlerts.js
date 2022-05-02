/** @format */

import React from "react";
import { Alert } from "@mui/material";

export const ActionAlerts = (status) => {
  return <Alert severity="error">{status}</Alert>;
};

export const TotalDays = (date1, date2) => {
  let dt1 = new Date(date1);
  let dt2 = new Date(date2);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24),
  );
};

export const GetDate = (date) => {
  let newDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return newDate;
};

export const GetTime = (time) => {
  let newTime =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  return newTime;
};
