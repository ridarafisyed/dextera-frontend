/** @format */

import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";
import {
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableBody,
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
import RectangleIcon from "@mui/icons-material/Rectangle";
import RoleFunctions from "./RoleFuncions";
import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";

import { CONFIG } from "../../api/MatterApi";
import { useSelector, useDispatch } from "react-redux";
import {
	getPermissions,
	reset,

} from "../../redux/features/permissionSlice";
import { useToggle } from "../../context/useToggle";

const ManageRole = () => {
	const dispatch = useDispatch();


	const { user } = useSelector((state) => state.auth);
	const { updateData, setUpdateData } = useState([]);
	const { permissions, isLoading, isError, message } = useSelector(
		(state) => state.permissions,
	);

	const [roles, setRoles] = useState([]);
	const [role, setRole] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [status, setStatus] = useState("");

	const [formData, setFormData] = useState({
		name: "",
	});

	const { name } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const FetchData = () => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/user/auth/roles/`, CONFIG)
			.then((res) => {
				console.log(res.data);
				setLoading(false);
				setStatus(res.statusText);
				setRoles(res.data);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setError(err.message);
			});
	};
	useEffect(() => {
		FetchData();
	}, []);
	const handleDelete = (id) => {
		axios
			.delete(`${process.env.REACT_APP_API_URL}/user/auth/roles/${id}/`, CONFIG)
			.then((res) => {
				FetchData();
				return (
					<ActionAlerts
						value={{ status: res.statusText, message: "Success" }}
					/>
				);
			});
	};
	const selectRole = (id) => {
		setRole(id);
		dispatch(getPermissions(id));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const body = JSON.stringify({ name });
		axios
			.post(`${process.env.REACT_APP_API_URL}/user/auth/roles/`, body, CONFIG)
			.then((res) => {
				FetchData();
				return (
					<ActionAlerts
						value={{ status: res.statusText, message: "Success" }}
					/>
				);
			})
			.catch((err) => {
				FetchData();
				return (
					<ActionAlerts
						value={{ status: err.statusText, message: "Success" }}
					/>
				);
			});
	};
	return (
		<Fragment>
			<Grid container spacing={2}>
				<Grid item lg={12}></Grid>
				<Grid item lg={2} component={Paper} elevation={5}>
					<Box p={2}>
						<Button
							variant='contained'
							onClick={handleClickOpen}
							fullWidth
							sx={{
								borderRadius: "0.5rem",
							}}>
							+ New Role
						</Button>
						<Dialog
							component='form'
							Validate
							onSubmit={(e) => handleSubmit(e)}
							open={open}
							onClose={handleClose}
							aria-labelledby='alert-dialog-title'
							aria-describedby='alert-dialog-description'>
							<DialogTitle id='alert-dialog-title'>
								{"Add New Role"}
							</DialogTitle>
							<DialogContent>
								<TextField
									required
									fullWidth
									size='small'
									margin='normal'
									variant='outlined'
									name='name'
									label='Role Name'
									type='text'
									value={name}
									onChange={(e) => onChange(e)}
									id='name'
									autoComplete='name'
								/>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose}>Close</Button>
								<Button type='submit' autoFocus>
									Add
								</Button>
							</DialogActions>
						</Dialog>
						{!loading ? (
							roles.map((data, index) => (
								<Box key={index}>
									<List>
										<ListItem disablePadding>
											<span>
												<Button
													sx={
														data.id === role
															? { backgroundColor: "#796ef0", color: "white" }
															: null
													}
													onClick={() => selectRole(data.id)}>
													{data.name}
												</Button>
												<IconButton
													variant='contained'
													value={data.id}
													size='small'
													onClick={() => handleDelete(data.id)}
													sx={{
														borderRadius: "0.5rem",
														float: "right",
													}}>
													<ClearIcon />
												</IconButton>
											</span>
										</ListItem>
									</List>
								</Box>
							))
						) : (
							<Typography>Loading ...</Typography>
						)}
					</Box>
				</Grid>
				<Grid item lg={10}>
					<TableContainer sx={{ overflowX: "auto" }}>
						<Table
							size='small'
							sx={{
								"fontSize": "1rem",
								"&MuiTableCell": {
									border: "solid 2px black",
								},
							}}>
							<TableHead>
								<TableRow bgColor='#796ef0'>
									<TableCell>
										<Typography color='white'>Function</Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>View </Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>Edit</Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>Create</Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>Delete</Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>Contacts</Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>Team</Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>Office</Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>Region</Typography>
									</TableCell>
									<TableCell>
										<Typography color='white'>All</Typography>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{role !== null && permissions.permissions.length > 0 ? (
									permissions.permissions.map((permission, index) => (
										<RoleFunctions key={permission.id} permission={permission}/>
									))
								) : (
									<>please selete a role</>
								)}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default ManageRole;
