import { NavLink } from "react-router-dom/dist";

import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "@/redux/slices/appSlice";

import { Avatar, Gear, Twitter } from "@/icons";
import { theme } from "@/themes/theme";

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
        // backgroundColor: "#FFFFFF",
      }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
        <li style={{ padding: "10px" }}>
          <NavLink onClick={handleOpenDrawer}>
            {user ? (
              <img
                src={user.avatarUrl}
                alt="User Avatar"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Avatar size={32} />
            )}
          </NavLink>
        </li>
        <li
          style={{
            padding: "10px",
            fill: theme.palette[theme.palette.mode].secondary,
          }}>
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
