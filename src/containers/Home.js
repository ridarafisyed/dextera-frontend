/** @format */

import React, { useState, useEffect, Fragment } from "react";

import { connect } from "react-redux";

import AdminDashboard from "../components/Dashboard/UserRoles/AdminDashboard";
import ClientDashboard from "../components/Dashboard/UserRoles/ClientDashboard";
import LawyerDashboard from "../components/Dashboard/UserRoles/LawyerDashboard";
import FirmDashboard from "../components/Dashboard/UserRoles/FirmDashboard";

const Dashboard = ({ user }) => {
  // checker type of user
  const [localuser, setLocalUser] = useState({
    username: "Guest",
    is_firm: false,
    is_lawyer: false,
    is_client: true,
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

  const dashboardRedirect = () => {
    switch (user.username) {
      case "admin":
        return <AdminDashboard />;
      case "firm":
        return <FirmDashboard />;
      case "lawyer":
        return <LawyerDashboard />;
      default:
        return <ClientDashboard />;
    }
  };
  return <>{dashboardRedirect()}</>;
};
const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated
  user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
