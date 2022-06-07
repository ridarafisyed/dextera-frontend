/** @format */

import axios from "axios";

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from "./types";
import { createMessage, returnErrors } from "./messages";

import { reset } from "../redux/features/tabSlice";
import { resetNewTab } from "../redux/features/searchTabSlice";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
	// User Loading
	dispatch({ type: USER_LOADING });

	axios
		.get(
			`${process.env.REACT_APP_API_URL}/user/auth/user`,
			tokenConfig(getState),
		)
		.then((res) => {
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data.message, err.response.status));
			dispatch({
				type: AUTH_ERROR,
			});
		});
};

// LOGIN USER
export const login = (username, email, password) => (dispatch) => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// Request Body
	const body = JSON.stringify({ username, password });

	axios
		.post(`${process.env.REACT_APP_API_URL}/user/auth/login`, body, config)
		.then(function(response) {
			console.log(response);
			dispatch(createMessage({ LoginSuccess: "Login Successful" }));
			dispatch({
				type: LOGIN_SUCCESS,
				payload: response.data,
			});
		})
		.catch(function(error) {
			dispatch(returnErrors(error.response.data, error.response.status));
			dispatch({
				type: LOGIN_FAIL,
			});
			console.log(error);
		});
};

// REGISTER USER
export const register = ({ username, email, password }) => (dispatch) => {
	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// Request Body
	const body = JSON.stringify({ username, email, password });

	axios
		.post(`${process.env.REACT_APP_API_URL}/user/auth/register`, body, config)
		.then((res) => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: REGISTER_FAIL,
			});
		});
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
	axios
		.post(
			`${process.env.REACT_APP_API_URL}/user/auth/logout`,
			null,
			tokenConfig(getState),
		)
		.then((res) => {
			localStorage.removeItem("token");
			dispatch(reset());
			dispatch(resetNewTab());
			dispatch({
				type: LOGOUT_SUCCESS,
			});
		});
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
	// const token = useSelector((state) => state.auth.token);
	// Get token from state
	const token = getState().auth.token;

	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// If token, add to headers config
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	}

	return config;
};
