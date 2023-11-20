import { IconButton, Typography, styled, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CommentPost, ItemPost } from "../../components";
import { api } from "../../service/api";
import { compareByDate } from "../../utils";
import ArrowBack from "../../assets/icons/arrow.svg?react";

const HeaderPage = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0 5px 20px",
  gap: 20,
}));

export const Post = () => {
  const { id } = useParams();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [postDetails, setPostDetails] = useState(null);
  const [postComments, setPostComments] = useState([]);
  // console.log(postComments);

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
  const updateComment = (newComment) => {
    setPostComments([...postComments, newComment]);
  };
  // Оновлення, видаляючи пост
  const handlePostDeleted = (id) => {
    const updatedComments = postComments.filter((comment) => comment.id !== id);

    setPostComments(updatedComments);
  };

  // Код для сторінки PegesPost
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
      api
        .get(`posts/replies?postId=${id}&page=${0}&pageSize=${5}`)
        .then((response) => {
          const newComments = response.data.content;
          // setPostComments(newComments);
          setPostComments(newComments);

          // console.log(newComments);
        })
        .catch((error) => {
          console.error("Помилка отримання деталей поста:", error);
        });
    }
  }, [isAuthenticated, id]);

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
            avatarUrl={postDetails.user.avatarUrl}
            fullName={postDetails.user.fullName}
            key={postDetails.id}
            content={postDetails.body}
            imageUrls={postDetails.imageUrls}
            id={postDetails.id}
            likeCount={postDetails.likeCount}
            liked={postDetails.liked}
            replyCount={postDetails.replyCount}
            updateComment={updateComment}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {/* */}
      <CommentPost id={id} updateComment={updateComment} />

      {postComments?.sort(compareByDate).map((e) => (
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
          onPostDeleted={handlePostDeleted}
        />
      ))}

      {/* Loading indicator */}
      {/* {isLoading && <div>Loading more comments...</div>} */}

      {/* Intersection Observer target for infinite scroll */}
      {/* <div ref={lastCommentRef}></div> */}
    </>
  );
};
