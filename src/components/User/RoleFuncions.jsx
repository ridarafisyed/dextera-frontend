/** @format */

import React, { Fragment, useState, useEffect } from "react";

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
import {fetchRoleFn, updateRoleFn, reset} from "../../redux/features/roleFnSlice"

 const FunctionsItem = ({item}) => {
   return (
     <TableRow>
       <TableCell>{item.name}</TableCell>

     </TableRow>
   )
  //     return  <TableBody>
  //       {roleFn.map((item,id) => {
  //         return <TableRow key={id}>
  //           <TableCell >{item.name}</TableCell>
  //           <TableCell sx={item.is_view ? {backgroundColor:"green"}:null}>
  //             <Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}
              
  //             } size="large" aria-label="toggle">
  //               <RectangleIcon  />
  //             </Button>
  //           </TableCell>
  //           <TableCell sx={item.is_edit ? {backgroundColor:"green"}:null}>
  //             <Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}} size="large" aria-label="toggle">
  //               <RectangleIcon/>
  //             </Button>
  //           </TableCell>
  //           <TableCell sx={item.is_create ? {backgroundColor:"green"}:null}>
  //             <Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}}  size= "large"aria-label="toggle">
  //               <RectangleIcon />
  //             </Button></TableCell>
  //           <TableCell sx={item.is_delete ? {backgroundColor:"green"}:null}>
  //             <Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}} size="large" aria-label="toggle">
  //               <RectangleIcon />
  //             </Button></TableCell>
  //           <TableCell sx={item.is_contacts ? {backgroundColor:"green"}:null}>
  //             <Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}} size="large" aria-label="toggle">
  //               <RectangleIcon />
  //             </Button></TableCell>
  //           <TableCell sx={item.is_team ? {backgroundColor:"green"}:null}>
  //             <Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}} size="large" aria-label="toggle">
  //               <RectangleIcon />
  //             </Button></TableCell>
  //           <TableCell sx={item.is_office ? {backgroundColor:"green"}:null}>
  //             <Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}} size="large" aria-label="toggle">
  //               <RectangleIcon />
  //             </Button></TableCell>
  //           <TableCell sx={item.is_region ? {backgroundColor:"green"}:null}>
  //             <Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}} size="large" aria-label="toggle">
  //               <RectangleIcon />
  //             </Button>
  //           </TableCell>
  //           <TableCell><Button sx={ item.is_view ?  
  //               {color:"#4BB543", backgroundColor:"#4BB543",
  //                 "&:hover":{
  //               backgroundColor:"#4BB545", color:"#4BB545"
  //             }}:
  //             {color:"#D3D3D3", backgroundColor:"#D3D3D3",
  //                 "&:hover":{
  //               backgroundColor:"#D3D3D3", color:"#D3D3D3"
  //             }}} size="large" aria-label="toggle">
  //               <RectangleIcon />
  //             </Button></TableCell>

  //           </TableRow>;
  //       })}
  //     </TableBody>
  };



const RoleFuncions = ({role}) => {
  // const isLoading  = useSelector((state) => state.roleFns)
  // const isError  = useSelector((state) => state.roleFns) 
  // const isSuccess = useSelector((state) => state.roleFns) 
  // const message = useSelector((state) => state.roleFns)
  // const roleFn = useSelector((state) => state.roleFns)
  
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //     if (isError) {
  //       toast.error(message)
  //     }
  //     dispatch(fetchRoleFn(data))
  //   }, [roleFn, isError, isSuccess, message,  dispatch])
  
 
  return (
    <Fragment>
      {role.name}
    </Fragment>
  );
};

export default RoleFuncions;
