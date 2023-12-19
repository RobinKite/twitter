import { IconButton, Typography, styled, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CommentPost, ItemPost, Container } from "@/components";
import { ArrowBack } from "@/icons";
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
          <ItemPost
            postUser={post.user}
            avatarUrl={post.user.avatarUrl}
            fullName={post.user.fullName}
            key={post.id}
            content={post.body}
            imageUrls={post.imageUrls}
            id={post.id}
            likeCount={post.likeCount}
            liked={post.liked}
            replyCount={post.replyCount}
          />
        </div>
      ) : (
        <div>The post is deleted</div>
      )}

      <CommentPost id={id} />

      <InfiniteScroll
        dataLength={postComments.length}
        next={useInfinstyScroll({
          callback: axiosPostComments,
          slice: "posts",
          id: id,
        })}
        hasMore={true}>
        {sortByCreatedAt(postComments)?.map((e) => (
          <ItemPost
            postUser={e.user}
            replyCount={e.replyCount}
            key={e.id}
            content={e.body}
            imageUrls={e.imageUrls}
            id={e.id}
            likeCount={e.likeCount}
            liked={e.liked}
            avatarUrl={e.user.avatarUrl}
            fullName={e.user.fullName}
          />
        ))}
      </InfiniteScroll>
    </Container>
  );
};
