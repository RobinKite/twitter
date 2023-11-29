import {
  Twitter,
  Home,
  HomeFilled,
  Search,
  SearchFilled,
  Profile,
  ProfileFilled,
  Notification,
  NotificationFilled,
  Message,
  MessageFilled,
} from "@/icons";

import { capitalize } from "@/utils";

//TODO: Check for icons in react-icons and replace them
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

class Item {
  constructor(name, activeIcon, inactiveIcon, path = null) {
    this.name = name;
    this.path = path || "/" + name;
    this.text = capitalize(name);
    this.getIconComponent = (isActive) => (isActive ? activeIcon : inactiveIcon);
  }
}

export const items = [
  new Item("home", HomeFilled, Home, "/"),
  new Item("explore", SearchFilled, Search, "/explore"),
  new Item("notifications", NotificationFilled, Notification, "/notifications"),
  new Item("messages", MessageFilled, Message, "/messages"),
  new Item("profile", ProfileFilled, Profile, "/profile"),
  // new Item ("bookmarks", "/bookmarks"),
];

export const headerItems = [
  new Item("user", AccountCircleTwoToneIcon, AccountCircleTwoToneIcon, ""),
  new Item("home", Twitter, Twitter, "/"),
  new Item("settings", SettingsSharpIcon, SettingsSharpIcon, "/settings"),
];

export const footerItems = [
  new Item("home", HomeFilled, Home, "/"),
  new Item("explore", SearchFilled, Search, "/explore"),
  new Item("notifications", NotificationFilled, Notification, "/notifications"),
  new Item("messages", MessageFilled, Message, "/messages"),
];

// export const headerSelectItems = [
//   new Item("bookmarks", HomeIconFilled, HomeIcon, "/bookmarks"),
//   new Item("explore", SearchIconFilled, SearchIcon, "/explore"),
// ];

export const headerDrawerItems = [
  new Item("profile", Profile, Profile, "/profile"),
  new Item("bookmarks", BookmarkBorderIcon, BookmarkBorderIcon, "/bookmarks"),
];
