/** @format */

import React from "react";

import {
  IconButton,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { Appointments, Calls, Marketing, Email } from "../Charts";

import RevenueInCards from "../Cards/RevenueIn";
import RevenueOutCards from "../Cards/RevenueOut";
import NewCustomerCards from "../Cards/NewCustomer";
import LostCustomerCards from "../Cards/LostCustomer";
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
      <CardActions sx={{ marginBottom: "10px" }}>
        <IconButton
          aria-label="drag"
          className="drag"
          sx={{ position: "fixed", left: "16px" }} 
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
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
