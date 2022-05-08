/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tabSlice = createSlice({
  name: "tab",
  initialState: initialState,
  reducers: {
    addTab: (state, action) => {
      const newTask = {
        id: action.payload.id,
        name: action.payload.tab,
      };
      state.push(newTask);
    },
    removeTab: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    reset: (state) => initialState,
  },
});

export const { addTab, removeTab, reset } = tabSlice.actions;
export default tabSlice.reducer;
