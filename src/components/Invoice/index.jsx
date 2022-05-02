/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";
import InvoiceList from "./InvoiceList";
import Payment from "./Payment";
import CreateInvoice from "./CreateInvoice";

const Index = () => {
  return (
    <Fragment>
      <InvoiceList />
    </Fragment>
  );
};

export default Index;
