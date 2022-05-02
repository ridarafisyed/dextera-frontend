/** @format */
/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
  },
};

const dashboardItemSlice = createSlice({
  name: "dashbaordItems",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { removeItem, addItem } = dashboardItemSlice.actions;
export default dashboardItemSlice.reducer;
