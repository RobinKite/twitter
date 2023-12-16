import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ModalCommentPost } from "../../components";
import { deletePost } from "@/redux/slices/postsSlice";
import { Delete } from "@/icons";
import {
  avatarSX,
  iconDeleteSX,
  tweetContentSX,
  tweetHeaderSX,
  tweetImgEvenSX,
  tweetImgOddSX,
  tweetImgSX,
  tweetSX,
  tweetUsernameSX,
  tweetUsertagSX,
  tweetWrapperSX,
} from "./styleSX";
import { PostActions } from "../PostActions/PostActions";

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
  postUser,
  bookmarked,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const profileUser = useSelector((state) => state.user.user);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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

  const redirectToPost = () => {
    navigate(`/post/${id}`);
  };

  const redirectToUserProfile = () => {
    try {
      if (postUser && postUser.id) {
        navigate(`/user/${postUser.id}`);
      }
    } catch (error) {
      console.error("Error navigating to user profile:", error);
    }
  };

  const fonnClick = (event) => {
    if (event.currentTarget === event.target) {
      redirectToPost();
    }
  };

  return (
    <Stack sx={tweetWrapperSX}>
      <Stack sx={tweetSX}>
        <Avatar sx={avatarSX} src={avatarUrl} onClick={redirectToUserProfile} />
        <Stack>
          <Stack sx={tweetHeaderSX}>
            <Stack
              onClick={redirectToUserProfile}
              sx={{ flexDirection: "row", alignItems: "center", gap: "4px" }}>
              <Typography component="span" sx={tweetUsernameSX}>
                {fullName}
              </Typography>
              {postUser.userTag && (
                <Typography component="span" sx={tweetUsertagSX}>
                  @{postUser.userTag}
                </Typography>
              )}
            </Stack>
            {profileUser.id === postUser.id && (
              <Stack>
                <IconButton sx={iconDeleteSX} id="basic-button" onClick={handleClick}>
                  <MoreHorizIcon fontSize="small" />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{
                    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                      paddingTop: 0,
                      paddingBottom: 0,
                    },
                  }}>
                  <MenuItem onClick={handleDeletePost} sx={{ color: "red" }}>
                    <Delete fill="red" />
                    Delete
                  </MenuItem>
                </Menu>
              </Stack>
            )}
          </Stack>
          <Typography sx={tweetContentSX} onClick={fonnClick}>
            {content}
          </Typography>
          {imageUrls.length > 0 && (
            <Stack
              sx={
                imageUrls.length > 1
                  ? imageUrls.length % 2
                    ? tweetImgOddSX
                    : tweetImgEvenSX
                  : tweetImgSX
              }>
              {imageUrls.map((imageUrl, index) => (
                <img
                  style={{
                    border: imageUrls.length > 1 ? "" : "1px solid rgb(207,217,222)",
                  }}
                  onClick={fonnClick}
                  key={index}
                  src={imageUrl}
                  alt={`${index}`}
                />
              ))}
            </Stack>
          )}
          <PostActions
            id={id}
            likeCount={likeCount}
            liked={liked}
            disable={disable}
            replyCount={replyCount}
            bookmarked={bookmarked}
            openModal={openModal}
            content={content}
            imageUrls={imageUrls}
          />
        </Stack>
      </Stack>

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
        bookmarked={bookmarked}
      />
    </Stack>
  );
}

ItemPost.propTypes = {
  content: PropTypes.string,
  imageUrls: PropTypes.array,
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string,
  postUser: PropTypes.object,
  id: PropTypes.string,
  likeCount: PropTypes.number,
  liked: PropTypes.bool,
  disable: PropTypes.bool,
  onPostDeleted: PropTypes.func,
  replyCount: PropTypes.number,
  updateComment: PropTypes.func,
  bookmarked: PropTypes.bool,
};

ItemPost.defaultProps = {
  content: "",
  imageUrls: [],
  avatarUrl: "",
  fullName: "",
  postUser: {},
};
