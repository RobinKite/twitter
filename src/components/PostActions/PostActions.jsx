import { addBookmarkPost, deleteBookmarkPost } from "@/redux/slices/userSlice";
import { IconButton, MenuItem, Stack, Typography } from "@mui/material";
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
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [isBookmarkedPost, setIsBookmarkedPost] = useState(bookmarked);
  const [isMenuRepostOpen, setIsMenuRepostOpen] = useState(false);
  const { setInputStr, setFiles, submit } = usePostData(PostType.QUOTE, id);
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
    liked ? dispatch(handleUnlike(id)) : dispatch(handleLike(id));
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
            <MenuItem onClick={handleRepostClick}>
              <Repost fill="#000000de" />
              {isReposted && accountUser?.id === userId ? "Undo repost" : "Repost"}
            </MenuItem>
          </CustomSelect>
          <Stack sx={likeCountSX}>
            <IconButton onClick={handleLikeClick}>
              {liked ? <LikeFalse /> : <Like />}
            </IconButton>
            <Typography
              component="span"
              sx={{
                minWidth: "2ch",
                color: liked ? "rgb(249, 24, 128)" : "inherit",
              }}>
              {likeCount}
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
