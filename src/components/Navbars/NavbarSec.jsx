/** @format */

import React, { Fragment, useEffect, useState } from "react";
import { signOut, reset } from "../../redux/features/authSlice";
import {Redirect, useLocation } from 'react-router-dom'


import { useDispatch, useSelector } from "react-redux";
import Chatting from "../Chat/Chat";
// styling imports
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from "@mui/material/Fade"
import Divider from "@mui/material/Divider"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";
import { SecNavbar } from "../../styles/styles";

import MessageIcon from "@mui/icons-material/Message"
import EmailRoundedIcon from "@mui/icons-material/EmailRounded"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import PersonIcon from "@mui/icons-material/Person"
import NotificationAddIcon from "@mui/icons-material/NotificationAdd"
import SettingsIcon from "@mui/icons-material/Settings"
import StarIcon from "@mui/icons-material/Star"

import Calender from "../Dashboard/Calender";

import Favorites from "../Favorite/Favorites";


import { useMediaQuery } from "react-responsive";

import { NavBarSecResponsive } from "./DrawerComp";
import { addFav } from "../../redux/features/favoriteSlice";

const NavbarSec = () => {	
	const { user } = useSelector((state) => state.auth.user);
	const favorite = useSelector((state) => state.favorite)

	// location.pathname
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const [isPath, setIsPath] = useState(null)

	const dispatch = useDispatch();
	const location = useLocation()

	const [openFav, setOpenFav] = useState(false);
	const isPathExist =()=>{
		const arr = favorite.filter((item) => item.name === location.pathname)
		if (arr > 0){
			setIsPath(true)
		}
		else{
			setIsPath(false)
		}

	}
	useEffect(()=>{
		isPathExist()
	},[])
	const handleClickOpenFav = () => {
		let name = location.pathname
		let id = favorite.length + 1
		if (isPath === false){
			dispatch(addFav({id:id, name:name, page:window.location.href }))
			setIsPath(true)
		}
		
		
		setOpenFav(true);
	};

	const handleCloseFav = () => {
		setOpenFav(false);
	};
	const [openTask, setOpenTask] = useState(false)

	const [openCal, setOpenCal] = useState(false);

	const handleClickOpenCal = () => {
		setOpenCal(true);
	};

	const handleCloseCal = () => {
		setOpenCal(false);
	};

	const [openChat, setOpenChat] = useState(false);

	const handleClickOpenChat = () => {
		setOpenChat(true);
	};

	const handleCloseChat = () => {
		setOpenChat(false);
	};

	const [localuser, setLocalUser] = useState({
		username: "Admin",
		is_firm: false,
		is_lawyer: false,
		is_client: false,
	});

	useEffect(() => {
		if (user) {
			setLocalUser({
				username: user.username,
				is_firm: user.is_firm,
				is_lawyer: user.is_lawyer,
				is_client: user.is_client,
			});
		}
	}, [user]);
	const [redirect, setRedirect] = useState(false);

	const [settingAcnchorEl, setSettingAcnchorEl] = useState(null);

	const [anchorEl, setAnchorEl] = React.useState(null);

	const [settingAcnchorEl2, setSettingAcnchorEl2] = useState(null);

	const [anchorEl2, setAnchorEl2] = React.useState(null);

	const handleLogout = () => {
		console.log("logout button just clicked");
		dispatch(signOut());
		dispatch(reset());
		setRedirect(true);
	};

	const open = Boolean(anchorEl);
	const open2 = Boolean(anchorEl);

	const userRoleChecker = () => {
		switch (user.username) {
			case "admin":
				return "Admin";
			case "firm":
				return "Firm";
			case "lawyer":
				return "Lawyer";
			default:
				return "Client";
		}
	};

	const openSetting2 = Boolean(settingAcnchorEl2);

	const handleClick2 = (event) => {
		setSettingAcnchorEl2(event.currentTarget);
	};
	const openSetting = Boolean(settingAcnchorEl);
	const handleClose2 = () => {
		setSettingAcnchorEl2(null);
	};

	const handleClick = (event) => {
		setSettingAcnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setSettingAcnchorEl(null);
	};

	return (
		<Fragment>
			<SecNavbar>
				<Toolbar>
					{isTabletOrMobile ? (
						<>
							<NavBarSecResponsive />
						</>
					) : (
						<>
							<Box component='div' sx={{ flexGrow: 1 }}>
								<IconButton
									className='nav-items'
									size='large'
									onClick={handleClickOpenChat}
									sx={{
										"fontSize": "2rem",
										"color": "#eee",
										"&:hover": {
											color: "#fff",
											backgroundColor: "#7a4ebf",
										},
									}}
									anchorOrigin={{
										vertical: "top",
										horizontal: "left",
									}}>
									<MessageIcon />
								</IconButton>
								<Dialog
									className='nav-items'
									Validate
									open={openChat}
									onClose={handleCloseChat}
									aria-labelledby='alert-dialog-title'
									aria-describedby='alert-dialog-description'
									sx={{
										position: "absolute",
										right: "20px",
										bottom: "150px",
									}}>
									<DialogTitle id='alert-dialog-title'>
										{"Chatting Application"}
									</DialogTitle>
									<DialogContent>
										<Chatting />
									</DialogContent>
									<DialogActions>
										<Button onClick={handleCloseChat}>Close</Button>
									</DialogActions>
								</Dialog>

								<IconButton
									size='large'
									className='nav-items'
									component={Link}
									sx={{
										"fontSize": "2rem",
										"color": "white",
										"&:hover": {
											color: "white",
											backgroundColor: "#7a4ebf",
										},
									}}
									to={{
										pathname:
											"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com",
									}}
									target='_blank'>
									<EmailRoundedIcon />
								</IconButton>

								<IconButton
									size='large'
									className='nav-items'
									onClick={handleClickOpenCal}
									sx={{
										"fontSize": "2rem",
										"color": "white",
										"&:hover": {
											color: "white",
											backgroundColor: "#7a4ebf",
										},
									}}>
									<CalendarTodayIcon />
								</IconButton>
								<Dialog
									Validate
									open={openCal}
									maxWidth='lg'
									fullWidth
									onClose={handleCloseCal}
									aria-labelledby='alert-dialog-title'
									aria-describedby='alert-dialog-description'
									sx={{
										position: "absolute",
										right: "20px",
										bottom: "150px",
									}}>
									<DialogTitle id='alert-dialog-title'>
										{"Calender"}
									</DialogTitle>
									<DialogContent>
										<Calender />
									</DialogContent>
									<DialogActions>
										<Button onClick={handleCloseCal}>Close</Button>
									</DialogActions>
								</Dialog>
								<IconButton
									aria-label='more'
									className='nav-items'
									id='long-button'
									aria-controls='long-menu'
									aria-expanded={openSetting2 ? "true" : undefined}
									aria-haspopup='true'
									onClick={handleClick2}
									sx={{
										"fontSize": "2rem",
										"color": "white",
										"&:hover": {
											color: "white",
											backgroundColor: "#7a4ebf",
										},
									}}>
									<CheckBoxIcon />
								</IconButton>
								<Menu
									id='fade-menu'
									MenuListProps={{
										"aria-labelledby": "fade-button",
									}}
									className='nav-items'
									anchorEl={settingAcnchorEl2}
									open={openSetting2}
									onClose={handleClose2}
									TransitionComponent={Fade}>
									<MenuItem onClick={handleClose2}>
										Task 1: This is task one
									</MenuItem>
									<MenuItem onClick={handleClose2}>
										Task 2: This is task two
									</MenuItem>
									<MenuItem onClick={handleClose2}>
										Task 3: This is task three
									</MenuItem>
									<Divider sx={{ my: 0.5 }} />
									<MenuItem onClick={handleClose2}>
										Task 4: This is task four
									</MenuItem>
								</Menu>
								<IconButton
									aria-label='more'
									id='long-button'
									aria-controls='long-menu'
									className='nav-items'
									aria-expanded={openSetting2 ? "true" : undefined}
									aria-haspopup='true'
									onClick={()=>handleClickOpenFav()}
									sx={
										isPath ? {
										"fontSize": "2rem",
										"color": "orange",
										"&:hover": {
											color: "orange",
											backgroundColor: "#7a4ebf",
										},
									}: {
										"fontSize": "2rem",
										
										"color": "white",
										"&:hover": {
											color: "white",
											backgroundColor: "#7a4ebf",
										},
									}}>
									<StarIcon />
								</IconButton>
								
								<Dialog
									open={openFav}
									onClose={handleCloseFav}
									aria-labelledby='alert-dialog-title'
									aria-describedby='alert-dialog-description'>
									<DialogTitle id='alert-dialog-title'>
										{"Favorites"}
									</DialogTitle>
									<DialogContent>
										<Favorites />
									</DialogContent>
									<DialogActions>
										<Button onClick={handleCloseFav} autoFocus>
											Close
										</Button>
									</DialogActions>
								</Dialog>
							</Box>
							<NotificationAddIcon mr={2} />
							<Typography component='h5' variant='h6' ml={2} mr={2}>
								|
							</Typography>

							<Button
								color='inherit'
								aria-controls='basic-menu'
								aria-haspopup='true'
								className='nav-items'
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}>
								<PersonIcon /> {user.username} - ({user.username} )
							</Button>
							<Button
								color='inherit'
								className='nav-items'
								onClick={handleLogout}>
								Logout
							</Button>
							<Menu
								id='basic-menu'
								anchorEl={anchorEl}
								className='nav-items'
								open={open}
								onClose={handleClose}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}>
								<MenuItem component={Link} to='/profile'>
									Profile
								</MenuItem>
								{/* <MenuItem component={Link} to=''>My account</MenuItem> */}
							</Menu>
							<IconButton
								aria-label='more'
								id='long-button'
								aria-controls='long-menu'
								aria-expanded={openSetting ? "true" : undefined}
								aria-haspopup='true'
								onClick={handleClick}
								sx={{
									color: "white",
								}}>
								<SettingsIcon />
							</IconButton>
							<Menu
								id='fade-menu'
								MenuListProps={{
									"aria-labelledby": "fade-button",
								}}
								anchorEl={settingAcnchorEl}
								open={openSetting}
								onClose={handleClose}
								TransitionComponent={Fade}>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>Account</MenuItem>
								<MenuItem onClick={handleClose}>Setting</MenuItem>
								<Divider sx={{ my: 0.5 }} />
								<MenuItem onClick={handleLogout}>Logout</MenuItem>
							</Menu>
						</>
					)}
				</Toolbar>
			</SecNavbar>

			{redirect ? <Redirect to='/' /> : <Fragment></Fragment>}
		</Fragment>
	);
};

export default NavbarSec;
