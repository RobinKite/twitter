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
  },
});

export const { setCurrentUser, setCurrentPosts, setCurrentLikedPosts } =
  currentUserSlice.actions;
export default currentUserSlice.reducer;

export const getCurrentLikedPosts = (id) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.LIKED_POSTS, {
      params: { userId: id, page: 0, pageSize: 12 },
    });
    dispatch(setCurrentLikedPosts(response.data.content));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};

export const getCurrentPosts = (id, page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POSTS, {
      params: { id: id, page: page, pageSize: 12 },
    });
    dispatch(setCurrentPosts(response.data.content));
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
