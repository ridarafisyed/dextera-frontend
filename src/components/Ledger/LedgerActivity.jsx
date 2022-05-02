/** @format */

import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  Grid,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";
import axios from "axios";
import { CONFIG } from "../../api/MatterApi";
import { ActionAlerts } from "../../utils/ActionAlerts";
import { LinkButton } from "../../styles/styles";

const LedgerActivity = () => {
  const [activityData, setActivityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/add-time/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setStatus(res.statusText);
        setActivityData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setStatus(err.statusText);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow bgColor="#796ef0">
              <TableCell>
                <Typography color="white">Date</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Files</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Category</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Sub-Category</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Notes</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">Source</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">User</Typography>
              </TableCell>
              <TableCell>
                <Typography color="white">In/Out</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {/* {loading
            ? null
            : activityData?.map((data) => {
                return (
                  <TableBody id={data.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>x</TableCell>
                    <TableCell>{data.category}</TableCell>
                    <TableCell>{data.sub_category}</TableCell>
                    <TableCell>{data.note}</TableCell>
                    <TableCell>
                      {data.billable ? "email" : "workflow"}
                    </TableCell>
                    <TableCell>{data.bill_by}</TableCell>
                    <TableCell>{data.billable ? "In" : "Out"}</TableCell>
                  </TableBody>
                );
              })} */}
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default LedgerActivity;
