import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../service/api";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: null,
    postComments: [],
  },
  reducers: {
    setPosts: (state, action) => {
      const combinedPosts = [...state.posts, ...action.payload];
      const uniquePostsSet = new Set(combinedPosts.map((post) => post.id));
      const uniquePostsArray = Array.from(uniquePostsSet, (postId) =>
        combinedPosts.find((post) => post.id === postId),
      );
      state.posts = uniquePostsArray;
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    deleteComment: (state, action) => {
      state.postComments.filter((comment) => comment.id !== action.payload);
    },
    deleteFromPost: (state, action) => {
      state.posts.filter((post) => post.id !== action.payload);
    },
    getPostId: (state, action) => {
      const postId = action.payload;
      // const selectedPost = state.posts.find((post) => post.id === postId);
      state.selectedPost = postId;
      // console.log(state);
      // console.log(action);
    },
    getPostComents: (state, action) => {
      const coment = action.payload;

      state.postComments = coment;
    },
  },
});

export const {
  setPosts,
  addPost,
  deleteComment,
  deleteFromPost,
  getPostId,
  getPostComents,
} = postsSlice.actions;
export default postsSlice.reducer;

export const axiosPostComments = (id) => async (dispatch) => {
  try {
    const response = await api.get(`posts/replies?postId=${id}&page=${0}&pageSize=${5}`);
    const comments = response.data.content;
    console.log(comments);
    dispatch(getPostComents(comments));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`posts/post?id=${id}`);
    const data = response.data;
    dispatch(getPostId(data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPosts = (currentPage) => async (dispatch) => {
  try {
    const response = await api.get(`posts/home?page=${currentPage}&pageSize=${12}`);
    // console.log(response);

    dispatch(setPosts(response.data.content));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const addPosts = (formData) => async (dispatch) => {
  try {
    const response = await api.post("posts/create", formData);
    const data = response.data;
    dispatch(addPost(data));
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`posts/delete?id=${id}`);
    await dispatch(deleteFromPost(id));
    // dispatch(getPosts());
  } catch (error) {
    console.error("Сталася помилка при видаленні поста:", error);
  }
};
