/** @format */

import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab",
  initialState: [],
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
  },
});

export const { addTab, removeTab } = tabSlice.actions;
export default tabSlice.reducer;
