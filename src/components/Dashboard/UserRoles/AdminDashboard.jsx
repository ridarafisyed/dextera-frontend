/** @format */

import React, { Fragment, useEffect, useState } from "react";
import DashBoard from "../Admin/DashBoard";

import {
  Box,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import TabPanel from "@mui/lab/TabPanel";
import PropTypes from "prop-types";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import { MoreVert, Close } from "@mui/icons-material";

// components of tabs
import Invoice from "../../Invoice";
import Matter from "../../Matter";
import Ledger from "../../Ledger";
import Favorite from "../../Favorite/Favorites";
import Category from "../../Category/ManageCategory";
import Contact from "../../Contact/Contact";
import Profile from "../../Profile/Profile";
import Tasks from "../../Tasks";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import {
  addNewTab,
  removeNewTab,
  removeLastNewTab,
} from "../../../redux/features/searchTabSlice";
import { addTab, removeTab } from "../../../redux/features/tabSlice";

const data = [
  { name: "invoice", content: <Invoice /> },
  { name: "matter", content: <Matter /> },
  { name: "ledger", content: <Ledger /> },
  { name: "favorite", content: <Favorite /> },
  { name: "category", content: <Category /> },
  { name: "contact", content: <Contact /> },
  { name: "profile", content: <Profile /> },
  { name: "tasks", content: <Tasks /> },
];
const component = {
  invoice: <Invoice />,
  matter: <Matter />,
  ledger: <Ledger />,
  favorite: <Favorite />,
  category: <Category />,
  contact: <Contact />,
  profile: <Profile />,
  tasks: <Tasks />,
};

const AdminDashboard = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabList = useSelector((state) => state.tabs);
  const newTabList = useSelector((state) => state.newTabs);
  const dispatch = useDispatch();

  // search tab will match the text and display tab
  const [wordEntered, setWordEntered] = useState("");

  const searchItem = () => {
    let selectedItem = data.filter((value) => {
      if (value.name === wordEntered) {
        return true;
      }
    });
  };
  const handleChangeSearch = (e) => {
    setWordEntered(e.target.value);
    let id = tabList.length + 1;
    dispatch(
      addTab({
        id: id,
        tab: e.target.value,
      })
    );
    dispatch(removeLastNewTab());
    setValue(id);
    searchItem();
  };
  const handleRemoveTab = (tab) => {
    dispatch(removeTab(tab));
    setValue(0);
  };
  const handleRemoveNewTab = (tab) => {
    dispatch(removeNewTab(tab));
    setValue(0);
  };

  const addSearchTab = () => {
    let id = newTabList.length + 10;
    setTimeout(
      dispatch(
        addNewTab({
          id: id,
          name: "newtab",
        })
      ),
      5000
    );

    setValue(id);
  };
  const displayNewTabsName = () => {
    if (newTabList) {
      return newTabList.map((tab) => (
        <Tab
          key={tab.id}
          value={tab.id}
          label={
            <span>
              newtab
              <IconButton
                component="div"
                onClick={() => handleRemoveNewTab(tab)}
              >
                <CloseIcon />
              </IconButton>
            </span>
          }
        />
      ));
    } else return null;
  };
  const displayTabsName = () => {
    if (tabList) {
      return tabList.map((tab) => (
        <Tab
          key={tab.id}
          value={tab.id}
          label={
            <span>
              {" "}
              {tab.name}
              <IconButton component="div" onClick={() => handleRemoveTab(tab)}>
                <CloseIcon />
              </IconButton>
            </span>
          }
        />
      ));
    } else return null;
  };
  const searchTab = () => {
    return (
      <Box
        noValidate
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "50%",
          borderRadius: "5rem",
          backgroundColor: "#dfdfdf",
        }}
      >
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          label="Search...."
          onChange={handleChangeSearch}
          sx={{
            " & .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          {data.map((item, index) => (
            <MenuItem key={index} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>

        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          {wordEntered.length === 0 ? <SearchIcon /> : <CloseIcon />}
        </IconButton>
      </Box>
    );
  };
  const displaySearchTabs = () => {
    if (newTabList) {
      return newTabList.map((tab) => (
        <TabPanel value={tab.id}>{searchTab()}</TabPanel>
      ));
    } else return null;
  };
  const displayTabs = () => {
    if (tabList) {
      return tabList.map((tab) => (
        <TabPanel value={tab.id}>{component[tab.name]}</TabPanel>
      ));
    } else return null;
  };

  const renderTabs = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobilearia-label="lab API tabs example"
            >
              <Tab
                icon={<MoreVert />}
                iconPosition="start"
                label="Dashboard"
                value={0}
              />

              {displayTabsName()}
              {displayNewTabsName()}

              <Tab
                icon={<MoreVert />}
                iconPosition="start"
                label={
                  <IconButton
                    component="div"
                    onClick={() => dispatch(addNewTab())}
                  >
                    <AddIcon />
                  </IconButton>
                }
                onClick={addSearchTab}
                value={100}
              />
            </Tabs>
          </Box>
          <TabPanel value={0}>
            <DashBoard />
          </TabPanel>
          {displayTabs()}
          {displaySearchTabs()}
          <TabPanel value={100}></TabPanel>
        </TabContext>
      </Box>
    );
  };
  useEffect(() => {
    renderTabs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Fragment>{renderTabs()}</Fragment>;
};

export default AdminDashboard;
