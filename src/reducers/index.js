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

export default combineReducers({
  auth,
  profile,
  errors,
  messages,
  data,
  sidebar,
  tabs,
});
