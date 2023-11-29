import {
  HomeIcon,
  HomeIconFilled,
  SearchIcon,
  SearchIconFilled,
  ProfileIcon,
  ProfileIconFilled,
  NotificationIcon,
  NotificationIconFilled,
  MessageIcon,
  MessageIconFilled,
  TwitterIcon,
  Avatar,
  Settings,
  Bookmarks,
} from "@/icons";
import { capitalize } from "@/utils";

class Item {
  constructor(name, activeIcon, inactiveIcon, path = null) {
    this.name = name;
    this.path = path || "/" + name;
    this.text = capitalize(name);
    this.getIconComponent = (isActive) => (isActive ? activeIcon : inactiveIcon);
  }
}

export const items = [
  new Item("home", HomeIconFilled, HomeIcon, "/"),
  new Item("explore", SearchIconFilled, SearchIcon, "/explore"),
  new Item("notifications", NotificationIconFilled, NotificationIcon, "/notifications"),
  new Item("messages", MessageIconFilled, MessageIcon, "/messages"),
  new Item("profile", ProfileIconFilled, ProfileIcon, "/profile"),
  new Item("bookmarks", Bookmarks, Bookmarks, "/bookmarks"),
];

export const headerItems = [
  new Item("user", Avatar, Avatar, ""),
  new Item("home", TwitterIcon, TwitterIcon, "/"),
  new Item("settings", Settings, Settings, "/settings"),
];

export const footerItems = [
  new Item("home", HomeIconFilled, HomeIcon, "/"),
  new Item("explore", SearchIconFilled, SearchIcon, "/explore"),
  new Item("notifications", NotificationIconFilled, NotificationIcon, "/notifications"),
  new Item("messages", MessageIconFilled, MessageIcon, "/messages"),
];

// export const headerSelectItems = [
//   new Item("bookmarks", HomeIconFilled, HomeIcon, "/bookmarks"),
//   new Item("explore", SearchIconFilled, SearchIcon, "/explore"),
// ];

export const headerDrawerItems = [
  new Item("profile", ProfileIcon, ProfileIcon, "/profile"),
];
