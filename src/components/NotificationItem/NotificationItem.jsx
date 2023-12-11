import { Heart, ProfileIcon, Repost } from "@/icons";
import { Avatar, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { tweetImgEvenSX, tweetImgOddSX, tweetImgSX } from "../ItemPost/styleSX";
import PropTypes from "prop-types";
import { ContainerSX } from "./styleSX";

export const NotificationItem = ({ notification }) => {
  const types = {
    like: "LIKE",
    tweet: "TWEET",
    follower: "FOLLOWER",
  };

  const { initiator, post } = notification;
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      {notification.type === types.follower && (
        <ContainerSX direction="row" onClick={() => handleClick(initiator.id)}>
          <Stack>
            <ProfileIcon size={30} fill="#1d9bf0" />
          </Stack>
          <Stack flexGrow={1}>
            <Avatar src={initiator.avatarUrl} alt={`${initiator.fullName}'s avatar`} />
            <Typography sx={{ fontWeight: 700 }}>
              {initiator.fullName}
              <Typography variant="span" sx={{ fontWeight: 400 }}>
                &#x20;followed you.
              </Typography>
            </Typography>
          </Stack>
        </ContainerSX>
      )}
      {notification.type === types.like && (
        <ContainerSX direction="row" onClick={() => handleClick(initiator.id)}>
          <Stack sx={{ minWidth: "30px" }}>
            <Heart size={30} color="#f91880" />
          </Stack>
          <Stack flexGrow={1}>
            <Avatar src={initiator.avatarUrl} alt={`${initiator.fullName}'s avatar`} />
            <Typography sx={{ fontWeight: 700 }}>
              {initiator.fullName}
              <Typography variant="span" sx={{ fontWeight: 400 }}>
                &#x20;liked your post.
              </Typography>
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
          </Stack>
        </ContainerSX>
      )}
      {notification.type === types.tweet && (
        <ContainerSX direction="row" onClick={() => handleClick(initiator.id)}>
          <Stack sx={{ minWidth: "30px" }}>
            <Repost fill="#00ba7c" style={{ width: "30px", height: "30px" }} />
          </Stack>
          <Stack flexGrow={1}>
            <Avatar src={initiator.avatarUrl} alt={`${initiator.fullName}'s avatar`} />
            <Typography sx={{ fontWeight: 700 }}>
              {initiator.fullName}
              <Typography variant="span" sx={{ fontWeight: 400 }}>
                &#x20;reposted your post.
              </Typography>
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
          </Stack>
        </ContainerSX>
      )}
    </>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object,
};
