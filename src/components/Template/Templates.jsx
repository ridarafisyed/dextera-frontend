/** @format */

import React, { Fragment } from "react";
import { Button, Grid, Box, List, ListItem, ListItemText } from "@mui/material";
import {
  LinkButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styles";
import SearchIcon from "@mui/icons-material/Search";

const Templates = () => {
  return (
    <Fragment>
      <Grid container mt={1} spacing={1}>
        <Grid item xs={12} m={2}>
          <Button variant="contained" size="small">
            Merge Fields.XLS
          </Button>
          <Box sx={{ float: "right" }}>
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "1rem" }}
            >
              New Doc
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "1rem" }}
            >
              New PDF
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "1rem" }}
            >
              New Email
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "1rem" }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "1rem" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ marginLeft: "1rem" }}
            >
              Close
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              height: "80%",
              width: "80%",
              borderRadius: "2rem",
            }}
          >
            <Button variant="contained" fullWidth>
              Word Template
            </Button>
            <Box mt={2}>
              <Search style={{ width: "100%" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box mt={1}>
              <List>
                <ListItem>
                  <ListItemText>001 - Report Money</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>002 - Report Time</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>003 - Report Billed hours</ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              height: "80%",
              width: "80%",
              borderRadius: "2rem",
            }}
          >
            <Button variant="contained" fullWidth>
              PDF Template
            </Button>
            <Box mt={2}>
              <Search style={{ width: "100%" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box mt={1}>
              <List>
                <ListItem>
                  <ListItemText>P001 - Write of Execution</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>P002 - Memo of Cost</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>P003 - Settlement Letter</ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              height: "80%",
              width: "80%",
              borderRadius: "2rem",
            }}
          >
            <Button variant="contained" fullWidth>
              Email Template
            </Button>
            <Box mt={2}>
              <Search style={{ width: "100%" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box mt={1}>
              <List>
                <ListItem>
                  <ListItemText>001 - Invoice Email</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>002 - New Client</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>003 - Firing Client</ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              padding: "15rem 2rem 5rem 2rem",
              backgroundColor: "darkGray",
              borderRadius: "2rem",
            }}
          >
            Templates can be opened here to edit them. user can add/ remove
            merge fields directly to the document or PDF
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Templates;
