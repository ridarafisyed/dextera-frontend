/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  revenueIn: true,
  revenueOut: true,
  newCustomer: true,
  lostCustomer: true,
  newAccount: true,
  appointment: true,
  marketing: true,
  empOversite: true,
  emails: true,
  calls: true,
  map: true,
  display: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    isDisplay: (state) => {
      state.display = !state.display;
    },
    hideSidebar: (state) => {
      state.display = false;
    },
    showSidebar: (state) => {
      state.display = true;
    },
    // manageRoleActive: (state) => {
    //   state.manageRole = !state.manageRole;
    // },
    // manageUserActive: (state) => {
    //   state.manageUser = !state.manageUser;
    // },
    // manageGroupActive: (state) => {
    //   state.manageGroup = !state.manageGroup;
    // },
    revenueInActive: (state) => {
      state.revenueIn = !state.revenueIn;
    },
    revenueOutActive: (state) => {
      state.revenueOut = !state.revenueOut;
    },
    newCustomerActive: (state) => {
      state.newCustomer = !state.newCustomer;
    },
    lostCustomerActive: (state) => {
      state.lostCustomer = !state.lostCustomer;
    },
    newAccountActive: (state) => {
      state.newAccount = !state.newAccount;
    },
    appointmentActive: (state) => {
      state.appointment = !state.appointment;
    },
    marketingActive: (state) => {
      state.marketing = !state.marketing;
    },
    empOversiteActive: (state) => {
      state.empOversite = !state.empOversite;
    },
    emailsActive: (state) => {
      state.emails = !state.emails;
    },
    callsActive: (state) => {
      state.calls = !state.calls;
    },
    mapActive: (state) => {
      state.map = !state.map;
    },
  },
});

export const {
  isDisplay,
  // manageRoleActive,
  // manageGroupActive,
  // manageUserActive,
  hideSidebar,
  showSidebar,
  revenueInActive,
  revenueOutActive,
  newCustomerActive,
  lostCustomerActive,
  newAccountActive,
  appointmentActive,
  marketingActive,
  empOversiteActive,
  emailsActive,
  callsActive,
  mapActive,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
