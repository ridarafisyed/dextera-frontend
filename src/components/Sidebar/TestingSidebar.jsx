/** @format */

import React, { useState, Fragment } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Task,
  MoneyOff,
  FileCopy,
  Receipt,
  AssignmentTurnedIn,
  Mail,
  Phone,
  Group,
  AddCircle,
  Work,
  Person,
} from "@mui/icons-material";

import { SideBarBtn } from "../../styles/styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  revenueInActive,
  revenueOutActive,
  newCustomerActive,
  lostCustomerActive,
  newAccountActive,
  marketingActive,
  appointmentActive,
  empOversiteActive,
  emailsActive,
  mapActive,
  callsActive,
} from "../../redux/features/sidebarSlice";

import "./style.css";

const Controls = () => {
  return (
    <Fragment>
      <Box px={3} sx={{ color: "#796ef0" }}>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/">
              <Grid item>
                <AddCircle fontSize="medium" />
              </Grid>
              <Grid item>DashBoard</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/invoices">
              <Grid item>
                <Receipt fontSize="medium" />
              </Grid>
              <Grid item>Invoices</Grid>
            </Box>
          </Grid>
        </SideBarBtn>

        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/manage-categories">
              <Grid item>
                <FileCopy fontSize="medium" />
              </Grid>
              <Grid item>Manage Categories</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/ledgers">
              <Grid item>
                <MoneyOff fontSize="medium" />
              </Grid>
              <Grid item>Ledger</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/create-task">
              <Grid item>
                <Task fontSize="medium" />
              </Grid>
              <Grid item>Manage Task</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/employee-search">
              <Grid item>
                <Work fontSize="medium" />
              </Grid>
              <Grid item>Employee Search</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/matter-dashboard">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Matters</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined">
          <Grid>
            <Box component={Link} to="/contact">
              <Grid item>
                <Person fontSize="medium" />
              </Grid>
              <Grid item>Contact</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

const Marketing = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn
          variant="outlined"
          onClick={() => dispatch(marketingActive())}
        >
          <Grid>
            <Box
              sx={sidebar.marketing ? { color: "#ddd" } : { color: "#796ef0" }}
            >
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Marketing</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined" onClick={() => dispatch(emailsActive())}>
          <Grid>
            <Box sx={sidebar.emails ? { color: "#ddd" } : { color: "#796ef0" }}>
              <Grid item>
                <Mail fontSize="medium" />
              </Grid>
              <Grid item>Email</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

const HumanResources = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn
          variant="outlined"
          // onClick={() => dispatch(manageUserActive())}
        >
          <Grid>
            <Box sx={{ color: "#796ef0" }} component={Link} to="/users">
              <Grid item>
                <Person fontSize="medium" />
              </Grid>
              <Grid item>Manage User</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn
          variant="outlined"
          // onClick={() => dispatch(manageRoleActive())}
        >
          <Grid>
            <Box sx={{ color: "#796ef0" }} component={Link} to="/user-roles">
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Manage Role</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn
          variant="outlined"
          // onClick={() => dispatch(manageGroupActive())}
        >
          <Grid>
            <Box sx={{ color: "#796ef0" }} component={Link} to="/user-groups">
              <Grid item>
                <Group fontSize="medium" />
              </Grid>
              <Grid item>Manage Group</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

const RevenueControls = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn
          variant="outlined"
          onClick={() => dispatch(revenueInActive())}
        >
          <Grid>
            <Box
              sx={sidebar.revenueIn ? { color: "#ddd" } : { color: "#796ef0" }}
            >
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Revenue In</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn
          variant="outlined"
          onClick={() => dispatch(revenueOutActive())}
        >
          <Grid>
            <Box
              sx={sidebar.revenueOut ? { color: "#ddd" } : { color: "#796ef0" }}
            >
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Revenue Out</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

const AccountControls = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn
          variant="outlined"
          onClick={() => dispatch(newCustomerActive())}
        >
          <Grid>
            <Box
              sx={
                sidebar.newCustomer ? { color: "#ddd" } : { color: "#796ef0" }
              }
            >
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>New Customers</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn
          variant="outlined"
          onClick={() => dispatch(lostCustomerActive())}
        >
          <Grid>
            <Box
              sx={
                sidebar.lostCustomer ? { color: "#ddd" } : { color: "#796ef0" }
              }
            >
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Lost Customer</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn
          variant="outlined"
          onClick={() => dispatch(newAccountActive())}
        >
          <Grid>
            <Box
              sx={sidebar.newAccount ? { color: "#ddd" } : { color: "#796ef0" }}
            >
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>New Accounts</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined" onClick={() => dispatch(mapActive())}>
          <Grid>
            <Box sx={sidebar.map ? { color: "#ddd" } : { color: "#796ef0" }}>
              <Grid item>
                <AssignmentTurnedIn fontSize="medium" />
              </Grid>
              <Grid item>Trouble Ticket Map</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};
const EmployeeOversite = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Box px={3}>
        <SideBarBtn
          variant="outlined"
          onClick={() => dispatch(empOversiteActive())}
        >
          <Grid>
            <Box
              sx={
                sidebar.empOversite ? { color: "#ddd" } : { color: "#796ef0" }
              }
            >
              <Grid item>
                <Group fontSize="medium" />
              </Grid>
              <Grid item>Employee Oversite</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn variant="outlined" onClick={() => dispatch(callsActive())}>
          <Grid>
            <Box sx={sidebar.calls ? { color: "#ddd" } : { color: "#796ef0" }}>
              <Grid item>
                <Phone fontSize="medium" />
              </Grid>
              <Grid item>Calls</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
        <SideBarBtn
          variant="outlined"
          onClick={() => dispatch(appointmentActive())}
        >
          <Grid>
            <Box
              sx={
                sidebar.appointment ? { color: "#ddd" } : { color: "#796ef0" }
              }
            >
              <Grid item>
                <Mail fontSize="medium" />
              </Grid>
              <Grid item>Appointments</Grid>
            </Box>
          </Grid>
        </SideBarBtn>
      </Box>
    </Fragment>
  );
};

export const accordionData = [
  {
    name: "Controls",
    id: "controls",
    tiles: <Controls />,
  },

  {
    name: "Human Resources",
    id: "human_resource",
    tiles: <HumanResources />,
  },
  {
    name: "Revenue",
    id: "revenue",
    tiles: <RevenueControls />,
  },
  {
    name: "Customers",
    id: "customers",
    tiles: <AccountControls />,
  },
  {
    name: "Marketing",
    id: "marketing",
    tiles: <Marketing />,
  },
  {
    name: "Employee Oversite",
    id: "empOversite",
    tiles: <EmployeeOversite />,
  },
];

const TestingSidebar = () => {
  const sidebar = useSelector((state) => state.sidebar);

  const [accordions, updateAccordions] = useState(accordionData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(accordions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateAccordions(items);
  }

  return (
    <Fragment>
      <Box mt={5}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="accordions">
            {(provided) => (
              <Box
                className="accordions"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {accordions.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <Accordion
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography
                              align="center"
                              color="primary"
                              sx={{ textTransform: "uppercase" }}
                            >
                              {item.name}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>{item.tiles}</AccordionDetails>
                        </Accordion>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </Fragment>
  );
};

export default TestingSidebar;
