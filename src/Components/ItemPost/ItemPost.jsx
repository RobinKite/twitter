import React from "react";
import classNames from "classnames";
import styles from "./ItemPost.module.scss";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
const ItemPost = (props) => {
  const { src, img, username, content, nickname } = props;

  return (
    <div className={classNames(styles.tweet)}>
      <div className={classNames(styles.tweetHeader)}>
        <div className={classNames(styles.tweetAvatar)}>
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
          {/* <img src={props.profileImageUrl} alt={`${username}'s profile`} /> */}
          <div className={classNames(styles.tweetUserInfo)}>
            <span className={classNames(styles.tweetUsername)}>
              {username}username {nickname} nickname
            </span>
          </div>
        </div>
        <IconButton>
          <MoreHorizIcon fontSize="large" />
        </IconButton>
      </div>
      <p className={classNames(styles.tweetContent)}>
        {content}контент jdbndfndkfbdkflbdf fdbmdflnbldfnbkd fbmdlfkbldfnb
        dfbmldkfnbldnflb dfbmldnfkbdfnbndfkbnnfdk bjldnfbldfblidf привіт ти
        вийдеш гуляти з собако чи сам текст
      </p>
      <div className={classNames(styles.tweetImg)}>
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt={`${username}'s profile`}
        />
        <img
          src="https://randomuser.me/api/portraits/women/63.jpg"
          alt={`${username}'s profile`}
        />
        <img
          src="https://randomuser.me/api/portraits/women/60.jpg"
          alt={`${username}'s profile`}
        />
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt={`${username}'s profile`}
        />
        <img
          src="https://randomuser.me/api/portraits/women/63.jpg"
          alt={`${username}'s profile`}
        />
        <img
          src="https://randomuser.me/api/portraits/women/60.jpg"
          alt={`${username}'s profile`}
        />
      </div>
      <div className={classNames(styles.tweetActions)}>
        <IconButton>
          <MapsUgcIcon color="primary" />
        </IconButton>

        <IconButton>
          <FavoriteBorderIcon color="error" />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemPost;
