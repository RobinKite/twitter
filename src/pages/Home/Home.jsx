import { useLoadPost } from "@/hooks/useLoadPost";
import { Typography, useMediaQuery } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { CreatePost, ItemPost } from "../../components";

export const Home = () => {
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
  const isMobile = useMediaQuery("(max-width: 767px)");

  useLoadPost();

  return (
    <div style={{ border: "1px solid rgb(239, 243, 244)" }}>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          fontSize: 25,
          margin: "20px auto",
          textAlign: "center",
          fontWeight: "700",
          ...(isMobile && { mt: "52px", mb: 0 }),
        }}>
        Following
      </Typography>
      <CreatePost avatarUrl={avatarUrl} />
      {posts.map((p) => (
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
  );
};
