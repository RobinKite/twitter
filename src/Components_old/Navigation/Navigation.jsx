import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as HomeIconFilled } from "../../assets/icons/home-filled.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as SearchIconFilled } from "../../assets/icons/search-filled.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as ProfileIconFilled } from "../../assets/icons/profile-filled.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as NotificationIconFilled } from "../../assets/icons/notifications-filled.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message.svg";
import { ReactComponent as MessageIconFilled } from "../../assets/icons/message-filled.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list.svg";
import { ReactComponent as ListIconFilled } from "../../assets/icons/list-filled.svg";
import { ReactComponent as CommunitiesIcon } from "../../assets/icons/communities.svg";
import { ReactComponent as CommunitiesIconFilled } from "../../assets/icons/communities-filled.svg";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li>
          <NavLink to="/" className={styles.logo}>
            <TwitterIcon className={styles.icon} />
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/") ? <HomeIconFilled /> : <HomeIcon />}
            <span className={styles.hideText}>Home</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="explore"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/explore") ? <SearchIconFilled /> : <SearchIcon />}
            <span className={styles.hideText}>Explore</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="notifications"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/notifications") ? (
              <NotificationIconFilled />
            ) : (
              <NotificationIcon />
            )}
            <span className={styles.hideText}>Notification</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="messages"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/messages") ? <MessageIconFilled /> : <MessageIcon />}
            <span className={styles.hideText}>Messages</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="lists"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/lists") ? <ListIconFilled /> : <ListIcon />}
            <span className={styles.hideText}>Lists</span>
          </NavLink>
        </li>

        <li className={styles.sidebarListLink}>
          <NavLink
            to="communities"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/communities") ? <CommunitiesIconFilled /> : <CommunitiesIcon />}
            <span className={styles.hideText}>Communities</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="verified"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }>
            <TwitterIcon />
            <span className={styles.hideText}>Verified</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/profile") ? <ProfileIconFilled /> : <ProfileIcon />}
            <span className={styles.hideText}>Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
