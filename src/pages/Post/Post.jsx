import { IconButton, Typography, styled, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CommentPost, ItemPost, Container } from "@/components";
import { ArrowBack } from "@/icons";
import { axiosPostComments, getPostById } from "@/redux/slices/postsSlice";
// import { compareByDate } from "@/utils";

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
  // console.log(postComments);
  const dispatch = useDispatch();
  // Налаштування infinity Scrol покищо не дуже працює

  // Роутер навігації переходу між сторінками
  const navigate = useNavigate();
  const redirectToPost = () => {
    navigate(`/`, { replace: true });
  };

  // Оновлення  додавання коментаря

  // Код для сторінки PegesPost
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
          <ItemPost key={post.id} post={post} />
        </div>
      ) : (
        <div>The post is deleted</div>
      )}

      <CommentPost id={id} />
      {/* .sort(compareByDate) */}
      {postComments?.map((post) => (
        <ItemPost key={post.id} post={post} />
      ))}
    </Container>
  );
};
