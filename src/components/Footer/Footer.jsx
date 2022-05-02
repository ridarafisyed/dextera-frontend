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
import Favorites from "../Favorite/Favorites";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Box>
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
      </Box>
    </Fragment>
  );
};

export default Footer;
