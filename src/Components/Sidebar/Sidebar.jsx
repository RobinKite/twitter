import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem";

import Button from "@mui/material/Button";
const Sidebar = () => {
  return (
    <div>
      <SidebarItem />
      <Button variant="contained" sx={{
        borderRadius: "20px",
        padding: '10px 70px',
        color: 'rgb(255, 255, 255)',
        fontWeight: '700',
             fontSize: '25px',

      }}>Post</Button>
    </div>
  );
};
export default Sidebar;
