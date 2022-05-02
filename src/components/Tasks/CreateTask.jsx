/** @format */
import React, { Fragment, useEffect, useState } from "react";
import {
  TextField,
  Switch,
  FormControlLabel,
  Box,
  Grid,
  Button,
  Typography,
} from "@mui/material";

import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import axios from "axios";
import SaveIcon from "@mui/icons-material/Save";
import { useToggle } from "../../context/useToggle";
import { CONFIG } from "../../api/MatterApi";

import { ActionAlerts, GetDate } from "../../utils/ActionAlerts";

const CreateTask = () => {
  const [dueDate, setDueDate] = useState(new Date("2021-12-01T21:11:54"));
  const [bill, setBill] = useToggle(true);
  const [matterData, setMatterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPrivate, setIsPrivate] = useToggle(true);
  const [file, setFile] = useState("");
  const [taskData, setTaskData] = useState({
    matter_id: 0,
    matter_contact: 0,
    matter: "",
    task: "",
    filename: "",
    assign_to: 0,
    detail: "",
  });

  const {
    matter_id,
    matter_contact,
    matter,
    task,
    filename,
    assign_to,
    detail,
  } = taskData;

  const onChange = (e) =>
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/matter/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setMatterData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(matter_id, matter_contact, matter, task);
    let due_at = GetDate(dueDate);
    let is_billable = bill;
    let is_private = isPrivate;

    const body = JSON.stringify({
      matter_id,
      matter_contact,
      matter,
      task,
      file,
      is_billable,
      is_private,
      due_at,
      assign_to,
      detail,
    });
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/new-task/`, body, CONFIG)
      .then((res) => {
        return (
          <ActionAlerts
            value={{ status: res.statusText, message: "Success" }}
          />
        );
      })
      .catch((err) => {
        return (
          <ActionAlerts value={{ status: err.statusText, message: "Failed" }} />
        );
      });
    console.log(body);
  };
  return (
    <Fragment>
      <Box
        component="form"
        Validate
        sx={{
          "& .MuiTextField-root": { m: 1 },
          "& .MuiSelect-root": { m: 1 },
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <Typography component="h3" variant="h4">
          Create New Task
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_id"
              label="matter_id"
              type="number"
              min="0"
              value={matter_id}
              onChange={(e) => onChange(e)}
              id="matter_id"
            />
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter"
              label="matter"
              type="text"
              min="0"
              value={matter}
              onChange={(e) => onChange(e)}
              id="matter"
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="task"
              label="Task"
              type="text"
              value={task}
              onChange={(e) => onChange(e)}
              id="task"
              autoComplete="task"
            />
            <Box ml={2} mt={1}>
              <FormControlLabel
                fullWidth
                size="large"
                label="Attach File "
                labelPlacement="start"
                control={
                  <input
                    type="file"
                    name="filename"
                    id="file"
                    onChange={(e) => onChange(e)}
                  />
                }
              />
              <TextField
                size="small"
                margin="normal"
                variant="outlined"
                name="file"
                label="please chose any file"
                type="text"
                min="0"
                value={filename}
                onChange={(e) => setFile(filename)}
                id="file"
                disabled
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              size="small"
              margin="normal"
              variant="outlined"
              name="matter_contact"
              label="matter_contact"
              type="number"
              min="0"
              value={matter_contact}
              onChange={(e) => onChange(e)}
              id="matter_contact"
            />
            <Box p={1}>
              <FormControlLabel
                fullWidth
                size="large"
                label="Billable"
                labelPlacement="start"
                control={
                  <Switch
                    size="large"
                    checked={bill}
                    onChange={() => setBill(bill)}
                  />
                }
              />
              <FormControlLabel
                fullWidth
                size="large"
                label="Private"
                labelPlacement="start"
                control={
                  <Switch
                    size="large"
                    checked={isPrivate}
                    onChange={() => setIsPrivate(isPrivate)}
                  />
                }
              />
            </Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="yyyy-MM-dd"
                mask="____-__-__"
                label="Due Date"
                value={dueDate}
                name="dueDate"
                id="dueDate"
                onChange={(e) => setDueDate(e)}
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
            </LocalizationProvider>

            <TextField
              fullWidth
              size="small"
              margin="normal"
              variant="outlined"
              name="assign_to"
              label="Assign to"
              type="number"
              value={assign_to}
              onChange={(e) => onChange(e)}
              id="assign_to"
              autoComplete="assign_to"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={5}
              size="small"
              margin="normal"
              variant="outlined"
              name="detail"
              label="Detail"
              type="text"
              value={detail}
              onChange={(e) => onChange(e)}
              id="detail"
            />

            <Button
              variant="contained"
              type="submit"
              sx={{ float: "right" }}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default CreateTask;
