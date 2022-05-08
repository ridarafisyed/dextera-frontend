/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";

import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import Layout from "./hocs/Layout";

import PrivateRoutes from "./utils/PrivateRoute";

import { UserProvider } from "./context/User";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./hocs/Theme";

import Home from "./containers/Home";

// Authentication links
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";

import Profile from "./components/Profile/Profile";
import Company from "./components/Profile/Company";

import Matter from "./components/Matter";

import Matters from "./containers/Matters/Matters";
import MatterDetail from "./components/Matter/MatterDetail";
import NewMatter from "./components/Matter/NewMatter";

import Invoice from "./components/Invoice";

import CreateInvoice from "./components/Invoice/CreateInvoice";

import Payment from "./components/Invoice/Payment";
import ManageCategory from "./components/Category/ManageCategory";

import User from "./components/User";

import Time from "./components/Ledger/Time";
import TimeList from "./components/Ledger/TimeList";

import Ledger from "./components/Ledger";

import LedgerTImeList from "./components/Ledger/LedgerTImeList";
import LedgerActivity from "./components/Ledger/LedgerActivity";

import Tasks from "./components/Tasks";
import CreateTask from "./components/Tasks/CreateTask";
import ViewTasks from "./components/Tasks/ViewTasks";
import LedgerDoc from "./components/Ledger/LedgerDoc";

import Employee from "./components/Employee";
import Templates from "./components/Template/Templates";

import Contact from "./components/Contact/Contact";
import UserRole from "./components/User/UserRole";
import ManageUserGroup from "./components/User/ManageUserGroup";

const App = () => {
  const alertOptions = {
    timeout: 3000,
    position: "top center",
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
              <Router>
                <Layout>
                  <Switch>
                    {/* loging regierter routes */}
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />

                    {/* private route after login  */}

                    <PrivateRoutes exact path="/" component={Home} />
                    <PrivateRoutes path="/profile" component={Profile} />
                    <PrivateRoutes path="/company-detail" component={Company} />

                    <PrivateRoutes
                      path="/matter-dashboard"
                      component={Matter}
                    />
                    <PrivateRoutes path="/matters" component={Matters} />
                    <PrivateRoutes
                      path="/matter-detail"
                      component={MatterDetail}
                    />
                    <PrivateRoutes
                      path="/create-matter"
                      component={NewMatter}
                    />

                    <PrivateRoutes path="/invoices" component={Invoice} />
                    <PrivateRoutes
                      path="/create-invoice" 
                      component={CreateInvoice}
                    />
                    <PrivateRoutes path="/recive-invoice" component={Payment} />

                    {/* <PrivateRoutes path="/create-user" component={CreateUser} /> */}
                    <PrivateRoutes path="/users" component={User} />
                    <PrivateRoutes path="/user-roles" component={UserRole} />
                    <PrivateRoutes
                      path="/user-groups"
                      component={ManageUserGroup}
                    />

                    <PrivateRoutes
                      path="/manage-categories"
                      component={ManageCategory}
                    />
                    <PrivateRoutes
                      path="/ledger-documents"
                      component={LedgerDoc}
                    />
                    <PrivateRoutes path="/time" component={Time} />
                    <PrivateRoutes path="/time-list" component={TimeList} />
                    <PrivateRoutes path="/ledgers" component={Ledger} />
                    <PrivateRoutes
                      path="/ledger-list"
                      component={LedgerTImeList}
                    />
                    <PrivateRoutes
                      path="/activity-list"
                      component={LedgerActivity}
                    />

                    <PrivateRoutes path="/tasks" component={Tasks} />
                    <PrivateRoutes path="/create-task" component={CreateTask} />
                    <PrivateRoutes path="/view-tasks" component={ViewTasks} />

                    <PrivateRoutes
                      path="/employee-search"
                      component={Employee}
                    />

                    <PrivateRoutes path="/templates" component={Templates} />
                    <PrivateRoutes path="/contact" component={Contact} />
                  </Switch>
                </Layout>
              </Router>
            </AlertProvider>
          </ThemeProvider>
        </UserProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
