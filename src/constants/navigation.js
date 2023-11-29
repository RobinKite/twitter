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
  List,
  ListFilled,
  Communities,
  CommunitiesFilled,
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
  new Item("explore", SearchFilled, Search),
  new Item("notifications", NotificationFilled, Notification),
  new Item("messages", MessageFilled, Message),
  new Item("lists", ListFilled, List),
  new Item("communities", CommunitiesFilled, Communities),
  new Item("verified", Twitter, Twitter),
  new Item("profile", ProfileFilled, Profile),
];
