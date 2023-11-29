import { NavLink } from "react-router-dom/dist";

import { useDispatch } from "react-redux";
import { setDrawer } from "@/redux/slices/appSlice";

import { Avatar, Settings, Twitter } from "@/icons";

const HeaderMobile = () => {
  const dispatch = useDispatch();
  const handleOpenDrawer = () => dispatch(setDrawer(true));

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: "#FFFFFF",
      }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
        <li style={{ padding: "10px" }}>
          <NavLink onClick={handleOpenDrawer}>
            <Avatar size={32} />
          </NavLink>
        </li>
        <li style={{ padding: "10px" }}>
          <NavLink to="/">
            <Twitter size={25} />
          </NavLink>
        </li>
        <li style={{ padding: "10px" }}>
          <NavLink to="settings ">
            <Settings size={25} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderMobile;
