import {
  TwitterIcon,
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
  ListIcon,
  ListIconFilled,
  CommunitiesIcon,
  CommunitiesIconFilled,
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
  new Item("explore", SearchIconFilled, SearchIcon),
  new Item("notifications", NotificationIconFilled, NotificationIcon),
  new Item("messages", MessageIconFilled, MessageIcon),
  new Item("lists", ListIconFilled, ListIcon),
  new Item("communities", CommunitiesIconFilled, CommunitiesIcon),
  new Item("verified", TwitterIcon, TwitterIcon),
  new Item("profile", ProfileIconFilled, ProfileIcon),
];
