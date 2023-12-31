import { NavLink, useLocation } from "react-router-dom";
import { Twitter } from "@/icons";
import { clsx } from "clsx";
import PropTypes from "prop-types";
import { items } from "@/constants/navigation";
import styles from "./Navigation.module.scss";
import { Stack, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import NotificationAlert from "../NotificationAlert/NotificationAlert";
import { Themes } from "@/themes/theme";

const NavigationItem = ({ path, text, getIconComponent, notificationsCount }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isActive = (pathname.includes(path) && path !== "/") || path === pathname;
  const Icon = getIconComponent(isActive);
  return (
    <li>
      <NavLink to={path} className={`${styles.link} ${styles[theme.palette.mode]}`}>
        <Stack sx={{ position: "relative" }}>
          <Icon
            style={{
              fill:
                theme.palette.mode === Themes.LIGHT
                  ? theme.palette.light.secondary
                  : theme.palette.dark.light_grey,
            }}
            size={26.25}
          />
          {notificationsCount && <NotificationAlert />}
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
  notificationsCount: PropTypes.bool,
};

export const Navigation = () => {
  const theme = useTheme();
  const notificationsCount = useSelector((state) => state.user.notificationsCount);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={`${styles.logoLink} ${styles[theme.palette.mode]}`}>
            <Twitter size={26.25} />
          </NavLink>
        </li>
        {items.map((item) => {
          return (
            <NavigationItem
              key={item.name}
              {...item}
              notificationsCount={item.name === "notifications" && notificationsCount > 0}
            />
          );
        })}
      </ul>
    </nav>
  );
};
