import { useLoadPost } from "@/hooks/useLoadPost";
import { Typography } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { Container, CreatePost, ItemPost } from "@/components";

export const Home = () => {
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;

  useLoadPost();

  return (
    <Container>
      <div style={{ border: "1px solid rgb(239, 243, 244)" }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: 25,
            margin: "20px auto",
            textAlign: "center",
            fontWeight: "700",
          }}>
          Following
        </Typography>
        <CreatePost avatarUrl={avatarUrl} />
        {posts.map((post) => (
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
        ))}
      </div>
    </Container>
  );
};
