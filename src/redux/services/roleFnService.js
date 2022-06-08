import axios from 'axios'
import { CONFIG } from "../../api/MatterApi";

const API_URL = `${process.env.REACT_APP_API_URL}/user/auth/`

// Get user goals
const getRoleFn = async (RoleId) => {

  const response = await axios.get(API_URL + RoleId , CONFIG)

  return response.data
}


const roleFnService = {

  getRoleFn,

}

export default roleFnService