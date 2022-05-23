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
import ClearIcon from "@mui/icons-material/Clear";
import { ActionAlerts } from "../../utils/ActionAlerts";

import { CONFIG } from "../../api/MatterApi";
import { useSelector, useDispatch } from "react-redux";
import {
	getPermissions,
	reset,
	updateIsView,
	updateIsEdit,
	updateIsCreate,
	updateIsDelete,
	updateIsContacts,
	updateIsTeam,
	updateIsOffice,
	updateIsRegion,
	updateIsAll,
} from "../../redux/features/permissionSlice";
import { useToggle } from "../../context/useToggle";

const ManageRole = () => {
	const dispatch = useDispatch();
	const [allValue, setAllValue] = useToggle(false);

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
	const onClickChange = (id, value, position, permission) => {
		const buttons = [
			permission.is_view,
			permission.is_edit,
			permission.is_create,
			permission.is_delete,
			permission.is_contacts,
			permission.is_team,
			permission.is_office,
			permission.is_region,
		];
		buttons[position] = value === 1 ? true : false;
		const is_view = buttons[0];
		const is_edit = buttons[1];
		const is_create = buttons[2];
		const is_delete = buttons[3];
		const is_contacts = buttons[4];
		const is_team = buttons[5];
		const is_office = buttons[6];
		const is_region = buttons[7];
		const body = JSON.stringify({
			is_view,
			is_edit,
			is_create,
			is_delete,
			is_contacts,
			is_team,
			is_office,
			is_region,
		});
		axios
			.put(
				`${process.env.REACT_APP_API_URL}/user/auth/permissions/${id}/`,
				body,
				CONFIG,
			)
			.then((res) => {
				dispatch(getPermissions(id));
			})
			.catch((err) => {});
	};
	const clickAllValue = (id) => {
		setAllValue(allValue);
		dispatch(
			updateIsAll({
				id: id,
				value: allValue,
			}),
		);
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
										<TableRow>
											<TableCell>{permission.name}</TableCell>
											<TableCell>
												<Button
													onClick={(e) => {
														dispatch(updateIsView(permission.id));
													}}
													sx={
														permission.is_view
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
											<TableCell>
												<Button
													onClick={(e) => {
														dispatch(updateIsEdit(permission.id));
													}}
													sx={
														permission.is_edit
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
											<TableCell>
												<Button
													onClick={(e) => {
														dispatch(updateIsCreate(permission.id));
													}}
													sx={
														permission.is_create
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
											<TableCell>
												<Button
													onClick={(e) => {
														dispatch(updateIsDelete(permission.id));
													}}
													sx={
														permission.is_delete
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

											{permission.name === "Contact" ? (
												<>
													<TableCell>
														<Button
															onClick={(e) => {
																dispatch(updateIsContacts(permission.id));
															}}
															sx={
																permission.is_contacts
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
													<TableCell>
														<Button
															onClick={(e) => {
																dispatch(updateIsTeam(permission.id));
															}}
															sx={
																permission.is_team
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
													<TableCell>
														<Button
															onClick={(e) => {
																dispatch(updateIsOffice(permission.id));
															}}
															sx={
																permission.is_office
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
													<TableCell>
														<Button
															onClick={(e) => {
																dispatch(updateIsRegion(permission.id));
															}}
															sx={
																permission.is_region
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
													<TableCell>
														<Button
															onClick={() => clickAllValue(permission.id)}
															sx={
																allValue
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
															sx={{
																color: "#eee",
																backgroundColor: "#eee",
															}}
															size='large'
															aria-label='toggle'>
															<RectangleIcon />
														</Button>
													</TableCell>
												</>
											)}
										</TableRow>
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
