/** @format */

import React, { Fragment } from "react";
import { Link, Typography, List, ListItem, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Calendar = () => {
  return (
    <Fragment>
      <Box component={Paper} mt={2} p={2}>
        <Typography variant="h6" component="h7">
          My Calendar at a Glance
        </Typography>
        <List>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Start motion for trail</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
          <ListItem>
            Modnay - 08:00am - <Link to=""> Call Client</Link>
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
};

export default Calendar;
