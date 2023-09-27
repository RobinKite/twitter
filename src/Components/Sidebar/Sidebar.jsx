import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from '../Sidebar/Sidebar.module.scss'
import Button from "@mui/material/Button";
const Sidebar = () => {
  return (
    <div>
      <SidebarItem />
      <Button
        variant="contained"
        className={`${styles.button}`}
        sx={{
          borderRadius: "45px",
          padding: "0px 70px",
          fontWeight: 700,
          fontSize: '20px',
        }}
      >
        Post
      </Button>
    </div>
  );
};
export default Sidebar;
