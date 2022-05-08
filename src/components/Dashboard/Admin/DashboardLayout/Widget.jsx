/** @format */

import React from "react";

import {
  IconButton,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

import { Appointments, Calls, Marketing, Email } from "../Charts";

import RevenueInCards from "../Cards/RevenueIn";
import RevenueOutCards from "../Cards/RevenueOut";
import NewCustomerCards from "../Cards/NewCustomer";
import LostCustomerCards from "../Cards/LostCustomer";

import Map from "../Map";

import NewAccounts from "../NewAccounts";
import EmpOversite from "../EmpOversite";

const widgetNames = {
  a: <RevenueInCards />,
  b: <RevenueOutCards />,
  c: <NewCustomerCards />,
  d: <LostCustomerCards />,
  e: <NewAccounts />,
  f: <Map />,
  g: <EmpOversite />,
  h: <Calls />,
  i: <Appointments />,
  j: <Marketing />,
  k: <Email />,
};

export default function Widget({ id, onRemoveItem }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        paddingTop: "0.5rem",
        padding: "1rem",
      }}
    >
      <CardActions>
        <IconButton
          aria-label="delete"
          onClick={() => onRemoveItem(id)}
          sx={{ position: "fixed", right: "16px" }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </CardActions>
      {widgetNames[id]}
    </Card>
  );
}
