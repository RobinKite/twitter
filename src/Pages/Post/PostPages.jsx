import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemPost from "../../Components/ItemPost/ItemPost";
import { ReactComponent as ArrowBack } from "../Profile/svg/arrow.svg";
import { IconButton } from "@mui/material";
import { Typography, Box, styled } from "@mui/material";
import Post from "../../Components/Post/Post";
import ComentPost from "../../Components/ComentPost/ComentPost";
import { useNavigate } from "react-router-dom";
import {
  getPostById,
  getPostByID,
  getPostByIDAxios,
  getPosts,
} from "../../redux/actions/createPost";
import { api, compareByDate } from "../../service/api";
import InfiniteScroll from "react-infinite-scroll-component";
const HeaderPage = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
  gap: 20,
}));

const PostPages = ({}) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [postComments, setPostComments] = useState([]);
  const [postDetails, setPostDetails] = useState(null);
  const dispatch = useDispatch();
  // Роутер навігації переходу між сторінками
  const navigate = useNavigate();
  const redirectToPost = () => {
    navigate(`/`, { replace: true });
  };
  const { id } = useParams();



  const arrayLength = Array.isArray(postComments) ? postComments.length : 0;
  console.log(arrayLength)
  // Оновлюємо лайки
  
  const selectedPost = useSelector((state) =>
    state.posts.posts.find((post) => post.id === id)
  );
  const {  likeCount, liked, replyCount } = selectedPost || {};
 
 
  // console.log(postComments)
  

  // Оновлюємо стан додавання коментаря
  const updateComment = (newComment) => {
    setPostComments([...postComments, newComment]);
  };
  // Оновлюємо стан, видаляючи пост
  const handlePostDeleted = (id) => {
    const updatedComments = postComments.filter((comment) => comment.id !== id);
    console.log(updatedComments);
    setPostComments(updatedComments);
  };
  // console.log(postComent);

  useEffect(() => {
    if (isAuthenticated) {
      api
        .get(`posts/post?id=${id}`)
        .then((response) => {
          const postDetails = response.data;

          // console.log(response)
          setPostDetails(postDetails);
        })
        .catch((error) => {
          console.error("Помилка отримання деталей поста:", error);
        });
    }
  }, [isAuthenticated, id]);

  useEffect(() => {
    if (isAuthenticated) {
      // const params = {
      //   postId: id,
      //   page:  1,
      //   pageSize: 12,
      // };
      api
        .get(`posts/replies?postId=${id}`)
        .then((response) => {
          const newComments = response.data.content;
          setPostComments(newComments);

          console.log(newComments);
        })
        .catch((error) => {
          console.error("Помилка отримання деталей поста:", error);
        });
    }
  }, [postDetails]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     const params = {
  //       postId: id,
  //       page: page + 1,
  //       pageSize: 12,
  //     };

  //     api.get('posts/replies', { params: params })
  //     .then((response) => {
  //       const newComments = response.data.content;
  //
  //     .catch((error) => {
  //       console.error('Помилка отримання деталей поста:', error);
  //     });
  //   }
  // }, [isAuthenticated, id, page, pageSize]);

  return (
    <>
      <HeaderPage>
        <IconButton onClick={redirectToPost}>
          <ArrowBack />
        </IconButton>

        <Typography variant="h6">POST</Typography>
      </HeaderPage>
      {postDetails ? (
        <div>
          <ItemPost
            key={postDetails.id}
            content={postDetails.body}
            imageUrls={postDetails.imageUrls}
            id={postDetails.id}
            likeCount={likeCount}
            liked={liked}
            replyCount={arrayLength}
            updateComment={updateComment}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {/* */}
      <ComentPost id={id} updateComment={updateComment} />

      {postComments?.sort(compareByDate).map((e) => (
        <ItemPost
          replyCount={postComments.replyCount}
          key={e.id}
          content={e.body}
          imageUrls={e.imageUrls}
          id={e.id}
          likeCount={e.likeCount}
          liked={e.liked}
          onPostDeleted={handlePostDeleted}
        />
      ))}
    </>
  );
};
export default PostPages;
