import { NavLink, useLocation } from "react-router-dom";
import { Twitter } from "@/icons";
import { clsx } from "clsx";
import PropTypes from "prop-types";
import { items } from "@/constants/navigation";
import styles from "./Navigation.module.scss";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import NotificationAlert from "../NotificationAlert/NotificationAlert";

const NavigationItem = ({ path, text, getIconComponent, alert }) => {
  const { pathname } = useLocation();
  const isActive = (pathname.includes(path) && path !== "/") || path === pathname;
  const Icon = getIconComponent(isActive);
  // const notifications = useSelector((state) => state.user.unreadNotificationsCount);
  // const unreadCount = notifications.unreadNotificationsCount || 0;
  return (
    <li>
      <NavLink to={path} className={styles.link}>
        <Stack sx={{ position: "relative" }}>
          <Icon size={26.25} />
          {alert && <NotificationAlert />}
        </Stack>
        <span className={clsx(styles.text, isActive && styles.activeLink)}>{text}</span>
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  getIconComponent: PropTypes.func.isRequired,
  alert: PropTypes.bool,
};

export const Navigation = () => {
  const notifications = useSelector((state) => state.user.notifications);
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={styles.logoLink}>
            <Twitter size={30} />
          </NavLink>
        </li>
        {items.map((item) => {
          return (
            <NavigationItem
              key={item.name}
              {...item}
              alert={item.name === "notifications" && notifications.length > 0}
            />
          );
        })}
      </ul>
    </nav>
  );
};
