/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import LedgerActivity from "./LedgerActivity";
import LegderDashbard from "./LedgerDashbard";
import LedgerDoc from "./LedgerDoc";
import LedgerTImeList from "./LedgerTImeList";
import Time from "./Time";

const Index = () => {
  return (
    <Fragment>
      <Tabs>
        <div label="Ledger">
          <LegderDashbard />
        </div>
        <div label="Activity">
          <LedgerActivity />
        </div>
        <div label="Documents">
          <LedgerDoc />
        </div>
        <div label="Time">
          <Time />
        </div>
      </Tabs>
    </Fragment>
  );
};

export default Index;
