/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import Search from "./Search";
import Result from "./Result";
import Saved from "./Saved";
const index = () => {
  return (
    <Fragment>
      <Tabs>
        <div label="Search">
          <Search />
        </div>
        <div label="Result">
          <Result />
        </div>
        <div label="Saved">
          <Saved />
        </div>
      </Tabs>
    </Fragment>
  );
};

export default index;
