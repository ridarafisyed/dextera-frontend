/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const newTabSlice = createSlice({
  name: "tab",
  initialState: initialState,
  reducers: {
    addNewTab: (state, action) => {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
      });
    },
    removeNewTab: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    removeLastNewTab: (state) => {
      state.pop();
    },
    resetNewTab: (state) => initialState,
  },
});

export const {
  addNewTab,
  removeNewTab,
  resetNewTab,
  removeLastNewTab,
} = newTabSlice.actions;
export default newTabSlice.reducer;
