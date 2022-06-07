/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import permissionService from "../services/permissionService";

const initialState = {
	permissions: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
	all: false,
};

// Create new permissions
export const createPermission = createAsyncThunk(
	"permissions/create",
	async (permissionData, thunkAPI) => {
		try {
			return await permissionService.createPermission(permissionData);
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

// Get user permissions
export const getPermissions = createAsyncThunk(
	"permissions/getAll",
	async (id, thunkAPI) => {
		try {
			return await permissionService.getPermissions(id);
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
export const updatePermission = createAsyncThunk(
	"permissions/update",
	async ({id, value}, thunkAPI) => {

		try {
			return await permissionService.updatePermission(id, value);
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

// Delete user permission
export const deletePermission = createAsyncThunk(
	"permissions/delete",
	async (id, thunkAPI) => {
		try {
			return await permissionService.deletePermission(id);
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

export const permissionSlice = createSlice({
	name: "permission",
	initialState,
	reducers: {
		reset: (state) => initialState,
		
	},
	extraReducers: (builder) => {
		builder
			.addCase(createPermission.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createPermission.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.permissions.push(action.payload);
			})
			.addCase(createPermission.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getPermissions.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPermissions.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.permissions = action.payload;
			})
			.addCase(getPermissions.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(updatePermission.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updatePermission.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;	
				getPermissions()

			})
			.addCase(updatePermission.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deletePermission.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deletePermission.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.permissions = state.permissions.filter(
					(permission) => permission._id !== action.payload.id,
				);
			})
			.addCase(deletePermission.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const {
	reset
} = permissionSlice.actions;
export default permissionSlice.reducer;
