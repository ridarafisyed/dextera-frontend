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
		updateIsView: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload,
			);
			if (permission) {
				permission.is_view = !permission.is_view;
			}
		},
		updateIsEdit: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload,
			);
			if (permission) {
				permission.is_edit = !permission.is_edit;
			}
		},
		updateIsCreate: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload,
			);
			if (permission) {
				permission.is_create = !permission.is_create;
			}
		},
		updateIsDelete: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload,
			);
			if (permission) {
				permission.is_delete = !permission.is_delete;
			}
		},
		updateIsContacts: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload,
			);
			if (permission) {
				permission.is_contacts = !permission.is_contacts;
			}
		},
		updateIsTeam: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload,
			);
			if (permission) {
				permission.is_team = !permission.is_team;
			}
		},
		updateIsOffice: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload,
			);
			if (permission) {
				permission.is_office = !permission.is_office;
			}
		},
		updateIsRegion: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload,
			);
			if (permission) {
				permission.is_region = !permission.is_region;
			}
		},
		updateIsAll: (state, action) => {
			const permission = state.permissions.permissions.find(
				(item) => item.id === action.payload.id,
			);
			if (permission) {
				permission.is_contacts = !action.payload.value;
				permission.is_team = !action.payload.value;
				permission.is_office = !action.payload.value;
				permission.is_region = !action.payload.value;
			}
		},
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
	reset,
	updateIsView,
	updateIsEdit,
	updateIsCreate,
	updateIsDelete,
	updateIsContacts,
	updateIsTeam,
	updateIsOffice,
	updateIsRegion,
	updateIsAll,
} = permissionSlice.actions;
export default permissionSlice.reducer;
