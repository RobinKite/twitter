import { Stack, Typography, Box } from "@mui/material";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Container, WelcomeMessage, HomePostsContainer, CommentPost } from "@/components";
import { PostType } from "@/constants";
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
      <Box style={{ border: "1px solid rgb(239, 243, 244)", flexGrow: 1 }}>
        <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <Typography variant="h2" component="h2" sx={homeHeaderSX}>
            Following
          </Typography>
        </Stack>

        <CommentPost
          placeholder="What is happening?!"
          buttonName="Post"
          type={PostType.TWEET}
        />
        {!accountUser.following && !posts.length && (
          <WelcomeMessage
            stylesSX={{
              marginTop: "0.75rem",
              marginBottom: "1rem",
              padding: "0 20px",
              fontWeight: 500,
              textAlign: "center",
            }}
          />
        )}
        <HomePostsContainer />
      </Box>
    </Container>
  );
};
