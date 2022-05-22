import React from 'react'
import { useDispatch } from 'react-redux'
import {
   Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,TableBody,
  Button,
  List,
  Grid,
  Box,
  Typography,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
} from "@mui/material";
import RectangleIcon from '@mui/icons-material/Rectangle';
import { deletePermission } from '../../redux/features/permissionSlice'

const RolePermissions = ({ permission }) => {
    const dispatch = useDispatch()
    console.log(permission)
  return (
      <TableRow><TableCell>Role is Seleted</TableCell></TableRow>
    //  <TableRow>
    //        <TableCell >{permission.name}</TableCell>
    //         <TableCell sx={permission.is_view ? {backgroundColor:"green"}:null}>
    //           <Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}
              
    //           } size="large" aria-label="toggle">
    //             <RectangleIcon  />
    //           </Button>
    //         </TableCell>
    //         <TableCell sx={permission.is_edit ? {backgroundColor:"green"}:null}>
    //           <Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}} size="large" aria-label="toggle">
    //             <RectangleIcon/>
    //           </Button>
    //         </TableCell>
    //         <TableCell sx={permission.is_create ? {backgroundColor:"green"}:null}>
    //           <Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}}  size= "large"aria-label="toggle">
    //             <RectangleIcon />
    //           </Button></TableCell>
    //         <TableCell sx={permission.is_delete ? {backgroundColor:"green"}:null}>
    //           <Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}} size="large" aria-label="toggle">
    //             <RectangleIcon />
    //           </Button></TableCell>
    //         <TableCell sx={permission.is_contacts ? {backgroundColor:"green"}:null}>
    //           <Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}} size="large" aria-label="toggle">
    //             <RectangleIcon />
    //           </Button></TableCell>
    //         <TableCell sx={permission.is_team ? {backgroundColor:"green"}:null}>
    //           <Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}} size="large" aria-label="toggle">
    //             <RectangleIcon />
    //           </Button></TableCell>
    //         <TableCell sx={permission.is_office ? {backgroundColor:"green"}:null}>
    //           <Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}} size="large" aria-label="toggle">
    //             <RectangleIcon />
    //           </Button></TableCell>
    //         <TableCell sx={permission.is_region ? {backgroundColor:"green"}:null}>
    //           <Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}} size="large" aria-label="toggle">
    //             <RectangleIcon />
    //           </Button>
    //         </TableCell>
    //         <TableCell><Button sx={ permission.is_view ?  
    //             {color:"#4BB543", backgroundColor:"#4BB543",
    //               "&:hover":{
    //             backgroundColor:"#4BB545", color:"#4BB545"
    //           }}:
    //           {color:"#D3D3D3", backgroundColor:"#D3D3D3",
    //               "&:hover":{
    //             backgroundColor:"#D3D3D3", color:"#D3D3D3"
    //           }}} size="large" aria-label="toggle">
    //             <RectangleIcon />
    //           </Button></TableCell>

    //         </TableRow> )
  )
}

export default RolePermissions
