import {
  Twitter,
  Home,
  HomeFilled,
  Profile,
  ProfileFilled,
  Notification,
  NotificationFilled,
  Message,
  MessageFilled,
  Avatar,
  Settings,
  Bookmark,
  BookmarkFilled,
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
  new Item("home", HomeFilled, Home, "/"),

  new Item("notifications", NotificationFilled, Notification, "/notifications"),
  new Item("messages", MessageFilled, Message, "/messages"),
  new Item("profile", ProfileFilled, Profile, "/profile"),
  new Item("bookmarks", BookmarkFilled, Bookmark, "/bookmarks"),
];

export const headerItems = [
  new Item("user", Avatar, Avatar, ""),
  new Item("home", Twitter, Twitter, "/"),
  new Item("settings", Settings, Settings, "/settings"),
];

export const footerItems = [
  new Item("notifications", NotificationFilled, Notification, "/notifications"),
  new Item("home", HomeFilled, Home, "/"),
  new Item("messages", MessageFilled, Message, "/messages"),
];

export const headerDrawerItems = [
  new Item("profile", Profile, Profile, "/profile"),
  new Item("bookmarks", Bookmark, Bookmark, "/bookmarks"),
];
