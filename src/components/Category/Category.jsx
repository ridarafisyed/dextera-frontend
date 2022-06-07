/** @format */
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
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

import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";

import { CONFIG } from "../../api/MatterApi";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

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
      .get(`${process.env.REACT_APP_API_URL}/api/category/`, CONFIG)
      .then((res) => {
        console.log(res.data);
        setLoading(false);

        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);

      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/category/${id}/`, CONFIG)
      .then((res) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      });
  };
  const handleSubmit = (e) => {
    const body = JSON.stringify({ name });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/category/`, body, CONFIG)
      .then((res) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      })
      .catch((err) => {
        FetchData();
        return (
          <ActionAlerts
            value={{ status: err.statusText, message: "Success" }}
          />
        );
      });
  };
  const showCategory = () => {
    if (category.length === 0) {
      return <p> no data found...</p>;
    } else
      return category.map((data) => (
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
        + New category
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
        <DialogTitle id="alert-dialog-title">{"Add New Category"}</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            name="name"
            label="Category Name"
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
      {!loading ? showCategory() : <Box mt={5} sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>}
    </Fragment>
  );
};

export default Category;
