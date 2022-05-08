/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: {},
  isAvailable: true,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      const newFav = {
        id: action.payload.id,
        name: action.payload.name,
        page: action.payload.page,
      };
      if (state.favorite.length < 10) {
        state.favorite.push(newFav);
      } else state.isAvailable = false;
    },

    removeFav: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addFav, removeFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
