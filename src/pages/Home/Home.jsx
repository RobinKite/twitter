import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Container, CreatePost, HomePostsContainer, WelcomeMessage } from "@/components";
import { homeHeaderSX } from "./stylesSX";
import { getPopularPosts, getPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";

export const Home = () => {
  const accountUser = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getPopularPosts());
  }, [dispatch]);

  return (
    <Container>
      <Stack sx={{ border: "1px solid rgb(239, 243, 244)" }}>
        <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <Typography variant="h2" component="h2" sx={homeHeaderSX}>
            Following
          </Typography>
        </Stack>

        {!accountUser.following && !posts.length && (
          <WelcomeMessage
            stylesSX={{
              marginBottom: "15px",
              padding: "0 20px",
              fontWeight: 500,
              textAlign: "center",
            }}
          />
        )}
        <CreatePost avatarUrl={accountUser.avatarUrl} />
        <HomePostsContainer />
      </Stack>
    </Container>
  );
};
