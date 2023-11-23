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
