import { Box, Typography, Stack } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Container, ItemPost } from "@/components";
import { useEffect } from "react";
import { getAllBookmarkPosts, resetPostsLiked } from "@/redux/slices/userSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinstyScroll from "@/hooks/useInfinstyScroll";

export const Bookmarks = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.user.userTag);
  const allBookmarkPosts = useSelector((state) => state.user.bookmarkPosts, shallowEqual);

  useEffect(() => {
    dispatch(resetPostsLiked());
    dispatch(getAllBookmarkPosts());
  }, [dispatch]);

  return (
    <Container>
      <Stack
        sx={{
          flexGrow: 1,
          borderRight: "1px solid #EFF3F4",
          borderLeft: "1px solid #EFF3F4",
        }}>
        <Typography
          variant="h1"
          sx={{
            padding: "0 16px",
            color: "#0F1419",
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "10px",
          }}>
          Bookmarks
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: "4px",
            padding: "0 16px",
            color: "#536471",
            fontSize: "13px",
          }}>
          @{email}
        </Typography>
        <InfiniteScroll
          dataLength={allBookmarkPosts.length}
          next={useInfinstyScroll({ callback: getAllBookmarkPosts, slice: "user" })}
          hasMore={true}>
          {allBookmarkPosts.length > 0 ? (
            allBookmarkPosts.map((post) => <ItemPost key={post.id} post={post} />)
          ) : (
            <Box
              sx={{ margin: "32px auto", padding: "0 32px", maxWidth: "calc(5 * 80px)" }}>
              <Typography
                variant="h2"
                sx={{
                  color: "#0F1419",
                  fontSize: "30px",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}>
                Save posts for later
              </Typography>
              <Typography variant="h5" sx={{ color: "#536471", fontSize: "15px" }}>
                Bookmark posts to easily find them again in the future.
              </Typography>
            </Box>
          )}
        </InfiniteScroll>
      </Stack>
    </Container>
  );
};
