/** @format */

import React, { Fragment, useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
} from "@mui/material";
import Filters from "./Filters";

const InvoiceList = () => {
  const [invoice, setInvoice] = useState(null);

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   };
  //   const res = axios.get(
  //     `${process.env.REACT_APP_API_URL}/api/invoices`,
  //     config,
  //   );
  //   setInvoice(res.data);
  // }, []);

  return (
    <Fragment>
      <Filters />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Due</TableCell>
              <TableCell>Tax</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Last Payment</TableCell>
              <TableCell>Approval Date</TableCell>
              <TableCell>Approval by</TableCell>
              <TableCell>Created by</TableCell>
            </TableRow>
            {/* {invoice?.map((invoice) => (
              <TableRow id={invoice.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.created}</TableCell>
                <TableCell>{invoice.due}</TableCell>
                <TableCell>{invoice.tax}</TableCell>
                <TableCell>{invoice.interest}</TableCell>
                <TableCell>{invoice.discount}</TableCell>
                <TableCell>{invoice.total}</TableCell>
                <TableCell>{invoice.balance}</TableCell>
                <TableCell>{invoice.last_payment}</TableCell>
                <TableCell>{invoice.approvel_date}</TableCell>
                <TableCell>{invoice.approvel.by}</TableCell>
                <TableCell>{invoice.created_by}</TableCell>
              </TableRow>
            ))} */}
          </TableHead>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default InvoiceList;
