import axios from 'axios'
import { CONFIG } from "../../api/MatterApi";

const API_URL = `${process.env.REACT_APP_API_URL}/user/auth/`

// Create new goal
const createRole = async (roleData, token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.post(API_URL, roleData, CONFIG)

  return response.data
}

// Get user goals
const getRoleFn = async (RoleId) => {

  const response = await axios.get(API_URL + RoleId , CONFIG)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {

  const response = await axios.delete(API_URL + goalId, CONFIG)

  return response.data
}

const roleFnService = {
  // createGoal,
  getRoleFn,
  // deleteGoal,
}

export default roleFnService