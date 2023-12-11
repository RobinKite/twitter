import { Endpoint } from "@/constants";
import { client } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
    currentPosts: [],
    currentLikedPosts: [],
    hasMore: true,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    setCurrentPosts: (state, action) => {
      // state.currentPosts = action.payload;
      if (action.payload && action.payload.length !== 0) {
        state.hasMore = true;
        state.currentPosts = action.payload;
      } else {
        state.hasMore = false;
        state.currentPosts = [];
      }
    },
    resetPosts: (state) => {
      state.currentPosts = [];
      state.hasMore = true;
    },
    setCurrentLikedPosts: (state, action) => {
      state.currentLikedPosts = action.payload;
    },
    // clearCurrentUser: (state) => {
    //   state.user = null;
    // },
  },
});

export const { setCurrentUser, setCurrentPosts, setCurrentLikedPosts } =
  currentUserSlice.actions;
// export const selectCurrentUser = (state) => state.currentUser.user;
export default currentUserSlice.reducer;
export const getCurrentLikedPosts = (id) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.LIKED_POSTS, {
      params: { userId: id, page: 0, pageSize: 12 },
    });
    const data = response.data.content;
    dispatch(setCurrentLikedPosts(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};
export const getCurrentPosts = (id, page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POSTS, {
      params: { id: id, page: page, pageSize: 12 },
    });
    const data = response.data.content;
    dispatch(setCurrentPosts(data));
  } catch (error) {
    console.error("Error fetching user:", error);
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
