import { IconButton, Typography, styled, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CommentPost, ItemPost } from "../../components";
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

  // useEffect(() => {

  // }, [dispatch, id]);

  return (
    <>
      <HeaderPage>
        <IconButton onClick={redirectToPost}>
          <ArrowBack size={25} />
        </IconButton>

        <Typography variant="h6">POST</Typography>
      </HeaderPage>
      {post ? (
        <div>
          <ItemPost
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
        <div>Loading...</div>
      )}

      <CommentPost id={id} />
      {/* .sort(compareByDate) */}
      {postComments?.map((e) => (
        <ItemPost
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
    </>
  );
};
