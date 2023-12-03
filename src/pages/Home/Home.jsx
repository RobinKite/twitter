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
        {posts.map((p) => (
          <ItemPost
            key={p.id}
            postUser={p.user}
            avatarUrl={p.user.avatarUrl}
            fullName={p.user.fullName}
            content={p.body}
            replyCount={p.replyCount}
            imageUrls={p.imageUrls}
            id={p.id}
            likeCount={p.likeCount}
            liked={p.liked}
          />
        ))}
      </div>
    </Container>
  );
};
