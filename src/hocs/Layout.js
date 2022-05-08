/** @format */

import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbars/Navbar";
import NavbarSec from "../components/Navbars/NavbarSec";
import Sidebar from "../components/Sidebar/Sidebar";
import { connect } from "react-redux";
import Chatting from "../components/Chat/Chat";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  isDisplay,
  hideSidebar,
  showSidebar,
} from "../redux/features/sidebarSlice";

import { Paper, Fab, Popover } from "@mui/material";
import { Grid, Box, Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import { Chat, Report } from "@mui/icons-material";

import Footer from "../components/Footer/Footer";

const InnerLayout = ({ isAuthenticated, children }) => {
  const theme = useTheme();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const sidebarToggle = useSelector((state) => state.sidebar.display);
  const dispatch = useDispatch();

  const [drawerOpen, setDrawerOpen] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setDrawerOpen(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setDrawerOpen(null);
  };

  const openPopover = Boolean(drawerOpen);
  const id = openPopover ? "simple-popover" : undefined;

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSidebarToggle = () => {
    if (sidebarToggle) {
      dispatch(hideSidebar());
    } else {
      dispatch(showSidebar());
    }
  };
  const descriptionElementRef = React.useRef(null);

  useEffect(() => {
    if (isBigScreen) {
      dispatch(showSidebar());
    } else if (isTabletOrMobile) {
      dispatch(hideSidebar());
    }
  }, []);
  useEffect(() => {
    if (drawerOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [drawerOpen]);

  return (
    <Paper style={{ margin: "0" }}>
      <Grid contianer rowSpacing={2} columnSpacing={2}>
        <Grid item lg={12} md={12}>
          {isAuthenticated ? (
            <Fragment>
              <NavbarSec />
            </Fragment>
          ) : (
            <Navbar />
          )}
        </Grid>

        {isAuthenticated ? (
          <Fragment>
            <Grid item lg={12}>
              <Navbar />
            </Grid>
            <Grid container direction="row" wrap="nowrap">
              {sidebarToggle ? (
                <Fragment>
                  <Grid item lg={2} xs={12} m={3}>
                    <Sidebar />
                  </Grid>
                  <Grid item lg={10} xs={12} p={1}>
                    <Box>
                      <Button
                        onClick={handleSidebarToggle}
                        p={5}
                        sx={{
                          left: "-8rem",
                          top: "2rem",
                        }}
                      >
                        {sidebarToggle ? (
                          <i className="fas fa-angle-double-left"></i>
                        ) : (
                          <i className="fas fa-angle-double-right"></i>
                        )}
                      </Button>
                    </Box>
                    {children}
                  </Grid>
                </Fragment>
              ) : (
                <Fragment>
                  <Grid item lg={12} xs={12} p={1}>
                    <Box>
                      <Button onClick={handleSidebarToggle}>
                        {sidebarToggle ? (
                          <i className="fas fa-angle-double-left"></i>
                        ) : (
                          <i className="fas fa-angle-double-right"></i>
                        )}
                      </Button>
                    </Box>
                    {children}
                  </Grid>
                </Fragment>
              )}
            </Grid>
            <Grid item lg={12}>
              <Footer />
            </Grid>
          </Fragment>
        ) : (
          <Grid item lg={12} xs={12}>
            {children}
          </Grid>
        )}
        <Fab
          size="large"
          sx={
            isDesktopOrLaptop
              ? {
                  borderRadius: "50%",
                  backgroundColor: "#edb4b6",
                  position: "fixed",
                  bottom: "16px",
                  left: "16px",
                  color: "red",
                  zIndex: "200",
                  "&:hover": {
                    color: "red",
                  },
                }
              : { display: "none" }
          }
          aria-label="report"
        >
          <Report />
        </Fab>
        <Fab
          size="large"
          onClick={handlePopoverOpen}
          sx={
            isDesktopOrLaptop
              ? {
                  borderRadius: "50%",
                  backgroundColor: "#eee",
                  position: "fixed",
                  bottom: "16px",
                  right: "16px",
                  color: "#461594",
                  zIndex: "200",
                  "&:hover": {
                    color: "#7a4ebf",
                  },
                }
              : { display: "none" }
          }
          aria-label="chat"
        >
          <Chat />
        </Fab>
        <Popover
          open={openPopover}
          anchorEl={drawerOpen}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ margin: "-2rem" }}
        >
          <Chatting />
        </Popover>
      </Grid>
    </Paper>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(InnerLayout);
