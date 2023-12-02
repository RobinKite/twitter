import { Avatar, Stack, IconButton, Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FollowButton, ItemPost } from "@/components";
import { ArrowBack, More, Message } from "@/icons";
import { client } from "@/services";
import { Endpoint } from "@/constants";
import { wrapperSx, headerSx, avatarSx } from "./styles";

const Header = ({ userId, fullName, posts, isFollowed, withFollowButton }) => {
  const navigate = useNavigate();

  return (
    <Stack sx={headerSx}>
      <IconButton onClick={() => navigate(-1)} sx={{ marginRight: "0.75rem" }}>
        <ArrowBack size={20} />
      </IconButton>
      <Box marginTop="0.125rem">
        <Typography
          sx={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.4 }}
          component="h2">
          {fullName}
        </Typography>
        <Typography sx={{ fontSize: "0.8rem", marginBottom: "0.1rem" }}>
          {posts} Posts
        </Typography>
      </Box>
      {withFollowButton && (
        <Stack sx={{ marginLeft: "auto", justifyContent: "center" }}>
          <FollowButton id={userId} isFollowedByUser={isFollowed} />
        </Stack>
      )}
    </Stack>
  );
};

Header.propTypes = {
  userId: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  posts: PropTypes.number.isRequired,
  isFollowed: PropTypes.bool.isRequired,
  withFollowButton: PropTypes.bool.isRequired,
};

export const UserProfile = () => {
  const { id: userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // TODO: 👉 Move to redux
  useEffect(() => {
    const controller = new AbortController();
    client
      .get(Endpoint.USERS + `/${userId}`, { signal: controller.signal })
      .then((response) => setUser(response.data));
    return () => controller.abort();
  }, [userId]);

  // TODO: 👉 Move to redux
  useEffect(() => {
    const controller = new AbortController();
    client
      .get(Endpoint.POSTS, { signal: controller.signal, params: { id: userId } })
      .then(({ data }) => setPosts(data.content));
    return () => controller.abort();
  }, [userId]);

  if (!user) return null;

  return (
    <Stack sx={wrapperSx}>
      <Header fullName={user.fullName} posts={posts.length} withFollowButton={false} />
      <Stack>
        <Box
          sx={{ objectFit: "cover", width: "100%", maxHeight: 200 }}
          component="img"
          src={user.imageUrl}
          alt="Background"
        />
        <Stack sx={{ padding: "0.75rem 1rem 0" }}>
          <Stack sx={{ flexDirection: "row" }}>
            <Box sx={{ marginRight: "auto", position: "relative" }}>
              <Avatar src={user.avatarUrl} sx={avatarSx} />
            </Box>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: "0.5rem",
              }}>
              <IconButton sx={{ border: "1px solid #CFD9DE" }}>
                <More />
              </IconButton>
              <IconButton sx={{ border: "1px solid #CFD9DE" }}>
                <Message />
              </IconButton>
              <FollowButton id={user.id} isFollowedByUser={user.isFollowedByUser} />
            </Stack>
          </Stack>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 800,
              lineHeight: 1.25,
              marginTop: "0.25rem",
            }}>
            {user.fullName}
          </Typography>
          <Typography
            sx={{ fontSize: "0.9175rem", color: "#536471", marginBottom: "0.75rem" }}>
            @{user.userTag}
          </Typography>
          <Typography sx={{ fontSize: "0.9175rem", marginBottom: "0.75rem" }}>
            {user.bio}
          </Typography>
          <Stack direction="row" sx={{ columnGap: "1.5rem" }}>
            <p style={{ fontSize: "0.85rem", color: "#536471" }}>
              <span style={{ color: "black", marginRight: "0.25rem", fontWeight: 600 }}>
                {user.following}
              </span>
              Following
            </p>
            <p style={{ fontSize: "0.85rem", color: "#536471" }}>
              <span style={{ color: "black", marginRight: "0.25rem", fontWeight: 600 }}>
                {user.followers}
              </span>
              Followers
            </p>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ marginTop: "0.5rem" }}>
        {posts.map((post) => (
          <ItemPost
            key={post.id}
            avatarUrl={post.user?.avatarUrl}
            fullName={post.user?.fullName}
            replyCount={post.replyCount}
            id={post.id}
            content={post.body}
            likeCount={post.likeCount}
            liked={post.liked}
            imageUrls={post.imageUrls}
          />
        ))}
      </Stack>
    </Stack>
  );
};
