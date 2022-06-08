
/** @format */

import React, {  useState } from "react";
import axios from "axios"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { CONFIG } from "../../api/MatterApi";
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import RectangleIcon from '@mui/icons-material/Rectangle';
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import { getRole } from "../../redux/features/roleSlice";

import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import "./style.css"

const ToggleButton = styled(MuiToggleButton)({
  color:"#D3D3D3",
  backgroundColor: "#D3D3D3", 
  "&:hover":{
    color:"#D3D3D3",
    backgroundColor: "#D3D3D3", 
  },
  "&.Mui-selected": {
    color: "#4BB543",
    backgroundColor: '#4BB543'
  }, "&.Mui-selected:hover": {
    color: "#4BB543",
    backgroundColor: '#4BB543'
  }
});

const RoleFunctions = ({id}) => {
    const role  = useSelector((state)=> state.role.role)
    // const isLoading = useSelector((state)=>state.role.role)
    const [isAll, setIsAll] = useState(false)
    const dispatch = useDispatch()

    const updateFunction=(data)=>{
      let is_set = false
      if (data.is_set === false){
        is_set = true
      }
      
      const body =  JSON.stringify({is_set})
      axios.patch(
        `${process.env.REACT_APP_API_URL}/user/role-function-permission-single/${data.id}/`,
        body, 
        CONFIG,
      ).then((res)=>{
        dispatch(getRole(id))
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      });
    }

  return (
    <>
      {role.role_functions?.map((item)=>(
        <TableRow>
        	<TableCell sx={{ color:'#796ef0', textTransform:'uppercase'}}>
              {item.name}
            </TableCell>
            {item.function_permission.map((permission)=>(
              <>
              <TableCell>
                <ToggleButton
                  value={permission.is_set}
                  selected={permission.is_set}
                  onChange={() => {
                    updateFunction(permission);
                  }}
                >
                  {permission.is_set ? <RectangleIcon className="activeButton" />: <RectangleIcon className="disableButton"/> }
                  
                </ToggleButton>
              </TableCell>
              {item.name === "contact" ? (
              <TableCell>
                <ToggleButton
                    value={permission.is_set}
                    selected={permission.is_set}
                    onChange={() => {
                      updateFunction(permission);
                    }}
                    className="toggleButton"
                  >
                    {permission.is_set ? <RectangleIcon className="activeButton"/>: <RectangleIcon className="disableButton"/> }
                    
                  </ToggleButton>
                </TableCell>
                
                ):null}
              </>
              
            ))}
           {item.name ==="contact"? null: <TableCell colSpan={4}/>}
            
          </TableRow>
            
      ))
    }
      	 
    </>
  )
}

export default RoleFunctions
