import { Avatar, Stack, Typography } from "@mui/material";
import { ContainerSX } from "./styleSX";
import { Repost } from "@/icons";
import { tweetImgEvenSX, tweetImgOddSX, tweetImgSX } from "../ItemPost/styleSX";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export function RepostItemNotification({ notification }) {
  const { initiator, post } = notification;
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <ContainerSX
      direction="row"
      onClick={() => handleClick(initiator.id)}
      sx={{
        transition: "background-color 0.2s linear",
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.03)" },
      }}>
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
                  border: post.imageUrls.length > 1 ? "" : "1px solid rgb(207,217,222)",
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
  );
}
RepostItemNotification.propTypes = {
  notification: PropTypes.object,
};
