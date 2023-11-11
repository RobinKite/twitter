import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./ItemPost.module.scss";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import { ReactComponent as View } from "./svg/view.svg";
import { ReactComponent as Reply } from "./svg/reply.svg";
import { ReactComponent as LikeFalse } from "./svg/likeFalse.svg";
import { ReactComponent as Repost } from "./svg/repost.svg";
import { ReactComponent as Share } from "./svg/share.svg";
import { ReactComponent as Like } from "./svg/like.svg";
import { ReactComponent as Delete } from "./svg/delete.svg";
import PropTypes from "prop-types";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";

import ImgModal from "../ImgModal/ImgModal";
import {
  deleteFromPost,
  deletePost,
  dislikePostAxios,
  likePost,
  likePostAxios,
} from "../../redux/actions/createPost";
import PostModal from "../PostModal/PostModal";
import {
  setContent,
  setContentComent,
  setModal,
  setModalComent,
  setModalPost,
} from "../../redux/actions/modalPost";
import ComentPost from "../ComentPost/ComentPost";
import ModalComentPost from "../ModalComentPost/ModalComentPost";
// import MenuItem from "@mui/material/MenuItem";

const ItemPost = ({ content, imageUrls, id, likeCount, liked, disable, onPostDeleted,replyCount,updateComment }) => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  // console.log(liked);
  const handleDeletePost = () => {
    dispatch(deletePost(id)); // Видаліть пост
    if (onPostDeleted) {
      onPostDeleted(id); // Викликаємо функцію onPostDeleted з ID видаленого поста
    }
  }

  const isActiveModal1 = useSelector(
    (state) => state.postModal.isActiveSetModalComent
  );
  const posts = useSelector((state) => state.posts.posts, shallowEqual);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const redirectToPost = () => {
    navigate(`/inshyy-post/${id}`);
  };
  const fonnClick = (event) => {
    // Перевіряємо, чи клік був здійснений за межами модального вікна
    if (event.currentTarget === event.target) {
      //Якщо так, то додаємо код для закриття модального вікна
      redirectToPost();
    }
  };

  return (
    <div>
      <div className={classNames(styles.tweet)} onClick={fonnClick}>
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
              // aria-controls={open ? "basic-menu" : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? "true" : undefined}
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
                onClick={handleDeletePost}
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
              // onClick={() => openImageModal(imageUrl)}
              style={{ width: "220px", objectFit: "cover" }}
            />
          ))}
        </div>

        <div className={classNames(styles.tweetActions)}>
          {!disable && (
            <>
              <div>
                <IconButton
                  onClick={openModal}
                  // onClick={() => {
                  //   // const postId = id;
                  //     dispatch(setModalComent());
                  //     dispatch(setContent(<ComentPost id={id}/>));

                  // }}
                >
                  <Reply className={classNames(styles.tweetReply)} />
                </IconButton>
                <span>{replyCount}</span>
              </div>
              <IconButton>
                <Repost className={classNames(styles.tweetRepost)} />
              </IconButton>
              <div>
                <IconButton
                  onClick={() => {
                    liked
                      ? dispatch(dislikePostAxios(id))
                      : dispatch(likePostAxios(id));
                  }}
                >
                  {liked ? (
                    <LikeFalse />
                  ) : (
                    <Like className={classNames(styles.tweetLike)} />
                  )}
                </IconButton>
                <span>{likeCount}</span>
              </div>
              <IconButton>
                <View className={classNames(styles.tweetReply)} />
              </IconButton>
              <IconButton>
                <Share className={classNames(styles.tweetReply)} />
              </IconButton>
            </>
          )}
        </div>
      </div>

      <ModalComentPost
        isOpen={modalIsOpen}
        closeModal={closeModal}
        content={content}
        imageUrls={imageUrls}
        id={id}
        likeCount={likeCount}
        liked={liked}
        updateComment={updateComment}
     
      />
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
