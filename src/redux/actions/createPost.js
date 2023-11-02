import {
  ADD_TO_POST,
  SET_POSTS,
  GET_POST,
  DELETE_FROM_POST,
  LIKE_POST,
  UNLIKE_POST,
} from "../types/createPost";
import { api } from "../../service/api";

export const addPost = (post) => {
  return {
    type: ADD_TO_POST,
    payload: post,
  };
};

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});
export const deleteFromPost = (post) => ({
  type: DELETE_FROM_POST,
  payload: post,
});

export const likePost = (postId,likeCount,liked) => {
  return {
    type: LIKE_POST,
    payload: {
      postId,
      likeCount,
      liked,
    },
  };
};
export const likePostAxios = (postId) => {
  return async (dispatch) => {
    try {
      const requestData = {
        postId: postId,
      };
      await api
        .post(`likes/like`, requestData)

        .then((r) => dispatch(likePost(r.data.likeCount)));
    } catch (error) {
      console.error("Сталася помилка :", error);
    }
  };
};


export const getPosts = () => {
  return async (dispatch) => {
    try {
      // const { data } = await api.get("posts/home");
      api.get("posts/home").then((r) => dispatch(setPosts(r.data.content)));
      // setPosts(data.content)
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};
export const addPosts = (formData) => {
  return async (dispatch) => {
    try {
      // const { data } = await api.get("posts/home");
      api
        .post("posts/create", formData)
        .then((response) => response)
        .then(({ data }) => {
          console.log(data);
          dispatch(addPost(data));
          api.get("posts/home").then((r) => {
            dispatch(setPosts(r.data.content));
          });
        });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.delete(`posts/delete?id=${id}`);

      dispatch(deleteFromPost(id));
      api.get("posts/home").then((r) => {
        dispatch(setPosts(r.data.content));
      });
    } catch (error) {
      console.error("Сталася помилка при видаленні поста:", error);
    }
  };
};
