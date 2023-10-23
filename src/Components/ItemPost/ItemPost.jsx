import React from "react";
import classNames from "classnames";
import styles from "./ItemPost.module.scss";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import { ReactComponent as View } from "./svg/view.svg";
import { ReactComponent as Reply } from "./svg/reply.svg";
import { ReactComponent as Like } from "./svg/like.svg";
import { ReactComponent as Repost } from "./svg/repost.svg";
import { ReactComponent as Share } from "./svg/share.svg";
import { ReactComponent as LikeFalse } from "./svg/likeFalse.svg";
import { ReactComponent as Delete } from "./svg/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
const ItemPost = () => {
  // const { src, img, username, content, nickname } = props;
  const newTweet = useSelector((state) => state.createPost);
  // console.log(newTweet);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classNames(styles.tweet)}>
      <div className={classNames(styles.tweetHeader)}>
        <div className={classNames(styles.tweetAvatar)}>
          <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
          {/* <img src={props.profileImageUrl} alt={`${username}'s profile`} /> */}
          <div className={classNames(styles.tweetUserInfo)}>
            <span className={classNames(styles.tweetUsername)}>
              {/* {username}username {nickname} nickname */}
            </span>
          </div>
        </div>
        <div>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon fontSize="large" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} sx={{ color: "red" }}>
              <Delete />
              Delete
            </MenuItem>
          </Menu>
        </div>
      </div>
      <p className={classNames(styles.tweetContent)}>
        {newTweet.newTweet.body}
      </p>
      <div className={classNames(styles.tweetImg)}>
        <img
         style={{ width: "240px", objectFit: "cover" }}
          src={newTweet.newTweet.images[0]}
          alt=""
        />
        <img
        style={{ width: "240px", objectFit: "cover" }}
          src={newTweet.newTweet.images[1]}
          alt=""
        />
        <img
          style={{ width: "240px", objectFit: "cover" }}
          src={newTweet.newTweet.images[2]}
          alt=""
        />
        {/* <img
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
        /> */}
      </div>
      <div className={classNames(styles.tweetActions)}>
        <IconButton>
          <Reply className={classNames(styles.tweetReply)} />
        </IconButton>

        <IconButton>
          <Repost className={classNames(styles.tweetRepost)} />
        </IconButton>
        <IconButton>
          <LikeFalse className={classNames(styles.tweetLike)} />
        </IconButton>
        <IconButton>
          <View className={classNames(styles.tweetReply)} />
        </IconButton>
        <IconButton>
          <Share className={classNames(styles.tweetReply)} />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemPost;
