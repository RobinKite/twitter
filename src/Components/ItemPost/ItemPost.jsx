import React from "react";
import classNames from "classnames";
import styles from "./ItemPost.module.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import Button from "@mui/material/Button";
const ItemPost = (props) => {
  const { src, count, username, content } = props;

  return (
    <div className={classNames(styles.tweet)}>
      <div className={classNames(styles.tweetHeader)}>
        <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
        {/* <img src={props.profileImageUrl} alt={`${username}'s profile`} /> */}

        <div className={classNames(styles.tweetUserInfo)}>
          <span className={classNames(styles.tweetUsername)}>
            {username}Імя{" "}
          </span>
        </div>
      </div>
      <p className={classNames(styles.tweetContent)}>
        {content}контент jdbndfndkfbdkflbdf fdbmdflnbldfnbkd fbmdlfkbldfnb
        dfbmldkfnbldnflb dfbmldnfkbdfnbndfkbnnfdk bjldnfbldfblidf привіт ти
        вийдеш гуляти з собако чи сам текст
      </p>
      <div>
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
        <Button className={classNames(styles.likeButton)}>
          <FavoriteBorderIcon />
          <span>{count}</span>{" "}
        </Button>
        <Button className={classNames(styles.retweetButton)}>
          {" "}
          <MapsUgcIcon color="primary" />
        </Button>
        {/* <button className={classNames(styles.likeButton)}>Like</button> */}
        {/* <button className={classNames(styles.retweetButton)}>Retweet</button> */}
      </div>
    </div>
  );
};

export default ItemPost;
