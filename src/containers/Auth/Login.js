/** @format */

import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { signIn, reset } from "../../redux/features/authSlice";

import {
	Avatar,
	Button,
	Paper,
	Grid,
	Box,
	Typography,
	TextField,
	Alert,
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import AlertMassage from "../../components/Alerts/Alerts";
import { useSelector, useDispatch } from "react-redux";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast } from "react-toastify";
import BackgroundImage from "../../asserts/login_light.png";

const Login = () => {
	const {
		user,
		isLoading,
		isError,
		isSuccess,
		isAuthenticated,
		message,
	} = useSelector((state) => state.auth);
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const { username, email, password } = formData;


	const dispatch = useDispatch();

	useEffect(() => {
		
		if (isAuthenticated) {
			return <Redirect to='/' />;
		
		}
	}, [user, isError, isSuccess, message, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			username,
			email,
			password,
		};

		dispatch(signIn(userData));
	};

	if (isLoading) {
		return (<Box mt={5}sx={{ display: 'flex'  }}>
					<CircularProgress />
				</Box>)
	}
	if (isAuthenticated) {
		return <Redirect to='/' />;
	}
	return (
		<Grid container component='main' sx={{ height: "87vh" }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={8}
				sx={{
					backgroundImage: `url(${BackgroundImage})`,
					backgroundRepeat: "no-repeat",
					backgroundColor: (t) =>
						t.palette.mode === "light"
							? t.palette.grey[50]
							: t.palette.grey[900],
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			
			
			
			<Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
						{isError ? <Alert severity="warning"> {message}</Alert>: null}
					<Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box
						component='form'
						autoComplete="off"
						Validate
						sx={{ mt: 1 }}
						onSubmit={(e) => onSubmit(e)}>
						{/* csrf_token */}
						<TextField
							margin='normal'
							required
							fullWidth
							variant='standard'
							id='username'
							label='Username'
							name='username'
							value={username}
							onChange={(e) => onChange(e)}
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							variant='standard'
							id='email'
							label='Email Address'
							name='email'
							value={email}
							onChange={(e) => onChange(e)}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							variant='standard'
							name='password'
							label='Password'
							type='password'
							value={password}
							onChange={(e) => onChange(e)}
							id='password'
							minLength='6'
							autoComplete='password'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
					</Box>
					<Grid container>
						<Grid item xs>
							<Link to='/' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to='/signup' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Login;
