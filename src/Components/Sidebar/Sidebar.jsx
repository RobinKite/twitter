import React from "react";
import classNames from "classnames";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";

import Button from "@mui/material/Button";
const Sidebar = () => {
  return (
    <div className={classNames(styles.sidebar)}>
      <SidebarItem />
      <Button
        variant="contained"
        sx={{
          borderRadius: "20px",
          padding: "10px 70px",
          color: "rgb(255, 255, 255)",
          fontWeight: "700",
          fontSize: "25px",
        }}
      >
        Post
      </Button>
    </div>
  );
};
export default Sidebar;
