/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import CircularProgress from '@mui/material/CircularProgress';
import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";
import { CONFIG } from "../../api/MatterApi";

const Classification = () => {
  const [classification, setClassification] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
  });

  const { name } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/classification/`, CONFIG)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setStatus(res.statusText);
        setClassification(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setStatus(err.statusText);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/classification/${id}/`,
        CONFIG,
      )
      .then((res) => {
        FetchData();
        setStatus(res.statusText);
        return <ActionAlerts value={{ status: status }} />;
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({ name });
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/classification/`,
        body,
        CONFIG,
      )
      .then((res) => {
        FetchData();
        return <ActionAlerts value={{ status: res.statusText }} />;
      })
      .catch((err) => {
        FetchData();
        return <ActionAlerts value={{ status: err.statusText }} />;
      });
  };
  const showClassification = () => {
    if (classification.length === 0) {
      return <p>No data found...</p>;
    } else
      return classification.map((data) => (
        <Box mt={1}>
          <List>
            <ListItem disablePadding>
              <ListItemText>{data.name}</ListItemText>
              <Button
                variant="contained"
                value={data.id}
                onClick={() => handleDelete(data.id)}
                sx={{
                  borderRadius: "0.5rem",
                  float: "right",
                }}
              >
                <ClearIcon />
              </Button>
            </ListItem>
          </List>
        </Box>
      ));
  };
  return (
    <Fragment>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        fullWidth
        sx={{
          borderRadius: "0.5rem",
        }}
      >
        + New Classification
      </Button>
      <Dialog
        component="form"
        Validate
        onSubmit={(e) => handleSubmit(e)}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add New Classification"}
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            name="name"
            label="Classification Name"
            type="text"
            value={name}
            onChange={(e) => onChange(e)}
            id="name"
            autoComplete="name"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {!loading ? showClassification() : <Box mt={5} sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>}
    </Fragment>
  );
};

export default Classification;
