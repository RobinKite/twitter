import { IconButton, Typography, styled, Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CommentPost, ItemPost } from "../../components";

import ArrowBack from "../../assets/icons/arrow.svg?react";
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
  console.log(post);
  const postComments = useSelector((state) => state.posts.postComments);

  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  // const [postDetails, setPostDetails] = useState(null);
  // const [postComments, setPostComments] = useState([]);
  // console.log(postComments);
  const dispatch = useDispatch();
  // Налаштування infinity Scrol покищо не дуже працює
  // const [currentPage, setCurrentPage] = useState(0);
  // const [loadingComments, setLoadingComments] = useState(false);
  // const [hasMoreComments, setHasMoreComments] = useState(true);

  // const loadMoreComments = () => {
  //   if (hasMoreComments && !loadingComments) {
  //     setLoadingComments(true);
  //   }
  // };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight, scrollHeight } =
  //       document.documentElement;
  //     if (scrollTop + clientHeight >= scrollHeight && !loadingComments) {
  //       loadMoreComments();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [loadingComments, hasMoreComments]);

  // useEffect(() => {
  //   if (loadingComments) {
  //     api
  //       .get(`posts/replies?postId=${id}&page=${currentPage + 1}&pageSize=${5}`)
  //       .then((response) => {
  //         const newComments = response.data.;

  //         if (newComments.length > 0) {
  //           setPostComments((prevComments) => [...prevComments, ...newComments]);
  //           setCurrentPage((prevPage) => prevPage + 1);
  //         }
  //         else {
  //           setHasMoreComments(false);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error loading more comments:', error);
  //       })
  // .finally(() => {
  //   setLoadingComments(false);
  // });
  //   }
  // }, [loadingComments, currentPage, id]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     api
  //       .get(`posts/post?id=${id}`)
  //       .then((response) => {
  //         const postDetails = response.data;
  //         setPostDetails(postDetails);
  //       })
  //       .catch((error) => {
  //         console.error("Error loading post details:", error);
  //       });

  //     api
  //       .get(`posts/replies?postId=${id}&page=${0}&pageSize=${5}`)
  //       .then((response) => {
  //         const newComments = response.data.content;
  //         setPostComments(newComments);
  //       })
  //       .catch((error) => {
  //         console.error("Error loading initial comments:", error);
  //       });
  //   }
  // }, [isAuthenticated, id]);
  // console.log(postComments);
  // Роутер навігації переходу між сторінками
  const navigate = useNavigate();
  const redirectToPost = () => {
    navigate(`/`, { replace: true });
  };

  // Оновлення  додавання коментаря
  // const updateComment = (newComment) => {
  //   setPostComments([...postComments, newComment]);
  // };
  // // Оновлення, видаляючи пост
  // const handlePostDeleted = (id) => {
  //   const updatedComments = postComments.filter((comment) => comment.id !== id);

  //   setPostComments(updatedComments);
  // };

  // Код для сторінки PegesPost
  useEffect(() => {
    dispatch(getPostById(id));
    // if (isAuthenticated) {
    //   // TODO: Move function to postsSlice
    //   api
    //     .get(`posts/post?id=${id}`)
    //     .then((response) => {
    //       const postDetails = response.data;

    //       // console.log(response)
    //       setPostDetails(postDetails);
    //     })
    //     .catch((error) => {
    //       console.error("Помилка отримання деталей поста:", error);
    //     });
    // }
  }, [dispatch, id]);

  useEffect(() => {
    // if (isAuthenticated) {
    //   // TODO: Move function to postsSlice
    //   api
    //     .get(`posts/replies?postId=${id}&page=${0}&pageSize=${5}`)
    //     .then((response) => {
    //       const newComments = response.data.content;
    //       // setPostComments(newComments);
    //       setPostComments(newComments);
    dispatch(axiosPostComments(id));
    //       // console.log(newComments);
    //     })
    //     .catch((error) => {
    //       console.error("Помилка отримання деталей поста:", error);
    //     });
    // }
  }, [dispatch, id]);

  return (
    <>
      <HeaderPage>
        <IconButton onClick={redirectToPost}>
          <ArrowBack />
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
            // updateComment={updateComment}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {/* updateComment={updateComment} */}
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
          // onPostDeleted={handlePostDeleted}
        />
      ))}

      {/* Loading indicator */}
      {/* {isLoading && <div>Loading more comments...</div>} */}

      {/* Intersection Observer target for infinite scroll */}
      {/* <div ref={lastCommentRef}></div> */}
    </>
  );
};
