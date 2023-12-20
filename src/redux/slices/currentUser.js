import { Endpoint } from "@/constants";
import { client } from "@/services";
import { setPostsTemplate } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
    currentPosts: [],
    currentLikedPosts: [],
    hasMore: true,
    page: 0,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    resetPosts: (state) => {
      state.currentLikedPosts = [];
      state.currentPosts = [];
      state.page = 0;
      state.hasMore = true;
    },
    setCurrentPosts: (state, action) => {
      setPostsTemplate(state, action, "currentPosts");
    },
    setCurrentLikedPosts: (state, action) => {
      setPostsTemplate(state, action, "currentLikedPosts");
    },
  },
});

export const { setCurrentUser, setCurrentPosts, setCurrentLikedPosts, resetPosts } =
  currentUserSlice.actions;
export default currentUserSlice.reducer;
export const getCurrentLikedPosts = (page, id) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.LIKED_POSTS, {
      params: { userId: id, page: page, pageSize: 12 },
    });
    const data = response.data;
    dispatch(setCurrentLikedPosts(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};
export const getCurrentPosts = (page, id) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POSTS, {
      params: { id: id, page: page, pageSize: 12 },
    });
    dispatch(setCurrentPosts(response.data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const getCurrentUser = (id) => async (dispatch) => {
  try {
    const response = await client.get(`${Endpoint.USERS}/${id}`);
    dispatch(setCurrentUser(response.data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
