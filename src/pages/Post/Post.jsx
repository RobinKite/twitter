import { IconButton, Typography, styled, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ItemPost, Container, CommentPost } from "@/components";
import { ArrowBack } from "@/icons";
import { PostType } from "@/constants";
import { axiosPostComments, getPostById, resetPosts } from "@/redux/slices/postsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { sortByCreatedAt } from "@/utils";
import useInfinstyScroll from "@/hooks/useInfinstyScroll";

const HeaderPage = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
  gap: 20,
}));

export const Post = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.selectedPost);
  const postComments = useSelector((state) => state.posts.postComments);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectToPost = () => {
    navigate(`/`, { replace: true });
  };

  useEffect(() => {
    dispatch(resetPosts());
    dispatch(getPostById(id));
    dispatch(axiosPostComments(null, id));
  }, [dispatch, id]);

  return (
    <Container>
      <HeaderPage>
        <IconButton onClick={redirectToPost}>
          <ArrowBack size={25} />
        </IconButton>

        <Typography variant="h6">POST</Typography>
      </HeaderPage>
      {post ? (
        <div>
          <ItemPost key={post.id} post={post} />
        </div>
      ) : (
        <div>The post is deleted</div>
      )}

      <CommentPost
        id={id}
        placeholder="Post your reply"
        buttonName="Reply"
        type={PostType.REPLY}
      />
      <InfiniteScroll
        dataLength={postComments.length}
        next={useInfinstyScroll({
          callback: axiosPostComments,
          slice: "posts",
          id: id,
        })}
        hasMore={true}>
        {sortByCreatedAt(postComments)?.map((post) => (
          <ItemPost key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </Container>
  );
};
