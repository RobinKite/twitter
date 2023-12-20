import { Avatar, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { tweetImgEvenSX, tweetImgOddSX, tweetImgSX } from "../ItemPost/styleSX";
import { PostType } from "@/constants";
import { getTimeDifference } from "@/utils/date";
import { PostActions } from "../PostActions/PostActions";

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
          sx={{
            gap: "12px",
            borderBottom: "0.6px solid #eff3f4",
            padding: "12px 16px",
            cursor: "pointer",
            transition: "background-color 0.2s linear",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.03)" },
          }}>
          <Avatar
            src={initiator.avatarUrl}
            alt={`${initiator.fullName}'s avatar`}
            onClick={() => handleClick(initiator.id)}
          />
          <Stack sx={{ flexGrow: 1 }}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ fontSize: 15, color: "#536471" }}>
              <Typography
                onClick={() => handleClick(initiator.id)}
                variant="span"
                sx={{
                  fontWeight: 700,
                  color: "#0f1419",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}>
                {initiator.fullName}
              </Typography>
              <Typography variant="span" onClick={() => handleClick(initiator.id)}>
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
                onClick={() => handleClick(post.parentPost.user.id)}
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
            <PostActions post={post} disable={post.disable} />
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
