/** @format */

import axios from "axios";
import { CONFIG } from "../../api/MatterApi";

const API_URL = "https://dextera-lawfirm.herokuapp.com/user/auth/";

// Register user
const signUp = async (userData) => {
	const response = await axios.post(API_URL + "register", userData, CONFIG);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data.user));
		localStorage.setItem("token", JSON.stringify(response.data.token));
	}

	return response.data;
};

// Login user
const signIn = async (userData) => {
	const response = await axios.post(API_URL + "login", userData, CONFIG);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}

	return response.data;
};

// Logout user
const signOut = async (token) => {
	const response = await axios.post(API_URL + "logout", token);
	if (response.data) {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	}

	// return response.data
};

const authService = {
	signIn,
	signOut,
	signUp,
};

export default authService;
