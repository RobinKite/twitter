import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ModalCommentPost } from "../../components";
import { deletePost } from "@/redux/slices/postsSlice";
import { Delete, Repost } from "@/icons";
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
import { getUserInfo } from "@/redux/slices/userSlice";

export function ItemPost({ post, disable }) {
  // console.log(post);
  const {
    body: content,
    imageUrls,
    id,
    user: { avatarUrl, fullName, ...postUser },
    type,
    parentPost,
  } = post;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const profileUser = useSelector((state) => state.user.user);
  const isRepost = type === PostType.QUOTE;
  const accountUser = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

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

  const redirectToUserProfile = () => {
    try {
      if (postUser && postUser.id && type !== PostType.QUOTE) {
        navigate(`/user/${postUser.id}`);
      } else if (isRepost) {
        navigate(`/user/${parentPost?.user.id}`);
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
      {isRepost && (
        <Typography
          sx={tweetAdditionalInfoSX}
          onClick={
            accountUser?.id === postUser.id
              ? () => navigate(`/user/${postUser.id}`)
              : redirectToUserProfile
          }>
          <Repost />
          <Typography component="span">
            {accountUser?.fullName === fullName ? "You" : fullName} reposted
          </Typography>
        </Typography>
      )}
      <Stack sx={tweetSX}>
        <Avatar
          sx={avatarSX}
          src={isRepost ? parentPost?.user.avatarUrl : avatarUrl}
          onClick={redirectToUserProfile}
        />
        <Stack>
          <Stack sx={tweetHeaderSX}>
            <Stack
              onClick={redirectToUserProfile}
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
          <PostActions disable={disable} openModal={openModal} post={post} />
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
