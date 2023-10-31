import React, { useState, useEffect } from "react";
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
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import ImgModal from "../ImgModal/ImgModal";
import { deleteFromPost,deletePost } from "../../redux/actions/createPost";
// import MenuItem from "@mui/material/MenuItem";
const ItemPost = ({ content, imageUrls, id }) => {
  // console.log(id)
  // console.log(content);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className={classNames(styles.tweet)} >
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
              <MenuItem
                onClick={() => {
                  dispatch(deletePost(id));
                  
                }}
                sx={{ color: "red" }}
              >
                <Delete />
                Delete
              </MenuItem>
            </Menu>
          </div>
        </div>
        <p className={classNames(styles.tweetContent)}>{content}</p>
        <div className={classNames(styles.tweetImg)}>
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              onClick={() => openImageModal(imageUrl)}
              style={{ width: "220px", objectFit: "cover" }}
            />
          ))}
        </div>
        {/* {isModalOpen && (
          <ImgModal imageUrl={selectedImage} onClose={closeImageModal} />
        )} */}
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
    </div>
  );
};

ItemPost.propTypes = {
  content: PropTypes.string,
  imageUrls: PropTypes.array,
};

ItemPost.defaultProps = {
  content: "",
  imageUrls: [],
};

export default ItemPost;
