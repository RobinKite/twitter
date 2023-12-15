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
import { deletePost, handleLike, handleUnlike } from "@/redux/slices/postsSlice";
import {
  Reply,
  LikeFalse,
  Repost,
  Like,
  Delete,
  Bookmark,
  BookmarkFilled,
} from "@/icons";
import {
  avatarSX,
  iconDeleteSX,
  likeCountSX,
  replyCountSX,
  tweetActionsSX,
  tweetContentSX,
  tweetHeaderSX,
  tweetImgEvenSX,
  tweetImgOddSX,
  tweetImgSX,
  tweetRepostSX,
  tweetSX,
  tweetUsernameSX,
  tweetUsertagSX,
  tweetWrapperSX,
} from "./styleSX";
import { addBookmarkPost, deleteBookmarkPost } from "@/redux/slices/userSlice";

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
  const [isBookmarkedPost, setIsBookmarkedPost] = useState(bookmarked);
  const [isLoading, setIsLoading] = useState(false);
  const [like, setLike] = useState(liked);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);

  const handleLikeClick = async () => {
    setLike(!like);
    like ? dispatch(handleUnlike(id)) : dispatch(handleLike(id));

    setLocalLikeCount((prevCount) => (like ? prevCount - 1 : prevCount + 1));
  };

  const handleBookmarkClick = (postId) => {
    setIsLoading(true);
    isBookmarkedPost
      ? dispatch(deleteBookmarkPost(postId))
      : dispatch(addBookmarkPost(postId));
    setIsBookmarkedPost(!isBookmarkedPost);
    setIsLoading(false);
  };

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
          <Stack sx={tweetActionsSX}>
            {!disable && (
              <>
                <Stack sx={replyCountSX}>
                  <IconButton onClick={openModal}>
                    <Reply />
                  </IconButton>
                  <Typography component="span">{replyCount}</Typography>
                </Stack>
                <IconButton sx={tweetRepostSX}>
                  <Repost />
                </IconButton>
                <Stack sx={likeCountSX}>
                  <IconButton onClick={handleLikeClick}>
                    {like ? <LikeFalse /> : <Like />}
                  </IconButton>

                  <Typography
                    component="span"
                    sx={{
                      color: like ? "rgb(249, 24, 128)" : "inherit",
                    }}>
                    {localLikeCount}
                  </Typography>
                </Stack>
                <IconButton
                  sx={replyCountSX}
                  onClick={() => handleBookmarkClick(id)}
                  disabled={isLoading}>
                  {isBookmarkedPost ? (
                    <BookmarkFilled style={{ fill: "hsl(201, 79%, 48%)" }} />
                  ) : (
                    <Bookmark />
                  )}
                </IconButton>
              </>
            )}
          </Stack>
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
