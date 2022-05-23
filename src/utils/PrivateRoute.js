/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children, ...rest }) => {
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
		<Route {...rest}>
			{isAuthenticated ? children : <Redirect to='/login' />}
		</Route>
	);
};

export default PrivateRoutes;
