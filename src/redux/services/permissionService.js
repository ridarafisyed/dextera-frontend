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
		`http://localhost:8000/user/auth/role-permissions/${id}/`,
		CONFIG,
	);

	return response.data;
};
// update user permission

const updatePermission = async (id, value) => {
	
	const response = await axios.patch(
		`http://localhost:8000/user/auth/permissions/${id}/`,
		value, 
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

const permissionService = {
	createpermission,
	getPermissions,
	updatePermission,
	deletePermission,
};

export default permissionService;
