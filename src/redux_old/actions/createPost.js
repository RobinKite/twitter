import {
  ADD_TO_POST,
  SET_POSTS,
  GET_POST,
  DELETE_FROM_POST,
  // LIKE_POST,
  // DISLIKE_POST,
  GET_POST_BY_ID,
  DELETE_COMMENT,
} from "../types/createPost";
import { api } from "../../service/api";

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const getPosts = (currentPage) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`posts/home?&page=${currentPage}&pageSize=${10}`);
      // ?&page=${currentPage}&pageSize=${10}
      dispatch(setPosts(response.data.content));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
};
export const addPost = (post) => {
  return {
    type: ADD_TO_POST,
    payload: post,
  };
};
export const addPosts = (formData) => {
  return async (dispatch) => {
    try {
      const response = await api.post("posts/create", formData);
      const data = response.data;
      dispatch(addPost(data));
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

export const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  payload: commentId,
});

export const deleteFromPost = (id) => ({
  type: DELETE_FROM_POST,
  payload: id,
});
export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.delete(`posts/delete?id=${id}`);

      await dispatch(deleteFromPost(id));
      // dispatch(getPosts());
    } catch (error) {
      console.error("Сталася помилка при видаленні поста:", error);
    }
  };
};
// export const dislikePost = (postId, likeCount, liked) => {
//   return {
//     type: DISLIKE_POST,
//     payload: {
//       postId,
//       likeCount,
//       liked,
//     },
//   };
// };
// export const dislikePostAxios = (postId) => {
//   return async (dispatch) => {
//     try {
//       const response = await api.delete(`likes/unlike?id=${postId}`);
//       dispatch(dislikePost(postId, response.data.likeCount,));

//     } catch (error) {
//       console.error("Сталася помилка:", error);
//     }
//   };
// };

// export const likePost = (postId, likeCount, liked) => {
//   return {
//     type: LIKE_POST,
//     payload: {
//       postId,
//       likeCount,
//       liked,
//     },
//   };
// };
// export const likePostAxios = (postId) => {
//   return async (dispatch) => {
//     try {
//       const requestData = {
//         postId: postId,
//       };
//       await api
//         .post(`likes/like`, requestData)
//         .then((r) => dispatch(likePost(postId, r.data.likeCount, )));

//     } catch (error) {
//       console.error("Сталася помилка :", error);
//     }
//   };
// };
// export const likePostAxios = (postId) => {
//   return async (dispatch) => {
//     try {
//       const requestData = {
//         postId: postId,
//       };
//
//       const response = await api.post(`likes/like`, requestData);
//
//       const likeCount = response.data.likeCount;
//       const liked = true;

//       dispatch(likePost(postId, likeCount, liked));

//     } catch (error) {
//       console.error("Сталася помилка:", error);
//     }
//   };
// };