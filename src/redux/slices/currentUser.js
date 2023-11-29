// import { Endpoint } from "@/constants";
// import { Endpoint } from "@/constants";
import { Endpoint } from "@/constants";
import { client } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
    currentPosts: [],
    currentLikedPosts: [],
  },
  reducers: {
    setCurrentUser: (state, action) => {
      const info = action.payload;
      // console.log(info);
      state.user = info;
    },
    setCurrentPosts: (state, action) => {
      const newPost = action.payload;
      console.log(newPost);
      state.currentPosts = newPost;
    },
    // clearCurrentUser: (state) => {
    //   state.user = null;
    // },
    setCurrentLikedPosts: (state, action) => {
      state.currentLikedPosts = action.payload;
    },
  },
});

export const { setCurrentUser, setCurrentPosts, setCurrentLikedPosts } =
  currentUserSlice.actions;
// export const selectCurrentUser = (state) => state.currentUser.user;
export default currentUserSlice.reducer;

export const getCurrentPosts = (id) => async (dispatch) => {
  try {
    const response = await client.get(`posts?id=${id}`);
    const data = response.data.content;
    console.log(data);
    dispatch(setCurrentPosts(data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const getCurrentLikedPosts = (id) => async (dispatch) => {
  try {
    const response = await client.get(`${Endpoint.LIKED_POSTS}?id=${id}`);
    const data = response.data.content;
    console.log(data);
    dispatch(setCurrentLikedPosts(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};

export const getCurrentUser = (id) => async (dispatch) => {
  try {
    const response = await client.get(`users/${id}`);
    const data = response.data;

    dispatch(setCurrentUser(data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
