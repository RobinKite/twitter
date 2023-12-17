import { Box, Typography } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Container, ItemPost } from "@/components";
import { useEffect } from "react";
import { getAllBookmarkPosts } from "@/redux/slices/userSlice";

export const Bookmarks = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.user.userTag);
  const allBookmarkPosts = useSelector((state) => state.user.bookmarkPosts, shallowEqual);

  useEffect(() => {
    dispatch(getAllBookmarkPosts());
  }, [dispatch]);

  return (
    <Container>
      <Box
        sx={{
          borderRight: "1px solid #EFF3F4",
          borderLeft: "1px solid #EFF3F4",
          height: "100vh",
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
        {allBookmarkPosts.length > 0 ? (
          allBookmarkPosts.map((post) => (
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
          ))
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
      </Box>
    </Container>
  );
};
