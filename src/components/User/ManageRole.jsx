/** @format */

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import IconButton from "@mui/material/IconButton"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import RoleFunctions from "./RoleFunctions";
import ClearIcon from "@mui/icons-material/Clear";
import CircularProgress from '@mui/material/CircularProgress';
import { ActionAlerts } from "../../utils/ActionAlerts";

import { CONFIG } from "../../api/MatterApi";
import { useSelector, useDispatch } from "react-redux";
import {getRole} from "../../redux/features/roleSlice";
import { ListItemText } from "@mui/material";


const ManageRole = () => {
	const role  = useSelector((state)=> state.role.role)
	const isLoading  = useSelector((state)=> state.role.role)
	const isSuccess = useSelector((state)=> state.role.role)
	const dispatch = useDispatch();
	

	const [roles, setRoles] = useState([]);

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
		dispatch(getRole(1))
				
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
						<Box >
									<List>
						{isLoading ? (
							roles?.map((data, index) => (
								<ListItem disablePadding key={index}
									secondaryAction={
									<IconButton
											edge="end" 
											variant='contained'
											value={data.id}
											size='small'
											onClick={() => handleDelete(data.id)}
											sx={{
												borderRadius: "0.5rem",
											
											}}>
											<ClearIcon />
										</IconButton>}>
									<ListItemText>
										<Button
											sx={data.id === role.id? { 
												backgroundColor: "#796ef0", 
												color: "white", 
												whiteSpace: "wrap",
												"&:hover": {
													color: "#796ef0",
													backgroundColor: "white",
												}, }
										: null}
											onClick={()=>dispatch(getRole(data.id))}>
											{data.name}
										</Button>
										
									
									</ListItemText>
								</ListItem>
									
							))
						) : (
						<Box mt={5} sx={{ display: 'flex' }}>
                          <CircularProgress />
                        </Box>
						)}
						</List>
					</Box>
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
								
								</TableRow>
							</TableHead>
							<TableBody>
								{isLoading? (
									isSuccess? (
										role ? (<RoleFunctions id={role.id}/>)
												:(<>please selete a role</>)
											): (<Box mt={5} sx={{ display: 'flex' }}>
										<CircularProgress />
									</Box>))
								:(<Box mt={5} sx={{ display: 'flex' }}>
										<CircularProgress />
									</Box>)
								}

							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default ManageRole;
