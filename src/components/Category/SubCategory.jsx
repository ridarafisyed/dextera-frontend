/** @format */

import React, { Fragment, useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";
import { CONFIG } from "../../api/MatterApi";

const SubCategory = () => {
  const [subCategory, setSubCategory] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
      .get(`${process.env.REACT_APP_API_URL}/api/sub-category/`, CONFIG)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setStatus(res.statusText);
        setSubCategory(res.data);
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
        `${process.env.REACT_APP_API_URL}/api/sub-category/${id}/`,
        CONFIG,
      )
      .then((res) => {
        FetchData();
        setStatus(res.statusText);
      })
      .catch((err) => setStatus(err.statusText));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify({ name });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/sub-category/`, body, CONFIG)
      .then((res) => {
        FetchData();
      })
      .catch((err) => {
        FetchData();
      });
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
        + New Sub-Category
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
          {"Add New Sub-Category"}
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            size="small"
            margin="normal"
            variant="outlined"
            name="name"
            label="Sub-Category Name"
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
      {!loading ? (
        subCategory.map((data) => (
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
        ))
      ) : (
        <Typography>Loading ...</Typography>
      )}
    </Fragment>
  );
};

export default SubCategory;
