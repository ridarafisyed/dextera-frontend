/** @format */

import React, {  useState } from "react";
import axios from "axios"
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

const RoleFunctions = ({id}) => {
    const role  = useSelector((state)=> state.role.role)
    const isLoading = useSelector((state)=>state.role.role)
    const [isAll, setIsAll] = useState(null)
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
 
      {isLoading ? 
        role?.role_functions.map((item)=>(
        <TableRow>
        	<TableCell>
              <Typography >{item.name}</Typography>
            </TableCell>
            {item.function_permission.map((permission)=>(
              <>
              { permission.name === "Contact" ? setIsAll(isAll + permission.is_set): null}
              <TableCell>
                <Button
                  onClick={()=>updateFunction(permission)}
                  sx={
                    permission.is_set
                      ? {
                          "color": "#4BB543",
                          "backgroundColor": "#4BB543",
                          "&:hover": {
                            backgroundColor: "#4BB545",
                            color: "#4BB545",
                          },
                        }
                      : {
                          "color": "#D3D3D3",
                          "backgroundColor": "#D3D3D3",
                          "&:hover": {
                            backgroundColor: "#D3D3D3",
                            color: "#D3D3D3",
                          },
                        }
                  }
                  
                  size='large'
                  aria-label='toggle'>
                  <RectangleIcon />
                </Button>
              </TableCell>
              </>
            ))}
            {item.name === "Contact" ?
              <TableCell>
                <Button
                    sx={
                      isAll ? {
                            "color": "#4BB543",
                            "backgroundColor": "#4BB543",
                            "&:hover": {
                              backgroundColor: "#4BB545",
                              color: "#4BB545",
                            },
                          }
                        : {
                            "color": "#D3D3D3",
                            "backgroundColor": "#D3D3D3",
                            "&:hover": {
                              backgroundColor: "#D3D3D3",
                              color: "#D3D3D3",
                            },
                          }
                    }
                    // onClick={()=>settingAll()}
                    size='large'
                    aria-label='toggle'>
                    <RectangleIcon />
                  </Button>
                </TableCell>
                : null}
          </TableRow>
            
      )): <Box mt={5} sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>  
    }
      	
    </>
  )
}

export default RoleFunctions
