import { Button, Drawer } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "@/redux/slices/appSlice";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { headerDrawerItems } from "@/constants/navigation";
import PropTypes from "prop-types";
import { Avatar } from "@/icons";
import { useState } from "react";
import { ConfirmationDialog } from "..";
import { logoutUserAction } from "@/redux/slices/userSlice";
import { logoutButton } from "./styledSX";
import { storage } from "@/services";

const HeaderDrawerItem = ({ path, text, getIconComponent }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  const Icon = getIconComponent(isActive);
  return (
    <li>
      <NavLink to={path} style={{ display: "flex", padding: "16px", gap: "25px" }}>
        <Icon size={25} />
        <span style={{ color: "#0F1419", fontSize: "20px", fontWeight: 700 }}>
          {text}
        </span>
      </NavLink>
    </li>
  );
};

HeaderDrawerItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  getIconComponent: PropTypes.func.isRequired,
};
const HeaderDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = useSelector((state) => state.app.isDrawerActive);
  const onClose = () => dispatch(setDrawer(false));

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
      storage.setTokens();
      navigate("/login");
    }
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogClick(false);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}>
        <NavLink>
          {headerDrawerItems.map((item) => {
            return <HeaderDrawerItem key={item.name} {...item} />;
          })}
        </NavLink>
      </ul>
      <Button onClick={handleLogoutClick} sx={logoutButton}>
        <Avatar size={25} />
        Log out
      </Button>
      {dialogOpen && (
        <ConfirmationDialog
          open={dialogOpen}
          title="Log out of X?"
          description="You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account."
          actionButton={{ title: "Log out", callback: handleConfirmation }}
          closeButton={{ title: "Cancel", callback: handleCloseDialog }}
        />
      )}
    </Drawer>
  );
};

export default HeaderDrawer;
