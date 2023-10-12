import React from "react";
// import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../SidebarItem/SidebarItem.module.scss";
import classNames from "classnames";

import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as HomeIconFilled } from "../../assets/svg/home-filled.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ReactComponent as SearchIconFilled } from "../../assets/svg/search-filled.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/profile.svg";
import { ReactComponent as ProfileIconFilled } from "../../assets/svg/profile-filled.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svg/notifications.svg";
import { ReactComponent as NotificationIconFilled } from "../../assets/svg/notifications-filled.svg";
import { ReactComponent as MessageIcon } from "../../assets/svg/message.svg";
import { ReactComponent as MessageIconFilled } from "../../assets/svg/message-filled.svg";
import { ReactComponent as ListIcon } from "../../assets/svg/list.svg";
import { ReactComponent as ListIconFilled } from "../../assets/svg/list-filled.svg";
import { ReactComponent as CommunitiesIcon } from "../../assets/svg/communities.svg";
import { ReactComponent as CommunitiesIconFilled } from "../../assets/svg/communities-filled.svg";
import { ReactComponent as MoreIcon } from "../../assets/svg/more.svg";
import { ReactComponent as MoreIconFilled } from "../../assets/svg/more-filled.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg";

const SidebarItem = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li>
          <NavLink className={styles.logo}>
            <TwitterIcon className={styles.icon} />
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            {isActive("/") ? <HomeIconFilled /> : <HomeIcon />}
            Home
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="explore"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            {isActive("/explore") ? <SearchIconFilled /> : <SearchIcon />}
            Explore
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="notifications"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            {isActive("/notifications") ? (
              <NotificationIconFilled />
            ) : (
              <NotificationIcon />
            )}
            Notification
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="messages"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            {isActive("/messages") ? <MessageIconFilled /> : <MessageIcon />}
            Messages
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="lists"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            {isActive("/lists") ? <ListIconFilled /> : <ListIcon />}
            Lists
          </NavLink>
        </li>

        <li className={styles.sidebarListLink}>
          <NavLink
            to="communities"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            {isActive("/communities") ? (
              <CommunitiesIconFilled />
            ) : (
              <CommunitiesIcon />
            )}
            Communities
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="verified"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            <TwitterIcon />
            Verified
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            {isActive("/profile") ? <ProfileIconFilled /> : <ProfileIcon />}
            Profile
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="more"
            className={({ isActive }) =>
              classNames(styles.listLink, { [styles.active]: isActive })
            }
          >
            {isActive("/more") ? <MoreIconFilled /> : <MoreIcon />}
            More
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarItem;
