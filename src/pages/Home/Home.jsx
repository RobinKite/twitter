import { useLoadPost } from "@/hook/useLoadPost";
import { Typography } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";
import { CreatePost, ItemPost } from "../../components";

export const Home = () => {
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;

  useLoadPost();

  return (
    <>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          fontSize: 25,
          marginLeft: "35%",
          marginTop: "20px",
          fontWeight: "700",
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
      {/* </TabPanel> */}
      {/* <TabPanel value={1}></TabPanel> */}
      {/* </ProfileTabs> */}
    </>
  );
};
