import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "../SidebarItem/SidebarItem";
import Button from "../Button/Button";

import { Select, MenuItem } from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import { ReactComponent as MoreIcon } from "../../assets/svg/more.svg";

// import { ReactComponent as MoreIconFilled } from "../../assets/svg/more-filled.svg";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleOpenMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setIsButtonActive(true); // Activate the button
  // };

  // const handleCloseMenu = () => {
  //   setAnchorEl(null);
  //   setIsButtonActive(false); // Activate the button
  // };

  const [isButtonActive, setIsButtonActive] = useState(false);

  return (
    <div>
      <SidebarItem />

      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<MoreIcon />}
        sx={{
          border: 0,
          margin: 0,
          fontSize: "20px",
          height: "50px",
          display: "flex",
          gap: "15px",
          minWidth: "135px",
          position: "relative",
          fontWeight: isButtonActive ? "bold" : "normal",
          "&:hover": {
            backgroundColor: "rgb(221, 217, 217)",
          },
        }}
      >
        More
      </Button>
      <Select
        sx={{
          position: "relative",
          "& .MuiSelect-select": {
            display: "none",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "bottom",
            horizontal: "left", // Match the end of the menu with the end of the button
          },
          PaperProps: {
            sx: {
              position: "absolute",
              borderRadius: 5,
              "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                paddingTop: 0,
                paddingBottom: 0,
                backgroundColor: "#ffffff",
              },
              "& .MuiMenuItem-root": {
                padding: 2,
                fontSize: 20,
                fontWeight: 700,
                minWidth: 318,

                gap: 3,
                "&:hover": {
                  backgroundColor: "#eff3f4",
                },
              },
            },
          },
        }}
      >
        <MenuItem component={Link} to="/bookmarks">
          <BookmarkBorderIcon />
          Bookmarks
        </MenuItem>
        <MenuItem>
          <DisplaySettingsIcon />
          Display
        </MenuItem>
      </Select>

      <Button
        variant="contained"
        sx={{
          color: "#ffffff",
          boxShadow: "none",
          backgroundColor: " #1d9bf0",
          borderRadius: "45px",
          height: "52px",
          fontWeight: 700,
          minWidth: "233px",
          fontSize: "17px",
          margin: 0,
          "&:hover": {
            boxShadow: "none",
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
