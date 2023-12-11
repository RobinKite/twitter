import { Typography } from "@mui/material";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Container, CreatePost, ItemPost } from "@/components";
import { getPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";

export const Home = () => {
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
        {posts &&
          posts.map((p) => (
            <ItemPost
              key={p.id}
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
