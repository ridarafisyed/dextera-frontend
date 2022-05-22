import axios from 'axios'

import { CONFIG } from "../../api/MatterApi";

const API_URL = `${process.env.REACT_APP_API_URL}/user/auth/role-permissions/`
// Create new permission
const createpermission = async (permissionData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.post(API_URL, permissionData, config)

//   return response.data
}

// Get user permissions
const getPermissions = async (id) => {

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/auth/role-permissions/${id}/`, CONFIG)

  return response.data
}

// Delete user permission
const deletePermission = async (id) => {

  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/user/auth/role-permissions/${id}/`, CONFIG)

  return response.data
}
const updatePermission = async (data) => {

  const response = await axios.put(`${process.env.REACT_APP_API_URL}/user/auth/permissions/${data.id}/`, CONFIG)

  return response.data
}

const permissionService = {
  createpermission,
  getPermissions,
  deletePermission,
  updatePermission
}

export default permissionService