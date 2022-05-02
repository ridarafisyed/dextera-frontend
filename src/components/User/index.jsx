/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import CreateUser from "./CreateUser";
import ManageUser from "./ManageUser";
import ManageUserGroup from "./ManageUserGroup";
import UserRole from "./UserRole";

const Index = () => {
  return (
    <Fragment>
      <Tabs>
        <div label="Manage Users">
          <ManageUser />
        </div>

        <div label="User Group">
          <ManageUserGroup />
        </div>
        <div label="User Role">
          <UserRole />
        </div>
      </Tabs>
    </Fragment>
  );
};

export default Index;
