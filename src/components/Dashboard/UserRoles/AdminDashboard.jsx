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
import CloseIcon from "@material-ui/icons/Close";
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
  const tabList = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
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
    dispatch(
      addTab({
        id: tabList.length + 1,
        tab: e.target.value,
      }),
    );
    searchItem();
  };
  const displayTabsName = () => {
    if (tabList) {
      return tabList.map((tab) => (
        <Tab
          icon={<Close />}
          iconPosition="end"
          label={tab.name}
          value={tab.id}
        />
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
  const searchTab = () => {
    return (
      <Box
        noValidate
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: "5rem",
          backgroundColor: "#dfdfdf",
        }}
      >
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={wordEntered}
          label="Search...."
          onChange={handleChangeSearch}
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

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTabs = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                icon={<MoreVert />}
                iconPosition="start"
                label="Dashboard"
                value={0}
              />

              {displayTabsName()}
              <Tab
                icon={<MoreVert />}
                iconPosition="start"
                label="+"
                value={10}
              />
            </TabList>
          </Box>
          <TabPanel value={0}>
            <DashBoard />
          </TabPanel>
          {displayTabs()}
          <TabPanel value={10}>{searchTab()}</TabPanel>
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
