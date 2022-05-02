/** @format */

import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
} from "@mui/material";
import { LinkButton } from "../../styles/styles";
import axios from "axios";
import { CONFIG } from "../../api/MatterApi";
import CircleIcon from "@mui/icons-material/Circle";
import { GetDate } from "../../utils/ActionAlerts";
import NumberFormat from "react-number-format";

const MatterListLong = () => {
  const [matters, setMatters] = useState([]);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/new-matter/`, CONFIG)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setStatus(res.statusText);
        setMatters(res.data);
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
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Matter Tasks</TableCell>
              <TableCell>Matter Name</TableCell>
              <TableCell>Matter Contact</TableCell>
              <TableCell>Matter Type</TableCell>
              <TableCell>Bill Rate</TableCell>
              <TableCell>Last Action</TableCell>
              <TableCell>Next Action</TableCell>
              <TableCell>Assigned to</TableCell>
              <TableCell>Billable</TableCell>
              <TableCell>Open Invoice</TableCell>
              <TableCell>Trust Account</TableCell>
              <TableCell>Last Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {loading
              ? null
              : matters?.map((data, index) => {
                  return (
                    <TableRow id={index}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <CircleIcon color="error" />
                      </TableCell>
                      <TableCell>{data.matter_name}</TableCell>
                      <TableCell>{data.contact}</TableCell>
                      <TableCell>{data.matter_type}</TableCell>
                      <TableCell>{data.billing_rate}</TableCell>
                      <TableCell>{data.open_date}</TableCell>
                      <TableCell>{data.close_date}</TableCell>
                      <TableCell>{data.assign_to}</TableCell>
                      <TableCell>
                        <NumberFormat
                          value={Math.floor(Math.random() * 100)}
                          displayType={"text"}
                          thousandSeparator={true}
                          decimalScale={2}
                          fixedDecimalScale={true}
                          prefix="$"
                        />
                      </TableCell>
                      <TableCell>
                        <NumberFormat
                          value={Math.floor(Math.random() * 1000)}
                          displayType={"text"}
                          thousandSeparator={true}
                          decimalScale={2}
                          fixedDecimalScale={true}
                          prefix="$"
                        />
                      </TableCell>
                      <TableCell>
                        {" "}
                        <NumberFormat
                          value={Math.floor(Math.random() * 1000)}
                          displayType={"text"}
                          thousandSeparator={true}
                          decimalScale={2}
                          fixedDecimalScale={true}
                          prefix="$"
                        />
                      </TableCell>
                      <TableCell>
                        <NumberFormat
                          value={Math.floor(Math.random() * 1000)}
                          displayType={"text"}
                          thousandSeparator={true}
                          decimalScale={2}
                          fixedDecimalScale={true}
                          prefix="$"
                        />{" "}
                        - {data.close_date}
                      </TableCell>
                    </TableRow>
                  );
                })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default MatterListLong;
