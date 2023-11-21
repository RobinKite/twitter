import { NavLink, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { RiTwitterXFill as TwitterIcon } from "react-icons/ri";
import { GoHome as HomeIcon } from "react-icons/go";
import { GoHomeFill as HomeIconFilled } from "react-icons/go";
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { IoSearch as SearchIconFilled } from "react-icons/io5";
import { HiOutlineUser as ProfileIcon } from "react-icons/hi2";
import { HiUser as ProfileIconFilled } from "react-icons/hi2";
import { PiBellFill as NotificationIconFilled } from "react-icons/pi";
import { PiBell as NotificationIcon } from "react-icons/pi";
import { IoMail as MessageIconFilled } from "react-icons/io5";
import { IoMailOutline as MessageIcon } from "react-icons/io5";
import { IoListOutline as ListIcon } from "react-icons/io5";
import { IoList as ListIconFilled } from "react-icons/io5";
import { PiUsers as CommunitiesIcon } from "react-icons/pi";
import { PiUsersFill as CommunitiesIconFilled } from "react-icons/pi";
import AppLogo from "../../assets/icons/twitter.svg?react";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li>
          <NavLink to="/" className={styles.logo}>
            <AppLogo className={styles.icon} />
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/") ? <HomeIconFilled size={26} /> : <HomeIcon size={26} />}
            <span className={styles.hideText}>Home</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="explore"
            className={({ isActive }) =>
              clsx(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/explore") ? (
              <SearchIconFilled size={26} />
            ) : (
              <SearchIcon size={26} />
            )}
            <span className={styles.hideText}>Explore</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="notifications"
            className={({ isActive }) =>
              clsx(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/notifications") ? (
              <NotificationIconFilled size={26} />
            ) : (
              <NotificationIcon size={26} />
            )}
            <span className={styles.hideText}>Notification</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="messages"
            className={({ isActive }) =>
              clsx(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/messages") ? (
              <MessageIconFilled size={26} />
            ) : (
              <MessageIcon size={26} />
            )}
            <span className={styles.hideText}>Messages</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="lists"
            className={({ isActive }) =>
              clsx(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/lists") ? <ListIconFilled size={26} /> : <ListIcon size={26} />}
            <span className={styles.hideText}>Lists</span>
          </NavLink>
        </li>

        <li className={styles.sidebarListLink}>
          <NavLink
            to="communities"
            className={({ isActive }) =>
              clsx(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/communities") ? (
              <CommunitiesIconFilled size={26} />
            ) : (
              <CommunitiesIcon size={26} />
            )}
            <span className={styles.hideText}>Communities</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="verified"
            className={({ isActive }) =>
              clsx(styles.listLink, { [styles.active]: isActive })
            }>
            <TwitterIcon />
            <span className={styles.hideText}>Verified</span>
          </NavLink>
        </li>
        <li className={styles.sidebarListLink}>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              clsx(styles.listLink, { [styles.active]: isActive })
            }>
            {isActive("/profile") ? (
              <ProfileIconFilled size={26} />
            ) : (
              <ProfileIcon size={26} />
            )}
            <span className={styles.hideText}>Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
