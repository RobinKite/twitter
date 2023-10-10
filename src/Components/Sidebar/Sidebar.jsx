import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import Button from '../Button/Button'
// import Button from "@mui/material/Button";
const Sidebar = () => {
  return (
    <div>
      <SidebarItem />
      <Button
        variant="contained"
        sx={{
          color: "#ffffff",
          boxShadow:"none",
          backgroundColor:' #1d9bf0',
          borderRadius: "45px",
          height:'52px',
          fontWeight: 700,
          minWidth:'233px',
          fontSize: "17px",
          margin: 0,
          "&:hover": {
            boxShadow:"none",
            backgroundColor: "#1a8cd8",
          },
        }}
      >
        Post
      </Button>
    </div>
  );
};
export default Sidebar;
