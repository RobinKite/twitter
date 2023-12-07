import { Typography } from "@mui/material";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Container, CreatePost, ItemPost } from "@/components";
import { getPosts, resetPosts } from "@/redux/slices/postsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import useLoadPostsNew from "@/hooks/useLoadPostsNew";
import { useEffect } from "react";

export const Home = () => {
  const posts = useSelector((state) => state.posts.posts, shallowEqual);
  const avatarUrl = posts.length > 0 ? posts[0].user.avatarUrl : null;
  const dispatch = useDispatch();
  // useLoadPost(getPosts);
  // const [page, setPage] = useState(1);
  // const hasMore = useSelector((state) => state.posts.hasMore);
  // const fetchPosts = () => {
  //   setPage((prevState) => prevState + 1);

  //   if (hasMore) {
  //     dispatch(getPosts(page));
  //   }
  // };
  useEffect(() => {
    dispatch(resetPosts());
    dispatch(getPosts());
  }, [dispatch]);

  const fetchPosts = useLoadPostsNew(getPosts);
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
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchPosts}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
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
        </InfiniteScroll>
      </div>
    </Container>
  );
};
