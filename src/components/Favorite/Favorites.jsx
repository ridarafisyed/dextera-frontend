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
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const favList = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Star sx={{ color: "orange" }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemText primary="Favorite 1" />
        </ListItem>
      </List>
    </div>
  );
};

export default Favorites;
