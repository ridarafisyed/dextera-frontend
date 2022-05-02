/** @format */

import React, { Fragment, useState } from "react";

import {
  Grid,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Checkbox,
  Typography,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  MenuItem,
  InputLabel,
  Select,
  Button,
} from "@mui/material";

import { LocalizationProvider, DateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { useToggle } from "../../context/useToggle";

const PaymentPlan = () => {
  const [paymentData, setPaymentData] = useState({
    payment_no: "File# - 001",
    due: "2020/07/01",
    amount: "$ 750.00",
    late_fee: "$22.00",
    total_due: "$ 775.00",
    payment: "$775.00",
    posted: "$2020/07/05",
    method: "Check",
  });

  return (
    <Fragment>
      <Grid container mt={3} mb={3}>
        <Grid item lg={4}>
          <Typography>Start Balance:</Typography>
          <Typography>Start Date:</Typography>
          <Typography>Interest Rate:</Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography>Payment Amout:</Typography>
          <Typography>Payment Date:</Typography>
          <Typography>No Payments:</Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography>Payment Remaining:</Typography>
          <Typography>Last Payment:</Typography>
          <Typography>Last Payment $:</Typography>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Payment #</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Amout</TableCell>
            <TableCell>Late Fee</TableCell>
            <TableCell>Total Due</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Posted</TableCell>
            <TableCell>Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{paymentData.payment_no}</TableCell>
          <TableCell>{paymentData.due}</TableCell>
          <TableCell>{paymentData.amount} </TableCell>
          <TableCell>{paymentData.late_fee}</TableCell>
          <TableCell>{paymentData.total_due}</TableCell>
          <TableCell>{paymentData.payment}</TableCell>
          <TableCell>{paymentData.posted}</TableCell>
          <TableCell>{paymentData.method}</TableCell>
        </TableBody>
      </Table>
      <Button
        variant="contained"
        sx={{
          float: "right",
          borderRadius: "0.5rem",
          paddingInline: "2rem",
          marginTop: "2rem",
        }}
      >
        Close
      </Button>
      <Grid container>
        <Grid item lg={6}>
          <Typography>Post agreement Balance:</Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography>Start Date:</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const InvoicePayment = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoice_no: "i-2106-0004542",
    due: "2020/07/01",
    tax: "$ 15.00",
    interest: "$2.35",
    time: "$ 1,234.50",
    hard: "$457.00",
    soft: "$45.00",
    total: "$ 1,753.85",
  });

  return (
    <Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Invoice</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Hard</TableCell>
            <TableCell>Soft</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>{invoiceData.invoice_no}</TableCell>
          <TableCell>{invoiceData.due}</TableCell>
          <TableCell>{invoiceData.tax} </TableCell>
          <TableCell>{invoiceData.interest}</TableCell>
          <TableCell>{invoiceData.time}</TableCell>
          <TableCell>{invoiceData.hard}</TableCell>
          <TableCell>{invoiceData.soft}</TableCell>
          <TableCell>{invoiceData.total}</TableCell>
        </TableBody>
      </Table>{" "}
      <Button
        variant="contained"
        sx={{
          float: "right",
          borderRadius: "0.5rem",
          paddingInline: "2rem",
          marginTop: "2rem",
        }}
      >
        Pay
      </Button>{" "}
    </Fragment>
  );
};

const Payment = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [isPlan, setIsPlan] = useToggle(false);
  const [invoiceData, setInvoiceData] = useState({
    payment_type: "",
    date: "",
    retainer: "",
    payment: "",
    date_range: "",
    menu: "",
    bank_account: "",
    payment_method: "",
  });

  const {
    payment_type,
    date,
    retainer,
    payment,
    date_range,
    menu,
    bank_account,
    payment_method,
  } = invoiceData;
  const onChange = (e) =>
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Grid container>
        <Grid item lg={12}>
          <Box
            component="form"
            Validate
            sx={{
              "& .MuiTextField-root": { m: 1, width: "15rem" },
            }}
            onSubmit={(e) => onSubmit(e)}
          >
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="payment_type"
                defaultValue="cash"
                name="payment_type"
                onChange={(e) => onChange(e)}
                id="payment_type"
                autoComplete="payment_type"
              >
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label="Cash"
                />
                <FormControlLabel value="cc" control={<Radio />} label="CC" />
                <FormControlLabel
                  value="wire"
                  control={<Radio />}
                  label="Wire"
                />
                <FormControlLabel
                  value="check"
                  control={<Radio />}
                  label="Check"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              size="small"
              id="date"
              label="date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControlLabel
              value="retainer"
              control={<Checkbox />}
              label="Retainer"
            />
            <FormControlLabel
              value="payment"
              control={<Checkbox />}
              label="Payment"
            />
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Typography sx={{ mt: 2, mb: 1 }}> Date Range </Typography>
              <DateRangePicker
                calendars={1}
                value={dateRange}
                onChange={(newValue) => {
                  setDateRange(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <Fragment>
                    <TextField size="small" {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField size="small" {...endProps} />
                  </Fragment>
                )}
              />
            </LocalizationProvider> */}
            <FormControl sx={{ width: "12rem" }}>
              <InputLabel id="demo-simple-select-label">Date Range</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date_range}
                label="Age"
                onChange={(e) => onChange(e)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="menu"
              label="menu"
              type="text"
              onChange={(e) => onChange(e)}
              id="menu"
              autoComplete="menu"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="bank_account"
              label="bank_account"
              type="text"
              onChange={(e) => onChange(e)}
              id="bank_account"
              autoComplete="bank_account"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="payment_method"
              label="payment_method"
              type="text"
              onChange={(e) => onChange(e)}
              id="payment_method"
              autoComplete="payment_method"
            />
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="isPlan"
                defaultValue={isPlan}
                name="isPlan"
                onChange={(e) => setIsPlan(e)}
                id="isPlan"
                autoComplete="isPlan"
              >
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Invoice Payment"
                />
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Payment Plan"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item lg={12}>
          <TableContainer>
            {isPlan ? <PaymentPlan /> : <InvoicePayment />}
          </TableContainer>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Payment;
