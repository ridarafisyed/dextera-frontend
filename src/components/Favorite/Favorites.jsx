/** @format */

import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Star } from "@mui/icons-material";

const Favorites = () => {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Star sx={{ color: "orange" }} />
            </ListItemIcon>
            <ListItemText primary="Favorite 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Star sx={{ color: "orange" }} />
            </ListItemIcon>
            <ListItemText primary="Favorite 2" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Favorites;
