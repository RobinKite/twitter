import { NavLink, useLocation } from "react-router-dom";
import { Twitter } from "@/icons";
import { clsx } from "clsx";
import PropTypes from "prop-types";
import { items } from "@/constants/navigation";
import styles from "./Navigation.module.scss";

const NavigationItem = ({ path, text, getIconComponent }) => {
  const { pathname } = useLocation();
  const isActive = (pathname.includes(path) && path !== "/") || path === pathname;
  const Icon = getIconComponent(isActive);

  return (
    <li>
      <NavLink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.light.secondary
              : theme.palette.dark.light_grey,
        }}
        to={path}
        className={styles.link}>
        <Icon
          sx={{
            fill: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.light.secondary
                : theme.palette.dark.light_grey,
          }}
          size={30}
        />
        <span className={clsx(styles.text, isActive && styles.activeLink)}>{text}</span>
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  getIconComponent: PropTypes.func.isRequired,
};

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={styles.logoLink}
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.common.secondary
                  : theme.palette.dark.light_grey,
            }}>
            <Twitter size={30} />
          </NavLink>
        </li>
        {items.map((item) => {
          return <NavigationItem key={item.name} {...item} />;
        })}
      </ul>
    </nav>
  );
};
