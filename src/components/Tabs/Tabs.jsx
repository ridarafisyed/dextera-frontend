/** @format */

import React, { Fragment, useState } from "react";
import { MoreVert, Close } from "@mui/icons-material";
import { Button, Stack, IconButton } from "@mui/material";
import styles from "./tabs.module.css";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };
  return (
    <Fragment>
      <Stack direction="row" spacing={1}>
        <ul className={styles.tabs}>
          {children.map((tab) => (
            <li
              className={tab.props.label === activeTab ? styles.current : ""}
              key={tab.props.label}
            >
              <Button
                variant="text"
                size="small"
                startIcon={<MoreVert />}
                onClick={(e) => handleClick(e, tab.props.label)}
              >
                {tab.props.label}
              </Button>
            </li>
          ))}
        </ul>
      </Stack>

      {children.map((one) =>
        one.props.label === activeTab ? (
          <div className={styles.content} key={one.props.label}>
            {one.props.children}
          </div>
        ) : (
          ""
        ),
      )}
    </Fragment>
  );
};

export default Tabs;
