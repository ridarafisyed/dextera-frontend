/** @format */

import React, { Fragment, useState } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Link,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FooterBar, FooterLink, FooterButton } from "../../styles/styles";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Favorites from "../Favorite/Favorites";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Box mt={3}>
        {isTabletOrMobile ? (
          <Box sx={{ color: "#eee", backgroundColor: "#7a4ebf" }}>
            <List>
              <FooterLink to={"/ledgers"}>Accounting</FooterLink>
            </List>
            <List>
              <FooterLink to={"/"}> Calendar</FooterLink>
            </List>
            <List>
              <FooterLink to={"/"}>Contacts</FooterLink>
            </List>
            <List>
              <FooterButton
                sx={{
                  color: "#eee",
                  marginLeft: "1.2rem",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  "&:visited": {
                    color: "#eee",
                  },
                }}
                variant="text"
                onClick={handleClickOpen}
              >
                Favorites
              </FooterButton>
            </List>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Favorites"}</DialogTitle>
              <DialogContent>
                <Favorites />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            <List>
              <FooterLink to={"/matters"}>Matters</FooterLink>
            </List>
            <List>
              <FooterLink to={"/tasks"}>Tasks</FooterLink>
            </List>
            <List>
              <FooterLink to={"/"}>Workflow</FooterLink>
            </List>
          </Box>
        ) : (
          <FooterBar>
            <FooterLink to={"/ledgers"}>Accounting</FooterLink> |
            <FooterLink to={"/"}> Calendar</FooterLink> |
            <FooterLink to={"/"}>Contacts</FooterLink> |
            <FooterButton
              sx={{
                color: "#eee",
                textTransform: "uppercase",
                textDecoration: "none",
                "&:visited": {
                  color: "#eee",
                },
              }}
              variant="text"
              onClick={handleClickOpen}
            >
              Favorites
            </FooterButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Favorites"}</DialogTitle>
              <DialogContent>
                <Favorites />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            |<FooterLink to={"/matters"}>Matters</FooterLink> |
            <FooterLink to={"/tasks"}>Tasks</FooterLink> |
            <FooterLink to={"/"}>Workflow</FooterLink>
          </FooterBar>
        )}
      </Box>
    </Fragment>
  );
};

export default Footer;
