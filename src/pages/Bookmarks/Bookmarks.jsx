import { Box, Typography, Stack } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Container, ItemPost } from "@/components";
import { useEffect } from "react";
import { getAllBookmarkPosts, resetPostsLiked } from "@/redux/slices/userSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinityScroll from "@/hooks/useInfinityScroll";

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
          borderRightWidth: "1px",
          borderRightStyle: "solid",
          borderRightColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.dark.light_grey
              : theme.palette.dark.border_grey,

          borderLefttWidth: "1px",
          borderLeftStyle: "solid",
          borderLeftColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.dark.light_grey
              : theme.palette.dark.border_grey,

          height: "100vh",
        }}>
        <Typography
          variant="h1"
          sx={{
            padding: "0 16px",
            // color: "#0F1419",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.light.secondary
                : theme.palette.dark.light_grey,
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
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.common.primary
                : theme.palette.dark.text_grey,
            // color: "#536471",
            fontSize: "13px",
          }}>
          @{email}
        </Typography>
        <InfiniteScroll
          dataLength={allBookmarkPosts.length}
          next={useInfinityScroll({ callback: getAllBookmarkPosts, slice: "user" })}
          hasMore={true}>
          {allBookmarkPosts.length > 0 ? (
            allBookmarkPosts.map((post) => <ItemPost key={post.id} post={post} />)
          ) : (
            <Box
              sx={{ margin: "32px auto", padding: "0 32px", maxWidth: "calc(5 * 80px)" }}>
              <Typography
                variant="h2"
                sx={{
                  // color: "#0F1419",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.light.secondary
                      : theme.palette.dark.light_grey,
                  // theme.palette[theme.palette.mode].primary
                  fontSize: "30px",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}>
                Save posts for later
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.common.primary
                      : theme.palette.dark.text_grey,
                  // color: "#536471",
                  fontSize: "15px",
                }}>
                Bookmark posts to easily find them again in the future.
              </Typography>
            </Box>
          )}
        </InfiniteScroll>
      </Stack>
    </Container>
  );
};
