/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import ViewTasks from "./ViewTasks";
import CreateTask from "./CreateTask";

const Index = () => {
  return (
    <Fragment>
      <Tabs>
        <div label="Task">
          <ViewTasks />
        </div>
        <div label="Create Task">
          <CreateTask />
        </div>
      </Tabs>
    </Fragment>
  );
};

export default Index;
