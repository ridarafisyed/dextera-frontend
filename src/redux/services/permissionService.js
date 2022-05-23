/** @format */

import axios from "axios";

import { CONFIG } from "../../api/MatterApi";

const API_URL = "https://dextera-lawfirm.herokuapp.com/user/auth/";
// Create new permission
const createpermission = async (permissionData, token) => {
	//   const config = {
	//     headers: {
	//       Authorization: `Bearer ${token}`,
	//     },
	//   }
	//   const response = await axios.post(API_URL, permissionData, config)
	//   return response.data
};

// Get user permissions
const getPermissions = async (id) => {
	const response = await axios.get(
		`https://dextera-lawfirm.herokuapp.com/user/auth/role-permissions/${id}/`,
		CONFIG,
	);

	return response.data;
};

// Delete user permission
const deletePermission = async (id) => {
	const response = await axios.delete(
		`https://dextera-lawfirm.herokuapp.com/user/auth/role-permissions/${id}/`,
		CONFIG,
	);

	return response.data;
};
const updatePermission = async (data) => {
	const response = await axios.put(
		`https://dextera-lawfirm.herokuapp.com/user/auth/permissions/${data.id}/`,
		CONFIG,
	);

	return response.data;
};

const permissionService = {
	createpermission,
	getPermissions,
	deletePermission,
	updatePermission,
};

export default permissionService;
