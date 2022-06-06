/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const memberSlice = createSlice({
  name: "member",
  initialState: initialState,
  reducers: {
    addTab: (state, action) => {
      const newMember = {
        id: action.payload.id,
        name: action.payload.tab,
      };
      state.push(newMember);
    },
    
    reset: (state) => initialState,
  },
});

export const { selectMember, reset } = memberSlice.actions;
export default memberSlice.reducer;
