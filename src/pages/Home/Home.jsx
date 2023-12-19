import { Stack, Typography, Box } from "@mui/material";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Container, WelcomeMessage, HomePostsContainer, CommentPost } from "@/components";
import { PostType } from "@/constants";
import { homeHeaderSX } from "./stylesSX";
import { getPosts, getPopularPosts, resetPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinstyScroll from "@/hooks/useInfinstyScroll";

export const Home = () => {
  const accountUser = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  // const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
  // const popularPosts = useSelector((state) => state.posts.popularPosts, shallowEqual);
  // const renderPosts = accountUser.following ? posts : popularPosts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPosts());
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
        {/* <CreatePost avatarUrl={accountUser.avatarUrl} /> */}
        <InfiniteScroll
          dataLength={posts.length}
          next={useInfinstyScroll({ callback: getPosts, slice: "posts" })}
          hasMore={true}>
          <HomePostsContainer />
        </InfiniteScroll>
        {/* {renderPosts.map((post) => (
          <ItemPost
            key={post.id}
            postUser={post.user}
            avatarUrl={post.user.avatarUrl}
            fullName={post.user.fullName}
            content={post.body}
            replyCount={post.replyCount}
            imageUrls={post.imageUrls}
            id={post.id}
            likeCount={post.likeCount}
            liked={post.liked}
            bookmarked={post.bookmarked}
          />
        ))} */}
      </Box>
    </Container>
  );
};
