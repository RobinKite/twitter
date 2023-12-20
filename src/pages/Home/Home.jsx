import { Stack, Typography, useTheme, Box } from "@mui/material";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Container, WelcomeMessage, HomePostsContainer, CommentPost } from "@/components";
import { PostType } from "@/constants";
import { homeHeaderSX } from "./stylesSX";
import { getPosts, getPopularPosts, resetPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinityScroll from "@/hooks/useInfinityScroll";
import { Themes } from "@/themes/theme";

export const Home = () => {
  const theme = useTheme();
  const accountUser = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPosts());
    dispatch(getPosts());
    dispatch(getPopularPosts());
  }, [dispatch]);
  return (
    <Container>
      <Box
        style={{
          flexGrow: 1,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor:
            theme.palette.mode === Themes.LIGHT
              ? theme.palette.dark.light_grey
              : theme.palette.dark.border_grey,
        }}>
        <Stack sx={{ flexDirection: "row", justifyContent: "center" }}>
          <Typography variant="h2" component="h2" sx={homeHeaderSX}>
            Following
          </Typography>
        </Stack>

        <CommentPost
          placeholder="What is happening?!"
          buttonName="Post"
          type={PostType.TWEET}
        />
        {!accountUser.following && !posts.length && <WelcomeMessage />}
        <InfiniteScroll
          dataLength={posts.length}
          next={useInfinityScroll({ callback: getPosts, slice: "posts" })}
          hasMore={true}>
          <HomePostsContainer />
        </InfiniteScroll>
      </Box>
    </Container>
  );
};
