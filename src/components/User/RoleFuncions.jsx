/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios"
import { CONFIG } from "../../api/MatterApi";

import { toast } from 'react-toastify'

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,TableBody,
  Paper,
  Button,
  
  Typography,
  IconButton,
  Switch,
} from "@mui/material";
import RectangleIcon from '@mui/icons-material/Rectangle';
import { useSelector, useDispatch } from "react-redux";
import { useToggle } from "../../context/useToggle";
import {
	getPermissions,
	updatePermission
} from "../../redux/features/permissionSlice";




const RoleFuncions = ({permission}) => {
  const name = permission.name
  const id =  permission.id
  const role = permission.role

  const [isView, setIsView] = useToggle(permission.is_view)
  const [isEdit, setIsEdit] = useToggle(permission.is_edit)
  const [isCreate, setIsCreate] = useToggle(permission.is_create)
  const [isDelete, setIsDelete] = useToggle(permission.is_delete)
  const [isContacts, setIsContacts] = useToggle(permission.is_contacts)
  const [isTeam, setIsTeam] = useToggle(permission.is_team)
  const [isOffice, setIsOffice] = useToggle(permission.is_office)
  const [isRegion, setIsRegion] = useToggle(permission.is_region)
  const [isAll, setIsAll] = useToggle(false)
         
const dispatch = useDispatch()
const updateFunctions = () =>{
  const is_view = isView
  const is_edit = isEdit
  const is_create = isCreate
  const is_delete = isDelete
  const is_contacts = isContacts
  const is_team = isTeam
  const is_office = isOffice
  const is_region = isRegion

  const body =  JSON.stringify({ id, name, role, is_view, is_edit, is_create,is_delete,is_contacts,is_team,is_office,is_region})

  axios.patch(
		`http://localhost:8000/user/auth/permissions/${id}/`,
		body, 
		CONFIG,
	).then((res)=>{
    // dispatch(getPermissions)
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  });
  // dispatch(updatePermission({id, permissions}))
}
const settingAll = () =>{
  setIsAll(isAll)
  if (permission.name === "Contact") {
    if (isAll) {
      setIsView(true)
      setIsEdit(true)
      setIsCreate(true)
      setIsDelete(true)
      setIsContacts(true)
      setIsTeam(true)
      setIsOffice(true)
      setIsRegion(true)
      
    }
    else {
      setIsView(false)
      setIsEdit(false)
      setIsCreate(false)
      setIsDelete(false)
      setIsContacts(false)
      setIsTeam(false)
      setIsOffice(false)
      setIsRegion(false)
      
    }
  }
  else {
    if (isAll) {
      setIsView(true)
      setIsEdit(true)
      setIsCreate(true)
      setIsDelete(true)
    }
    else {
      setIsView(false)
      setIsEdit(false)
      setIsCreate(false)
      setIsDelete(false)      
    }

  }
 }
  

useEffect(() => {
  updateFunctions()
}, [isView,isEdit,isCreate,isDelete,isContacts,isTeam,isOffice,isRegion])


 
  return (
    <Fragment>
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>
          <Button
            sx={
              isView
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
            onClick ={()=> setIsView(isView)}
            size='large'
            aria-label='toggle'>
            <RectangleIcon />
          </Button>
        </TableCell>
        <TableCell>
          <Button
          
            sx={
                isEdit           
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
            onClick ={()=> setIsEdit(isEdit)}
            size='large'
            aria-label='toggle'>
            <RectangleIcon />
          </Button>
        </TableCell>
        <TableCell>
          <Button
            
            sx={
              isCreate
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
            onClick ={()=>setIsCreate(isCreate)}
            size='large'
            aria-label='toggle'>
            <RectangleIcon />
          </Button>
        </TableCell>
        <TableCell>
          <Button
           
            sx={
              isDelete
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
            onClick={()=>setIsDelete(isDelete)}
            size='large'
            aria-label='toggle'>
            <RectangleIcon />
          </Button>
        </TableCell>

        {permission.name === "Contact" ? (
          <>
            <TableCell>
              <Button
               
                sx={
                  isContacts
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
                onClick={()=>setIsContacts(isContacts)}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button
               
                sx={
                  isTeam
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
                onClick={()=>setIsTeam(isTeam)}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button
               
                sx={
                  isOffice
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
                onClick={()=> setIsOffice(isOffice)}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button
               
                sx={
                  isRegion
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
                onClick={()=>setIsRegion(isRegion)}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
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
                onClick={()=>settingAll()}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
          </>
        ) : (
          <>
            <TableCell>
              <Button
                sx={{
                  color: "#eee",
                  backgroundColor: "#eee",
                }}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button
                sx={{
                  color: "#eee",
                  backgroundColor: "#eee",
                }}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button
                sx={{
                  color: "#eee",
                  backgroundColor: "#eee",
                }}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button
                sx={{
                  color: "#eee",
                  backgroundColor: "#eee",
                }}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
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
                onClick={()=>settingAll()}
                size='large'
                aria-label='toggle'>
                <RectangleIcon />
              </Button>
            </TableCell>
          </>
        )}
      </TableRow>
    </Fragment>
  );
};

export default RoleFuncions;
