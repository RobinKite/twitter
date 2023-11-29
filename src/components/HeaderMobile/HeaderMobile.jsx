import { NavLink } from "react-router-dom/dist";

import { useDispatch } from "react-redux";
import { setDrawer } from "@/redux/slices/appSlice";

import { TwitterIcon, Settings, Avatar } from "@/icons";

const HeaderMobile = () => {
  const dispatch = useDispatch();
  const handleOpenDrawer = () => dispatch(setDrawer(true));

  return (
    <nav
      style={{
        position: "fixed",
        left: "0px",
        right: "0px",
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
            <TwitterIcon size={25} />
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
