import { Drawer } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "@/redux/slices/appSlice";
import { NavLink, useLocation } from "react-router-dom";
import { headerDrawerItems } from "@/constants/navigation";
import PropTypes from "prop-types";

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
  const open = useSelector((state) => state.app.isDrawerActive);
  const onClose = () => dispatch(setDrawer(false));

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
    </Drawer>
  );
};

export default HeaderDrawer;
