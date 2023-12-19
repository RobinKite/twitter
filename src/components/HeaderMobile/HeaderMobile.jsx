import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "@/redux/slices/appSlice";

import { Gear, Twitter } from "@/icons";

const HeaderMobile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleOpenDrawer = () => dispatch(setDrawer(true));

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255,255,255,0.85)",
      }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
        <li style={{ padding: "10px" }}>
          <NavLink onClick={handleOpenDrawer}>
            <Avatar
              src={user.avatarUrl}
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
              }}
            />
          </NavLink>
        </li>
        <li style={{ padding: "10px" }}>
          <NavLink to="/">
            <Twitter size={25} />
          </NavLink>
        </li>
        <li style={{ padding: "10px" }}>
          <NavLink to="settings ">
            <Gear size={25} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default HeaderMobile;
