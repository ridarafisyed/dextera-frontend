import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoutes = ({ isAuthenticated, children, ...rest}) => {
    

    return (
        <Route {...rest}>
            {isAuthenticated ? children: <Redirect to="/login"/>}
        </Route>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoutes);