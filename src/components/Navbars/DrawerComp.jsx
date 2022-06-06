/** @format */

import React, { Fragment, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
import Chatting from "../Chat/Chat";

// styling imports
import {
  
  IconButton,
  Menu,
  MenuItem,
  Fade,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,

  DialogActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";


import {
  Message,
  EmailRounded,
  CalendarToday,
  CheckBox,

  NotificationAdd,
  Settings,
  Star,

} from "@mui/icons-material/";
import { useToggle } from "../../context/useToggle";
import Calender from "../Dashboard/Calender";

import Favorites from "../Favorite/Favorites";

import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "react-responsive";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,

} from "@mui/material";

export const NavBarSecResponsive = () => {

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const [openFav, setOpenFav] = useState(false);

  const handleClickOpenFav = () => {
    setOpenFav(true);
  };

  const handleCloseFav = () => {
    setOpenFav(false);
  };
  const [openCal, setOpenCal] = useState(false);

  const handleClickOpenCal = () => {
    setOpenCal(true);
  };

  const handleCloseCal = () => {
    setOpenCal(false);
  };

  const [openChat, setOpenChat] = useState(false);

  const handleClickOpenChat = () => {
    setOpenChat(true);
  };

  const handleCloseChat = () => {
    setOpenChat(false);
  };

  const [localuser, setLocalUser] = useState({
    username: "Admin",
    is_firm: false,
    is_lawyer: false,
    is_client: false,
  });

  useEffect(() => {
    if (user) {
      setLocalUser({
        username: user.username,
        is_firm: user.is_firm,
        is_lawyer: user.is_lawyer,
        is_client: user.is_client,
      });
    }
  }, [user]);
  const [redirect, setRedirect] = useState(false);

  const [settingAcnchorEl, setSettingAcnchorEl] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [settingAcnchorEl2, setSettingAcnchorEl2] = useState(null);



  const handleLogout = () => {
    console.log("logout button just clicked");
    dispatch(logout());
    setRedirect(true);
  };

  const open = Boolean(anchorEl);

  const openSetting2 = Boolean(settingAcnchorEl2);

  const handleClick2 = (event) => {
    setSettingAcnchorEl2(event.currentTarget);
  };
  const openSetting = Boolean(settingAcnchorEl);
  const handleClose2 = () => {
    setSettingAcnchorEl2(null);
  };

  const handleClick = (event) => {
    setSettingAcnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSettingAcnchorEl(null);
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Fragment>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <IconButton
                className="nav-items"
                size="large"
                onClick={handleClickOpenChat}
                sx={{
                  fontSize: "2rem",
                  color: "#7a4ebf",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#7a4ebf",
                  },
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Message />
              </IconButton>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Dialog
          className="nav-items"
          Validate
          open={openChat}
          onClose={handleCloseChat}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            position: "absolute",
            right: "20px",
            bottom: "150px",
          }}
        >
          <DialogTitle id="alert-dialog-title">
            {"Chatting Application"}
          </DialogTitle>
          <DialogContent>
            <Chatting />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseChat}>Close</Button>
          </DialogActions>
        </Dialog>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <IconButton
                size="large"
                className="nav-items"
                component={Link}
                sx={{
                  fontSize: "2rem",
                  color: "#7a4ebf",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#7a4ebf",
                  },
                }}
                to={{
                  pathname:
                    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com",
                }}
                target="_blank"
              >
                <EmailRounded />
              </IconButton>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <IconButton
                size="large"
                className="nav-items"
                onClick={handleClickOpenCal}
                sx={{
                  fontSize: "2rem",
                  color: "#7a4ebf",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#7a4ebf",
                  },
                }}
              >
                <CalendarToday />
              </IconButton>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Dialog
          Validate
          open={openCal}
          maxWidth="lg"
          fullWidth
          onClose={handleCloseCal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            position: "absolute",
            right: "20px",
            bottom: "150px",
          }}
        >
          <DialogTitle id="alert-dialog-title">{"Calender"}</DialogTitle>
          <DialogContent>
            <Calender />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseCal}>Close</Button>
          </DialogActions>
        </Dialog>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <IconButton
                aria-label="more"
                className="nav-items"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={openSetting2 ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick2}
                sx={{
                  fontSize: "2rem",
                  color: "#7a4ebf",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#7a4ebf",
                  },
                }}
              >
                <CheckBox />
              </IconButton>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          className="nav-items"
          anchorEl={settingAcnchorEl2}
          open={openSetting2}
          onClose={handleClose2}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose2}>Task 1: This is task one</MenuItem>
          <MenuItem onClick={handleClose2}>Task 2: This is task two</MenuItem>
          <MenuItem onClick={handleClose2}>Task 3: This is task three</MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose2}>Task 4: This is task four</MenuItem>
        </Menu>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                className="nav-items"
                aria-expanded={openSetting2 ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClickOpenFav}
                sx={{
                  fontSize: "2rem",
                  color: "#7a4ebf",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#7a4ebf",
                  },
                }}
              >
                <Star />
              </IconButton>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Dialog
          open={openFav}
          onClose={handleCloseFav}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Favorites"}</DialogTitle>
          <DialogContent>
            <Favorites />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseFav} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                className="nav-items"
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem component={Link} to="/profile">
                  Profile
                </MenuItem>
                {/* <MenuItem component={Link} to=''>My account</MenuItem> */}
              </Menu>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={openSetting ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                  color: "#7a4ebf",
                }}
              >
                <Settings />
              </IconButton>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={settingAcnchorEl}
                open={openSetting}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Account</MenuItem>
                <MenuItem onClick={handleClose}>Setting</MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>

      <NotificationAdd mr={2} />
    </Fragment>
  );
};
