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
      state.posts = action.payload.filter(
        (newPost) => !state.posts.some((existingPost) => existingPost.id === newPost.id),
      );
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deleteComment: (state, action) => {
      state.postComments.filter((comment) => comment.id !== action.payload);
    },
    deleteFromPost: (state, action) => {
      state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, deleteComment, deleteFromPost } = postsSlice.actions;
export default postsSlice.reducer;

export const getPosts = (currentPage) => async (dispatch) => {
  try {
    const response = await api.get(`posts/home?&page=${currentPage}&pageSize=${10}`);

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
