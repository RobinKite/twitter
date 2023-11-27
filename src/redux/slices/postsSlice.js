import { createSlice } from "@reduxjs/toolkit";
import { client } from "@/services";
import { Endpoint } from "@/constants";

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
  },
});

export const { setPosts, addPost, deleteComment, deleteFromPost } = postsSlice.actions;
export default postsSlice.reducer;

export const getPosts = (page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_MY_POSTS, {
      params: { page: page, pageSize: 12 },
    });
    console.log(response);

    dispatch(setPosts(response.data.content));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const addPosts = (formData) => async (dispatch) => {
  try {
    const response = await client.post(Endpoint.CREATE_POST, formData);
    const data = response.data;
    dispatch(addPost(data));
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await client.delete(Endpoint.DELETE_POST, { params: { id } });
    await dispatch(deleteFromPost(id));
    // dispatch(getPosts());
  } catch (error) {
    console.error("Сталася помилка при видаленні поста:", error);
  }
};
