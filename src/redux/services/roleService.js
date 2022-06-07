/** @format */

import axios from "axios";

import { CONFIG } from "../../api/MatterApi";

// Get user permissions
const getRole = async (id) => {
	const response = await axios.get(
		`${process.env.REACT_APP_API_URL}/user/role-single-view/${id}/`,
		CONFIG,
	);

	return response.data;
};

const roleService = {

	getRole,

};

export default roleService;
