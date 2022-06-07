/** @format */

import React, { Fragment,  useEffect } from "react";
import axios from "axios"
import { CONFIG } from "../../api/MatterApi";
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import RectangleIcon from '@mui/icons-material/Rectangle';
import { useToggle } from "../../context/useToggle";
import { useDispatch, useSelector } from "react-redux";
import { getPermissions } from "../../redux/features/permissionSlice";


const RolePermissions = ({item}) => {
    const role  = useSelector((state)=> state.role.role)
    

  return (
    <>
        <TableCell>
            <Typography >{item.name}</Typography>
        </TableCell>
    </>
  )
}

export default RolePermissions
