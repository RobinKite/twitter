import { IconButton, Typography, styled, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ItemPost, Container, CommentPost } from "@/components";
import { ArrowBack } from "@/icons";
import { PostType } from "@/constants";
import { axiosPostComments, getPostById } from "@/redux/slices/postsSlice";

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
    dispatch(getPostById(id));
    dispatch(axiosPostComments(id));
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

      <CommentPost
        id={id}
        placeholder="Post your reply"
        buttonName="Reply"
        type={PostType.REPLY}
      />
      {postComments?.map((comment) => (
        <ItemPost
          postUser={comment.user}
          replyCount={comment.replyCount}
          key={comment.id}
          content={comment.body}
          imageUrls={comment.imageUrls}
          id={comment.id}
          likeCount={comment.likeCount}
          liked={comment.liked}
          avatarUrl={comment.user.avatarUrl}
          fullName={comment.user.fullName}
        />
      ))}
    </Container>
  );
};
