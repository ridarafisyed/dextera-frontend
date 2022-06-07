/** @format */

import { combineReducers } from "redux";
// import leads from "./leads";
import profile from "./profile";
import errors from "./errors";
import messages from "./messages";
// import auth from "./auth";
import data from "./data";
import sidebarReducer from "../redux/features/sidebarSlice";
import tabsReducer from "../redux/features/tabSlice";
import newTabsReducer from "../redux/features/searchTabSlice";
import favoriteReducer from "../redux/features/favoriteSlice";
import rolefnsReducer from "../redux/features/roleFnSlice";
import permissionReducer from "../redux/features/rolePermissionSlice";
import memberReducer from "../redux/features/selectMemberSlice"
import roleReducer from "../redux/features/roleSlice";
import auth from "../redux/features/authSlice";

export default combineReducers({
	auth,
	profile,
	role: roleReducer,
	errors,
	messages,
	data,
	sidebar: sidebarReducer,
	favorite: favoriteReducer,
	tabs: tabsReducer,
	newTabs: newTabsReducer,
	permissions: permissionReducer,
	member: memberReducer
});
