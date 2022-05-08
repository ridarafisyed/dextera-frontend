/** @format */

import { combineReducers } from "redux";
// import leads from "./leads";
import profile from "./profile";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import data from "./data";
import sidebar from "../redux/features/sidebarSlice";
import tabs from "../redux/features/tabSlice";
import favorite from "../redux/features/favoriteSlice";

export default combineReducers({
  auth,
  profile,
  errors,
  messages,
  data,
  sidebar,
  favorite,
  tabs,
});
