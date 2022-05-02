/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  containerClasses,
} from "@mui/material";
import { CONFIG } from "../../api/MatterApi";
import CircleIcon from "@mui/icons-material/Circle";
import { GetDate } from "../../utils/ActionAlerts";

const MatterList = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const [redTask, setRedTask] = useState(false);
  const [greenTask, setGreenTask] = useState(false);
  const [yellowTask, setYellowTask] = useState(false);
  const [myTask, setMyTask] = useState(true);

  const FetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/tasks/`, CONFIG)
      .then((res) => {
        setLoading(false);
        setStatus(res.statusText);
        setTasks(res.data);
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
    <Box component={Paper} p={2}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={
            <Checkbox value={myTask} onChange={() => setMyTask(!myTask)} />
          }
          label="My Tasks"
        />
        <FormControlLabel
          control={
            <Checkbox value={redTask} onChange={() => setRedTask(!redTask)} />
          }
          label="Red Tasks"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={greenTask}
              onChange={() => setGreenTask(!greenTask)}
            />
          }
          label="Green Tasks"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={yellowTask}
              onChange={() => setYellowTask(!yellowTask)}
            />
          }
          label="Yellow Tasks"
        />
      </FormGroup>
      <Typography component="h3">All Matters Task's List</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Matter Tasks</TableCell>
              <TableCell>Matter Name</TableCell>
              <TableCell>Last Action</TableCell>
              <TableCell>Next Action</TableCell>
              <TableCell>Assign To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {loading
              ? null
              : tasks?.map((data) => {
                  return (
                    <TableRow id={data.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        {data.task_nature === "urgent" ? (
                          <CircleIcon color="error" />
                        ) : (
                          <CircleIcon color="success" />
                        )}
                      </TableCell>
                      <TableCell>{data.matter}</TableCell>
                      <TableCell>
                        {data.last_action ? data.next_action : "-"}
                      </TableCell>
                      <TableCell>
                        {data.next_action ? data.next_action : "-"}
                      </TableCell>
                      <TableCell>{data.assign_to}</TableCell>
                    </TableRow>
                  );
                })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MatterList;
