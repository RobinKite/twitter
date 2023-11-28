import { NavLink, useLocation } from "react-router-dom";
import { Twitter } from "@/icons";
import { clsx } from "clsx";
import PropTypes from "prop-types";
import { items } from "@/constants/navigation";
import styles from "./Navigation.module.scss";

const NavigationItem = ({ path, text, getIconComponent }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  const Icon = getIconComponent(isActive);

  return (
    <li>
      <NavLink to={path} className={styles.link}>
        <Icon size={30} />
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
          <NavLink to="/" className={styles.logoLink}>
            <Twitter size={32} />
          </NavLink>
        </li>
        {items.map((item) => {
          return <NavigationItem key={item.name} {...item} />;
        })}
      </ul>
    </nav>
  );
};
