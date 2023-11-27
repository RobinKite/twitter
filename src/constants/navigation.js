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
} from "@/icons";

// import {ReactComponent as
// TwitterIcon
// } from "../assets/icons/......."

import { capitalize } from "@/utils";
// import { SettingsRoundedIcon } from "@mui/icons-material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";

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
  // new Item ("bookmarks", "/bookmarks"),
];

export const headerItems = [
  new Item("user", AccountCircleTwoToneIcon, AccountCircleTwoToneIcon, ""),
  new Item("home", TwitterIcon, TwitterIcon, "/"),
  new Item("settings", SettingsSharpIcon, SettingsSharpIcon, "/settings"),
];

export const footerItems = [
  new Item("home", HomeIconFilled, HomeIcon, "/"),
  new Item("explore", SearchIconFilled, SearchIcon, "/explore"),
  new Item("notifications", NotificationIconFilled, NotificationIcon, "/notifications"),
  new Item("messages", MessageIconFilled, MessageIcon, "/messages"),
];
