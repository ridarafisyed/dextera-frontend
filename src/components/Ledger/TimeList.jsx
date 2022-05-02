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

const TimeList = () => {
  const [timeData, setTimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/add-time/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setStatus(res.statusText);
        setTimeData(res.data);
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
      <Box>
        <LinkButton to="/ledgers" sx={{ float: "right" }}>
          Ledger Dashboard
        </LinkButton>
        <Box p={3}>
          <LinkButton to="/time" sx={{ float: "right" }}>
            Ledger Dashbaord
          </LinkButton>
          <LinkButton to="/time" sx={{ float: "right" }}>
            Add Time
          </LinkButton>
          <LinkButton to="/ledger-list" sx={{ float: "right" }}>
            Ledger List
          </LinkButton>
          <LinkButton to="/ledger-documents" sx={{ float: "right" }}>
            Documents
          </LinkButton>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Add</TableCell>

                <TableCell>Matter #</TableCell>
                <TableCell>Matter Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Billable Time</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Activity</TableCell>
              </TableRow>
            </TableHead>
            {/* {loading
              ? null
              : timeData?.map((data) => {
                  return (
                    <TableBody id={data.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>{data.matter_name}</TableCell>

                      <TableCell>{data.conatact}</TableCell>
                      <TableCell>{data.date}</TableCell>
                      <TableCell>{data.time}</TableCell>
                      <TableCell>{data.rate}</TableCell>
                      <TableCell>{data.category}</TableCell>
                      <TableCell>{data.sub_category}</TableCell>
                    </TableBody>
                  );
                })} */}
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
};

export default TimeList;
