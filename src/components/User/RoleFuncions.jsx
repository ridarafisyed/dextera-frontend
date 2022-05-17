/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { ActionAlerts } from "../../utils/ActionAlerts";
import { CONFIG } from "../../api/MatterApi";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Typography,
  Switch,
} from "@mui/material";

const RoleFuncions = ({ data }) => {
  const funcList = [
    "Contacts",
    "Matter",
    "Calendar",
    "Flat Fee",
    "Expenses",
    "Trust",
    "Task(s)",
    "Invoice",
    "Payments",
    "Full DOB",
    "Full SSN",
    "Partial SSN",
    "Partial DOB",
    "Roles",
    "Run Reports",
    "Discounts",
    "Bank Accounts",
  ];
  const [role, setRole] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [rateType, setRateType] = useState("");

  const FetchRoleData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/role/${data}/`, CONFIG)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setStatus(res.statusText);
        setRole(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    FetchRoleData();
  }, []);
  const showFunctions = (data) => {
    const [num, string] = data.split("_");
    let funcs = string.split("");
    let name = funcList[parseInt(num)];
    console.log(name);
    return <p>{name}</p>;
  };
  const displayFunctions = () => {
    if (role.length === 0) return <p>please select Role</p>;
    else {
      let arr = [
        role.contacts,
        role.matter,
        role.calendar,
        role.flat_fee,
        role.expenses,
        role.trust,
        role.tasks,
        role.invoice,
        role.payments,
        role.full_dob,
        role.full_ssn,
        role.partial_ssn,
        role.partial_dob,
        role.roles,
        role.reports,
        role.discounts,
        role.bank_accounts,
      ];

      return arr.map((item) => {
        showFunctions(item);
      });
    }
  };
  return (
    <Fragment>
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table size="small" sx={{ fontSize: "1rem" }}>
          <TableHead>
            <TableRow bgColor="#796ef0">
              <TableCell>
                <Typography color="white">Function</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">View </Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Edit</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Create</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Delete</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Contacts</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Team</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Office</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Region</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">All</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? displayFunctions() : <p>Loading...</p>}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default RoleFuncions;
