import {
  Twitter,
  Avatar,
  Gear,
  Home,
  HomeFilled,
  Profile,
  ProfileFilled,
  Bell,
  BellFilled,
  Message,
  MessageFilled,
  Bookmark,
  BookmarkFilled,
} from "@/icons";

import { capitalize } from "@/utils";

class Item {
  constructor(name, activeIcon, inactiveIcon, path = null, alert = false) {
    this.name = name;
    this.path = path || "/" + name;
    this.text = capitalize(name);
    this.alert = !!alert;
    this.getIconComponent = (isActive) => (isActive ? activeIcon : inactiveIcon);
  }
}

export const items = [
  new Item("home", HomeFilled, Home, "/"),
  new Item("notifications", BellFilled, Bell, "/notifications", true),
  new Item("messages", MessageFilled, Message, "/messages"),
  new Item("bookmarks", BookmarkFilled, Bookmark, "/bookmarks"),
  new Item("profile", ProfileFilled, Profile, "/profile"),
];

export const headerItems = [
  new Item("user", Avatar, Avatar, ""),
  new Item("home", Twitter, Twitter, "/"),
  new Item("settings", Gear, Gear, "/settings"),
];

export const footerItems = [
  new Item("notifications", BellFilled, Bell, "/notifications"),
  new Item("home", HomeFilled, Home, "/"),
  new Item("messages", MessageFilled, Message, "/messages"),
];

export const headerDrawerItems = [
  new Item("profile", Profile, Profile, "/profile"),
  new Item("bookmarks", Bookmark, Bookmark, "/bookmarks"),
];
