/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import CreateUser from "./CreateUser";
import ManageUser from "./ManageUser";
import User from "./User"
import ManageUserGroup from "./ManageUserGroup";
// import UserRole from "./UserRole";
import ManageRole from "./ManageRole"

const Index = () => {
  return (
    <Fragment>
      <Tabs>
        <div label="Manage Users">
          <User />
        </div>

        <div label="User Group">
          <ManageUserGroup />
        </div>
        <div label="User Role">
          <ManageRole />
        </div>
      </Tabs>
    </Fragment>
  );
};

export default Index;
