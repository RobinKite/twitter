import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ModalCommentPost } from "../../components";
import { deletePost } from "@/redux/slices/postsSlice";
import { Delete, RepostFilled } from "@/icons";
import {
  avatarSX,
  iconDeleteSX,
  tweetAdditionalInfoSX,
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
import { PostType } from "@/constants";

export function ItemPost({ post, disable }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const user = useSelector((state) => state.user.user);

  if (!post) {
    return null;
  }

  const {
    body: content,
    imageUrls,
    id,
    user: { avatarUrl, fullName, ...postUser },
    type,
    parentPost,
  } = post;

  const open = Boolean(anchorEl);
  const isRepost = type === PostType.QUOTE;

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
  };

  const redirectToPost = () => {
    navigate(`/post/${id}`);
  };

  const backgroundClick = (event) => {
    if (event.currentTarget === event.target) {
      redirectToPost();
    }
  };

  const handlePostUserClick = (postUserId) => {
    user?.id === postUserId ? navigate(`/profile`) : navigate(`/user/${postUserId}`);
  };

  const handleUserClick = () => {
    if (!isRepost) {
      handlePostUserClick(postUser?.id);
    } else {
      handlePostUserClick(parentPost?.user.id);
    }
  };

  const handleNavigateToPost = ({ target }) => {
    if (target === containerRef.current) navigate(`/post/${id}`);
  };

  return (
    <Stack ref={containerRef} onClick={handleNavigateToPost} sx={tweetWrapperSX}>
      {isRepost && (
        <Stack
          sx={tweetAdditionalInfoSX}
          onClick={() => handlePostUserClick(postUser?.id)}>
          <RepostFilled fill="#536471" size={16} />
          <Typography component="span">
            {user?.id === postUser.id ? "You" : fullName} reposted
          </Typography>
        </Stack>
      )}
      <Stack sx={tweetSX}>
        <Avatar
          sx={avatarSX}
          src={isRepost ? parentPost?.user.avatarUrl : avatarUrl}
          onClick={handleUserClick}
        />
        <Stack>
          <Stack sx={tweetHeaderSX}>
            <Stack
              onClick={handleUserClick}
              sx={{ flexDirection: "row", alignItems: "center", gap: "4px" }}>
              <Typography component="span" sx={tweetUsernameSX}>
                {isRepost ? parentPost?.user.fullName : fullName}
              </Typography>
              {postUser.userTag && (
                <Typography component="span" sx={tweetUsertagSX}>
                  @{isRepost ? parentPost.user.userTag : postUser.userTag}
                </Typography>
              )}
            </Stack>
            {user.id === postUser.id && (
              <Stack>
                <IconButton sx={iconDeleteSX} id="basic-button" onClick={handleClick}>
                  <MoreHorizIcon fontSize="small" />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "right",
                  }}
                  sx={{
                    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                      paddingTop: 0,
                      paddingBottom: 0,
                    },
                  }}>
                  <MenuItem
                    onClick={handleDeletePost}
                    sx={{ fontWeight: 500, color: "red" }}>
                    <Delete fill="red" style={{ marginRight: "0.25rem" }} />
                    Delete
                  </MenuItem>
                </Menu>
              </Stack>
            )}
          </Stack>
          <Typography sx={tweetContentSX} onClick={backgroundClick}>
            {content}
          </Typography>
          {imageUrls?.length > 0 && (
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
                  onClick={backgroundClick}
                  key={index}
                  src={imageUrl}
                  alt={`${index}`}
                />
              ))}
            </Stack>
          )}
          <PostActions
            disable={disable}
            openModal={openModal}
            post={post}
            onPostClick={redirectToPost}
          />
        </Stack>
      </Stack>
      <ModalCommentPost
        isOpen={modalIsOpen}
        closeModal={closeModal}
        id={id}
        avatarUrl={avatarUrl}
        fullName={fullName}
        post={post}
      />
    </Stack>
  );
}

ItemPost.propTypes = {
  disable: PropTypes.bool,
  post: PropTypes.object,
};
