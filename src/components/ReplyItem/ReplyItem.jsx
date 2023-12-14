import { Avatar, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { tweetImgEvenSX, tweetImgOddSX, tweetImgSX } from "../ItemPost/styleSX";
import { PostActions } from "../ItemPost/ItemPost";
import { PostType } from "@/constants";
import { getTimeDifference } from "@/utils/date";

const ReplyItem = ({ reply }) => {
  const navigate = useNavigate();
  const { initiator, post } = reply;

  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <>
      {reply.type === PostType.REPLY && (
        <Stack
          direction="row"
          sx={{ gap: "12px", borderBottom: "0.6px solid #eff3f4", padding: "12px 16px" }}>
          <Avatar src={initiator.avatarUrl} alt={`${initiator.fullName}'s avatar`} />
          <Stack sx={{ flexGrow: 1 }}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ fontSize: 15, color: "#536471" }}>
              <Typography
                variant="span"
                sx={{
                  fontWeight: 700,
                  color: "#0f1419",
                }}>
                {initiator.fullName}
              </Typography>
              <Typography variant="span">
                {"\u00A0"}@{initiator.userTag}
              </Typography>
              <Typography variant="span" sx={{ margin: "0 4px" }}>
                &middot;
              </Typography>
              <Typography variant="span"> {getTimeDifference(post.createdAt)}</Typography>
            </Stack>
            <Typography variant="span" sx={{ marginBottom: "6px" }}>
              replying to &#32;
              <Typography
                variant="span"
                onClick={() => handleClick(initiator.id)}
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#1d9bf0",
                }}>{`@${post.parentPost.user.userTag}`}</Typography>
            </Typography>
            <Stack>{post.body}</Stack>
            {post.imageUrls.length > 0 && (
              <Stack
                sx={
                  post.imageUrls.length > 1
                    ? post.imageUrls.length % 2
                      ? tweetImgOddSX
                      : tweetImgEvenSX
                    : tweetImgSX
                }>
                {post.imageUrls.map((imageUrl, index) => (
                  <img
                    style={{
                      border:
                        post.imageUrls.length > 1 ? "" : "1px solid rgb(207,217,222)",
                    }}
                    key={index}
                    src={imageUrl}
                    alt={`${index}`}
                  />
                ))}
              </Stack>
            )}
            <PostActions
              id={post.id}
              likeCount={post.likeCount}
              liked={post.liked}
              disable={post.disable}
              replyCount={post.replyCount}
              bookmarked={post.bookmarked}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default ReplyItem;

ReplyItem.propTypes = {
  reply: PropTypes.object,
};
