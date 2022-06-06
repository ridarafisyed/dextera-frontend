/** @format */

import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      const newFav = {
        id : action.payload.id,
        name: action.payload.name,
        page: action.payload.page,
      };
      state.push(newFav);
    },

    removeFav: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addFav, removeFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
