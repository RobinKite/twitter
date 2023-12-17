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
import { handleLike, handleUnlike } from "@/redux/slices/postsSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import usePostData from "@/hooks/usePostData";
import { PostType } from "@/constants";

export function PostActions({
  id,
  likeCount,
  liked,
  disable,
  replyCount,
  bookmarked,
  openModal,
  content,
  imageUrls,
}) {
  const dispatch = useDispatch();
  const [isBookmarkedPost, setIsBookmarkedPost] = useState(bookmarked);
  const [isMenuRepostOpen, setIsMenuRepostOpen] = useState(false);
  const [repostCount, setRepostCount] = useState(0);
  const { setInputStr, setFiles, submit } = usePostData(PostType.QUOTE, null, id);

  const handleBookmarkClick = (postId) => {
    isBookmarkedPost
      ? dispatch(deleteBookmarkPost(postId))
      : dispatch(addBookmarkPost(postId));
    setIsBookmarkedPost(!isBookmarkedPost);
  };

  const handleRepostClick = () => {
    submit();
    setRepostCount((prev) => prev + 1);
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
  }, [content, imageUrls]);

  return (
    <Stack sx={tweetActionsSX}>
      {!disable && (
        <>
          <Stack sx={replyCountSX}>
            <IconButton onClick={openModal}>
              <Reply />
            </IconButton>
            <Typography component="span">{replyCount}</Typography>
          </Stack>
          <Stack direction="row">
            <IconButton sx={tweetRepostSX} onClick={() => setIsMenuRepostOpen(true)}>
              <Repost />
            </IconButton>
            <Typography component="span">{repostCount > 0 && repostCount}</Typography>
          </Stack>
          <CustomSelect open={isMenuRepostOpen} onClose={setIsMenuRepostOpen}>
            <MenuItem onClick={handleRepostClick}>
              <Repost fill="#000000de" /> Repost
            </MenuItem>
          </CustomSelect>
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
          <IconButton sx={replyCountSX} onClick={() => handleBookmarkClick(id)}>
            {isBookmarkedPost ? (
              <BookmarkFilled style={{ fill: "hsl(201, 79%, 48%)" }} />
            ) : (
              <Bookmark />
            )}
          </IconButton>
        </>
      )}
    </Stack>
  );
}

PostActions.propTypes = {
  id: PropTypes.string,
  likeCount: PropTypes.number,
  liked: PropTypes.bool,
  disable: PropTypes.bool,
  replyCount: PropTypes.number,
  bookmarked: PropTypes.bool,
  openModal: PropTypes.func,
  content: PropTypes.string,
  imageUrls: PropTypes.array,
};
