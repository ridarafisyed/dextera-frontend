/** @format */

import React, { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  CardContent,
  Typography,
  Card,
  Grid,
  Box,
  List,
  ListItem,
  Paper,
  InputBase,
} from "@mui/material";

const MatterTask = () => {
  return (
    <Fragment>
      <Box component={Paper} mt={2} p={2}>
        <Typography sx={{ fontSize: "0.8rem" }}>Upcoming Activity</Typography>
        <List mt={1} sx={{ fontSize: "0.75rem" }}>
          <ListItem components="p">
            Date: - Activity - Responsible Party
          </ListItem>
          <ListItem components="p">
            YYYY/MM/DD: - Hearing for MSC - MJJ
          </ListItem>
          <ListItem components="p">YYYY/MM/DD: - Trail - KSK</ListItem>
        </List>
      </Box>
    </Fragment>
  );
};

const Activities = () => {
  return (
    <Fragment>
      <Box component={Paper} mt={2} p={2}>
        <Typography sx={{ fontSize: "0.8rem" }}>Upcoming Activity</Typography>
        <List mt={1} sx={{ fontSize: "0.75rem" }}>
          <ListItem components={Typography}>
            Date: - Activity - Responsible Party
          </ListItem>
          <ListItem components={Typography}>
            YYYY/MM/DD: - Hearing for MSC - MJJ
          </ListItem>
          <ListItem components={Typography}>YYYY/MM/DD: - Trail - KSK</ListItem>
        </List>
      </Box>
    </Fragment>
  );
};

const Cards = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ minWidth: 200 }}>
            <CardContent>
              <Typography variant="h6" component="h7" color="purple">
                Classification
              </Typography>
              <Typography variant="h4" component="h5">
                -
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minWidth: 200 }}>
            <CardContent>
              <Typography variant="h6" component="h7" color="purple">
                % time spent
              </Typography>
              <Typography variant="h4" component="h5">
                -
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ minWidth: 200 }}>
            <CardContent>
              <Typography variant="h6" component="h7" color="purple">
                Matter Completion
              </Typography>
              <Typography variant="h4" component="h5">
                -
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const MatterDetail = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "1.5rem",
    backgroundColor: "#eee",
    "&:hover": {
      backgroundColor: "#ddd",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "40%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  // const [matters, setMatters] = useState(null);
  return (
    <Fragment>
      <Grid container>
        <Grid item lg={12}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
        <Grid item lg={12}>
          <Grid container spacing={2}>
            <Grid item mt={2} lg={7}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Recent Document</TableCell>
                      <TableCell>Version</TableCell>
                      <TableCell>Last Open</TableCell>
                      <TableCell>User</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Grid container spacing={3}>
                <Grid item>
                  <Activities />
                </Grid>
                <Grid item>
                  <MatterTask />
                </Grid>
              </Grid>
            </Grid>
            <Grid item mt={2} lg={5}>
              <Cards />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MatterDetail;
