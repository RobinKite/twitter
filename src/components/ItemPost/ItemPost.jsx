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
import { deletePost, handleLike, handleUnlike } from "@/redux/slices/postsSlice";
import { Reply, LikeFalse, Repost, Like, Delete, Bookmark } from "@/icons";
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
import { getUserInfo } from "@/redux/slices/userSlice";
// import { PostWithPhotos } from "../PhotosContainer/PhotosContainer";

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
}) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const profileUser = useSelector((state) => state.user.user);

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
    navigate(`/post/${id}`);
  };

  const redirectToUserProfile = () => {
    navigate(`/user/${postUser.id}`);
  };

  const fonnClick = (event) => {
    if (event.currentTarget === event.target) {
      redirectToPost();
    }
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

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
                  onClose={handleClose}>
                  <MenuItem onClick={handleDeletePost} sx={{ color: "red" }}>
                    <Delete fill="red" />
                    Delete
                  </MenuItem>
                </Menu>
              </Stack>
            )}
          </Stack>
          <Typography sx={tweetContentSX}>{content}</Typography>
          <Stack
            sx={
              imageUrls.length > 1
                ? imageUrls.length % 2
                  ? tweetImgOddSX
                  : tweetImgEvenSX
                : tweetImgSX
            }
            onClick={fonnClick}>
            {imageUrls.map((imageUrl, index) => (
              <img onClick={fonnClick} key={index} src={imageUrl} alt={`${index}`} />
            ))}
          </Stack>
          {/* <PostWithPhotos imageUrls={imageUrls} /> */}
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
                  <IconButton
                    onClick={() => {
                      liked ? dispatch(handleUnlike(id)) : dispatch(handleLike(id));
                    }}>
                    {liked ? <LikeFalse /> : <Like />}
                  </IconButton>

                  <Typography
                    component="span"
                    sx={{
                      color: liked ? "rgb(249, 24, 128)" : "inherit",
                    }}>
                    {likeCount}
                  </Typography>
                </Stack>
                {/* TODO: add logic for bookmark */}
                <IconButton sx={replyCountSX}>
                  <Bookmark />
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
};

ItemPost.defaultProps = {
  content: "",
  imageUrls: [],
  avatarUrl: "",
  fullName: "",
  postUser: {},
};
