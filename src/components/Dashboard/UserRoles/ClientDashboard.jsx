/** @format */

import React, { Fragment } from "react";
import DashBoard from "../Client/DashBoard";
import InvoiceList from "../../Invoice/InvoiceList";
import LedgerActivity from "../../Ledger/LedgerActivity";
import Profile from "../../Profile/Profile";
import Templates from "../../Template/Templates";
import Tabs from "../../Tabs/Tabs";



const ClientDashboard = () => {
  return (
    <Fragment>
      <Tabs>
        <div label="Dashbaord">
          <DashBoard />
        </div>
        <div label="Invoice">
          <InvoiceList />
        </div>
        <div label="Documents">
          <Templates />
        </div>
        <div label="Activity">
          <LedgerActivity />
        </div>
        <div label="Profile">
          <Profile />
        </div>
      </Tabs>
    </Fragment>
  );
};

export default ClientDashboard;
