/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Checkbox,
  Box,
  Button,
} from "@mui/material";
import { CONFIG } from "../../api/MatterApi";
import { LinkButton } from "../../styles/styles";
import { ActionAlerts } from "../../utils/ActionAlerts";
import NumberFormat from "react-number-format";

const LedgerTImeList = () => {
  const [ledgerData, setLedgerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/add-time/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setStatus(res.statusText);
        setLedgerData(res.data);
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
        <Button
          variant="contained"
          sx={{ marginRight: "1rem", float: "right" }}
        >
          Print
        </Button>
        <Button
          variant="contained"
          sx={{ marginRight: "1rem", float: "right" }}
        >
          Export
        </Button>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Cateagory</TableCell>
                <TableCell>Sub-Category</TableCell>
                <TableCell>Detail</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>BillBy</TableCell>
              </TableRow>
            </TableHead>
            {/* {loading
                ? null
                : ledgerData?.map((data) => {
                    return (
                      <TableBody id={data.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>{data.category}</TableCell>
                        <TableCell>{data.sub_category}</TableCell>
                        <TableCell>{data.detail}</TableCell>
                        <TableCell>{data.date}</TableCell>
                        <TableCell>{data.qty}</TableCell>
                        <TableCell>
                          {data.billable ? "Billable" : "Paid"}
                        </TableCell>
                        <TableCell>
                          <NumberFormat
                            value={data.qty * 25}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix="$"
                          />
                        </TableCell>
                        <TableCell>{data.bill_by}</TableCell>
                      </TableBody>
                    );
                  })} */}
          </Table>
        </TableContainer>
      </Box>
    </Fragment>
  );
};

export default LedgerTImeList;
