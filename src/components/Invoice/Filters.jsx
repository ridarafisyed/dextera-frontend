/** @format */

import React, { Fragment } from "react";
import {
  Grid,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from "@mui/material";
import {
  LinkButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";

import { useToggle } from "../../context/useToggle";
import CreateInvoice from "./CreateInvoice";
import Payment from "./Payment";

const Filters = () => {
  const [invoiceToggle, setInvoiceToggle] = useToggle(false);
  const [paymentToggle, setPaymentToggle] = useToggle(false);
  const [paid, setPaid] = useToggle(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Fragment>
      <Grid container>
        <Grid
          spacing={2}
          item
          lg={12}
          direction="Row"
          sx={{
            "& .MuiTextField-root": { m: 1 },
            "& .MuiFormControl-root": { m: 1, width: "10rem" },
          }}
        >
          <Button
            variant="contained"
            onClick={() => setInvoiceToggle(invoiceToggle)}
            sx={{ margin: "0.5rem" }}
          >
            Create Invoice
          </Button>
          <Dialog
            fullWidth="lg"
            maxWidth="lg"
            open={invoiceToggle}
            onClose={() => setInvoiceToggle(invoiceToggle)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Create Invoice"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <CreateInvoice />
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Button
            variant="contained"
            onClick={() => setPaymentToggle(paymentToggle)}
            sx={{ margin: "0.5rem" }}
          >
            Receive Money
          </Button>
          <Dialog
            fullWidth="lg"
            maxWidth="lg"
            open={paymentToggle}
            onClose={() => setPaymentToggle(paymentToggle)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Receive Money"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Payment />
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <FormControlLabel
            label=" Paid/ Unpaid"
            control={<Switch checked={paid} onChange={() => setPaid(paid)} />}
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <FormControl>
            <InputLabel id="demo-simple-select-label">All Invoice</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Bill Date</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">All Times</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Typography
            component="span"
            variant="caption"
            sx={{ width: "8rem", m: 2, fontSize: "1.2rem" }}
          >
            Status:
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Any </InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="demo-simple-select-label">Dropd-own</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Filters;
