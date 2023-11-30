import { MenuItem, Select } from "@mui/material";
import { moreSelectMenuPropsSX, moreSelectSX } from "./styledSX";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Avatar, Display, Settings } from "@/icons";
import { ConfirmationDialog } from "..";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "@/redux/slices/userSlice";

const HeaderSelect = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogClick, setDialogClick] = useState(false);

  const handleLogoutClick = () => {
    setDialogClick(true);
    setDialogOpen(true);
  };
  const handleConfirmation = () => {
    setDialogOpen(false);
    setDialogClick(false);
    if (dialogClick) {
      dispatch(logoutUserAction());
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      console.log("Logged out!");
    }
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogClick(false);
  };

  return (
    <>
      <Select
        open={open}
        onClose={onClose}
        sx={moreSelectSX}
        id="basic-menu"
        MenuProps={moreSelectMenuPropsSX}>
        <MenuItem component={Link} to="/settings">
          <Settings size={22} />
          Settings
        </MenuItem>
        <MenuItem>
          <Display size={22} />
          Display
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <Avatar size={22} />
          Log out
        </MenuItem>
      </Select>
      {dialogOpen && (
        <ConfirmationDialog
          open={dialogOpen}
          title="Log out of X?"
          description="You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account."
          actionButton={{ title: "Log out", callback: handleConfirmation }}
          closeButton={{ title: "Cancel", callback: handleCloseDialog }}
        />
      )}
    </>
  );
};

export default HeaderSelect;

HeaderSelect.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
