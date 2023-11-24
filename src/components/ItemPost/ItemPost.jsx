import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ModalCommentPost } from "../../components";
import { deletePost, handleLike, handleUnlike } from "../../redux/slices/postsSlice";
// import View from "../../assets/icons/view.svg?react";
import Reply from "../../assets/icons/reply.svg?react";
import LikeFalse from "../../assets/icons/likeFalse.svg?react";
import Repost from "../../assets/icons/repost.svg?react";
import Share from "../../assets/icons/share.svg?react";
import Like from "../../assets/icons/like.svg?react";
import Delete from "../../assets/icons/delete.svg?react";
import styles from "./ItemPost.module.scss";

export function ItemPost({
  content,
  imageUrls,
  id,
  likeCount,
  liked,
  disable,
  onPostDeleted,
  replyCount,
  updateComment,
  avatarUrl,
  fullName,
}) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeletePost = () => {
    dispatch(deletePost(id));
    if (onPostDeleted) {
      onPostDeleted(id);
    }
  };

  const navigate = useNavigate();

  const redirectToPost = () => {
    navigate(`/inshyy-post/${id}`);
  };
  const fonnClick = (event) => {
    if (event.currentTarget === event.target) {
      redirectToPost();
    }
  };

  return (
    <div>
      <div className={styles.tweet} onClick={fonnClick}>
        <div className={styles.tweetHeader}>
          <div className={styles.tweetAvatar}>
            <Avatar
              sx={{
                mt: 0,
                ml: 1,
                bgcolor: "rgb(8, 139, 226)",
                width: 40,
                height: 40,
              }}
              src={avatarUrl}
            />
            <div className={styles.tweetUserInfo}>
              <span className={styles.tweetUsername}>{fullName}</span>
            </div>
          </div>
          <div>
            <IconButton id="basic-button" onClick={handleClick}>
              <MoreHorizIcon fontSize="large" />
            </IconButton>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleDeletePost} sx={{ color: "red" }}>
                <Delete />
                Delete
              </MenuItem>
            </Menu>
          </div>
        </div>
        <p className={styles.tweetContent}>{content}</p>
        <div className={styles.tweetImg}>
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`${index}`}
              style={{ width: "220px", objectFit: "cover" }}
            />
          ))}
        </div>

        <div className={styles.tweetActions}>
          {!disable && (
            <>
              <div>
                <IconButton onClick={openModal}>
                  <Reply className={styles.tweetReply} />
                </IconButton>
                <span style={{ color: "rgb(83, 100, 113)", fontSize: "15px" }}>
                  {replyCount}
                </span>
              </div>
              <IconButton>
                <Repost className={styles.tweetRepost} />
              </IconButton>
              <div>
                <IconButton
                  onClick={() => {
                    liked ? dispatch(handleUnlike(id)) : dispatch(handleLike(id));
                  }}>
                  {liked ? <LikeFalse /> : <Like className={styles.tweetLike} />}
                </IconButton>
                <span style={{ color: "rgb(83, 100, 113) ", fontSize: "15px" }}>
                  {likeCount}
                </span>
              </div>
              {/* <IconButton>
                <View className={styles.tweetReply} />
              </IconButton> */}
              <IconButton>
                <Share className={styles.tweetReply} />
              </IconButton>
            </>
          )}
        </div>
      </div>

      <ModalCommentPost
        isOpen={modalIsOpen}
        closeModal={closeModal}
        content={content}
        imageUrls={imageUrls}
        id={id}
        likeCount={likeCount}
        liked={liked}
        updateComment={updateComment}
        avatarUrl={avatarUrl}
        fullName={fullName}
      />
    </div>
  );
}

ItemPost.propTypes = {
  content: PropTypes.string,
  imageUrls: PropTypes.array,
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string,
  id: PropTypes.string,
  likeCount: PropTypes.number,
  liked: PropTypes.bool,
  disable: PropTypes.bool,
  onPostDeleted: PropTypes.func,
  replyCount: PropTypes.number,
  updateComment: PropTypes.func,
};

ItemPost.defaultProps = {
  content: "",
  imageUrls: [],
  avatarUrl: "",
  fullName: "",
};
