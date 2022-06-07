/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
	user: user ? user : null,
	isAuthenticated: false,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// signUp user
export const signUp = createAsyncThunk(
	"auth/signUp",
	async (user, thunkAPI) => {
		try {
			return await authService.signUp(user);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

// signIn user
export const signIn = createAsyncThunk(
	"auth/signIn",
	async (user, thunkAPI) => {
		try {
			return await authService.signIn(user);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
	await authService.signOut(token);
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.isAuthenticated = false;
			state.message = "";
		},
		resetError: (state) => {
			state.isError =false
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(signUp.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isAuthenticated = true;
				state.user = action.payload;
			})
			.addCase(signUp.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isAuthenticated = false;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(signIn.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isAuthenticated = true;
				state.user = action.payload;
			})
			.addCase(signIn.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(signOut.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signOut.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(signOut.fulfilled, (state) => {
				state.user = null;
				state.isSuccess = true;
				state.isAuthenticated = false;
			});
	},
});

export const { reset, resetError } = authSlice.actions;
export default authSlice.reducer;
