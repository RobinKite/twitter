import { IconButton, Typography, styled, Stack, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ItemPost, Container, CommentPost } from "@/components";
import { ArrowBack } from "@/icons";
import { PostType } from "@/constants";
import {
  axiosPostComments,
  fetchPostsOrRedirect,
  resetPosts,
} from "@/redux/slices/postsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { sortByCreatedAt } from "@/utils";
import useInfinityScroll from "@/hooks/useInfinityScroll";

const HeaderPage = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
  gap: 20,
  position: "sticky",
  top: 0,
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255,255,255,0.85)",
  zIndex: 1,
}));

export const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.selectedPost);
  const postComments = useSelector((state) => state.posts.postComments);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetPosts());
    dispatch(fetchPostsOrRedirect(id, navigate));
    dispatch(axiosPostComments(null, id));
  }, [dispatch, id]);

  return (
    <Container>
      <Stack
        sx={{
          flexGrow: 1,
          borderLeft: "1px solid #EFF3F4",
          borderRight: "1px solid #EFF3F4",
        }}>
        <HeaderPage>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack size={20} />
          </IconButton>
          <Typography
            sx={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.4 }}
            component="h2">
            Post
          </Typography>
        </HeaderPage>
        <ItemPost key={post?.id} post={post} />
        <CommentPost
          id={id}
          placeholder="Post your reply"
          buttonName="Reply"
          type={PostType.REPLY}
        />
        <InfiniteScroll
          dataLength={postComments.length}
          next={useInfinityScroll({
            callback: axiosPostComments,
            slice: "posts",
            id: id,
          })}
          hasMore={true}>
          {sortByCreatedAt(postComments)?.map((post) => (
            <ItemPost key={post.id} post={post} />
          ))}
        </InfiniteScroll>
      </Stack>
    </Container>
  );
};
