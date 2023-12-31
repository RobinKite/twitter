import { addBookmarkPost, deleteBookmarkPost } from "@/redux/slices/userSlice";
import { IconButton, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import {
  likeCountSX,
  replyCountSX,
  tweetActionsSX,
  tweetRepostSX,
} from "../ItemPost/styleSX";
import { Bookmark, BookmarkFilled, Like, LikeFalse, Reply, Repost } from "@/icons";
import { CustomSelect } from "..";
import { deletePost, handleLike, handleUnlike } from "@/redux/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import usePostData from "@/hooks/usePostData";
import { PostType } from "@/constants";
import { Themes } from "@/themes/theme";
import { setModalPost } from "@/redux/slices/appSlice";

export function PostActions({ disable, openModal, post, onPostClick }) {
  const {
    id,
    likeCount,
    liked,
    replyCount,
    bookmarked,
    body: content,
    imageUrls,
    user: { id: userId },
  } = post;
  const theme = useTheme();
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [isBookmarkedPost, setIsBookmarkedPost] = useState(bookmarked);
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCounter, setLikeCounter] = useState(likeCount);
  const [isMenuRepostOpen, setIsMenuRepostOpen] = useState(false);
  const { setInputStr, setFiles, submit } = usePostData(PostType.QUOTE, id, () =>
    dispatch(setModalPost(false)),
  );
  const accountUser = useSelector((state) => state.user.user);
  const isReposted = post.type === PostType.QUOTE;

  const handleBookmarkClick = (postId) => {
    isBookmarkedPost
      ? dispatch(deleteBookmarkPost(postId))
      : dispatch(addBookmarkPost(postId));
    setIsBookmarkedPost(!isBookmarkedPost);
  };

  const handleRepostClick = () => {
    if (!(isReposted && accountUser?.id === userId)) {
      submit();
    } else if (isReposted && accountUser?.id === userId) {
      dispatch(deletePost(id));
    }
  };

  const handleOpenRepostMenu = () => {
    setIsMenuRepostOpen(true);
  };

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikeCounter((prev) => {
      isLiked ? prev-- : prev++;
      return prev;
    });
    isLiked ? dispatch(handleUnlike(id)) : dispatch(handleLike(id));
  };

  const onContainerClick = ({ target }) => {
    if (target === containerRef.current) onPostClick();
  };

  useEffect(() => {
    const fetchFile = async (imageUrl) => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error("Error fetching image");
        }

        const data = await response.blob();
        setFiles((prev) => {
          if (prev.some((file) => file.size === data.size)) return prev;

          return [...prev, data];
        });
      } catch (error) {
        console.error("Error: ", error.message);
      }
    };

    imageUrls?.forEach((image) => fetchFile(image));
    setInputStr(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, imageUrls]);

  return (
    <Stack ref={containerRef} sx={tweetActionsSX} onClick={onContainerClick}>
      {!disable && (
        <>
          <Stack sx={replyCountSX}>
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                openModal();
              }}>
              <Reply />
            </IconButton>
            <Typography component="span">{replyCount}</Typography>
          </Stack>
          <IconButton sx={tweetRepostSX} onClick={handleOpenRepostMenu}>
            <Repost
              fill={
                isReposted && accountUser?.id === userId
                  ? "hsl(134, 66%, 57%)"
                  : "#536471"
              }
            />
          </IconButton>
          <CustomSelect
            open={isMenuRepostOpen}
            onClose={setIsMenuRepostOpen}
            customStyles={{ width: "100%", fontSize: "15px", gap: "12px" }}>
            <MenuItem
              onClick={handleRepostClick}
              sx={{
                color:
                  theme.palette.mode === Themes.LIGHT
                    ? theme.palette.common.secondary
                    : theme.palette.dark.light_grey,
              }}>
              <Repost
                fill={
                  theme.palette.mode === Themes.LIGHT
                    ? theme.palette.common.secondary
                    : theme.palette.dark.light_grey
                }
              />
              {isReposted && accountUser?.id === userId ? "Undo repost" : "Repost"}
            </MenuItem>
          </CustomSelect>
          <Stack sx={likeCountSX}>
            <IconButton onClick={handleLikeClick}>
              {isLiked ? <LikeFalse /> : <Like />}
            </IconButton>
            <Typography
              component="span"
              sx={{
                minWidth: "2ch",
                color: isLiked ? "rgb(249, 24, 128)" : "inherit",
              }}>
              {likeCounter}
            </Typography>
          </Stack>
          <IconButton sx={replyCountSX} onClick={() => handleBookmarkClick(id)}>
            {isBookmarkedPost ? (
              <BookmarkFilled fill="#1a97db" />
            ) : (
              <Bookmark fill="#536471" />
            )}
          </IconButton>
        </>
      )}
    </Stack>
  );
}

PostActions.propTypes = {
  disable: PropTypes.bool,
  openModal: PropTypes.func,
  post: PropTypes.object,
  onPostClick: PropTypes.func,
};

PostActions.defaultProps = {
  imageUrls: [],
  onPostClick: () => {},
};
