/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roleService from "../services/roleService";

const initialState = {
	role: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
	all: false,
};


// Get user role
export const getRole = createAsyncThunk(
	"role/getAll",
	async (id, thunkAPI) => {
		try {
			return await roleService.getRole(id);
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

export const roleSlice = createSlice({
	name: "role",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			
			.addCase(getRole.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRole.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.role = action.payload;
			})
			.addCase(getRole.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
	},
});

export const {
	reset
} = roleSlice.actions;
export default roleSlice.reducer;
