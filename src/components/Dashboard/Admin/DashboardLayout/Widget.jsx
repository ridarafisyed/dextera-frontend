/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { Appointments, Calls, Marketing, Email } from "../Charts";

import RevenueInCards from "../Cards/RevenueIn";
import RevenueOutCards from "../Cards/RevenueOut";
import NewCustomerCards from "../Cards/NewCustomer";
import LostCustomerCards from "../Cards/LostCustomer";

import Map from "../Map";

import NewAccounts from "../NewAccounts";
import EmpOversite from "../EmpOversite";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
  },
  spacer: {
    flexGrow: 1,
  },
  body: {
    padding: "0.5rem",
    flexGrow: 1,
  },
});

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
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" gutterBottom>
          {widgetNames[id]}
        </Typography>
        <div className={classes.spacer} />
        <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <div className={classes.body} />
    </Card>
  );
}
