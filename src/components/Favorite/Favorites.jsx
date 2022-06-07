/** @format */

import React from "react";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../../redux/features/favoriteSlice";

const Favorites = () => {
  const favorite = useSelector((state) => state.favorite)
  const dispatch = useDispatch();
  const handleRemoveFav = (fav) => {
    dispatch(removeFav(fav));
  };
  return (
    <div>
     <List>
        {favorite ?
        (favorite.map((item)=>(
            <ListItem key={item.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={()=>handleRemoveFav(item)}>
                  <CloseIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{bgcolor:"#eee"}}>
                  <StarIcon sx={{color:"orange"}}/>
                </Avatar>
              </ListItemAvatar>
              {item.name === '/'? <ListItemText
                primary="Home"
               
              />: <ListItemText
                primary={item.name}
               
              />}
            </ListItem>
        ))): null}
        
      </List>
    </div>
  );
};

export default Favorites;
