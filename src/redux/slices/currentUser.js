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
    pageCurrent: 0,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    resetPosts: (state) => {
      state.currentLikedPosts = [];
      state.currentPosts = [];
      state.hasMore = true;
    },
    setCurrentPosts: (state, action) => {
      if (!action.payload.content || !action.payload.content.length) {
        state.hasMore = false;
      } else {
        state.hasMore = true;
        const uniquePosts = action.payload.content.filter((post) =>
          state.currentPosts.every(
            (existingPost) => JSON.stringify(existingPost) !== JSON.stringify(post),
          ),
        );
        if (uniquePosts.length && uniquePosts.length < 12) {
          state.hasMore = false;
        } else {
          state.hasMore = true;
        }

        state.currentPosts = [...state.currentPosts, ...uniquePosts];
        state.pageCurrent = action.payload.number;
      }
    },
    // setCurrentPosts: (state, action) => {
    //   if (!action.payload || !action.payload.length) {
    //     state.hasMore = false;
    //     state.currentPosts = [];
    //   } else {
    //     state.hasMore = true;
    //     if (action.payload.length && action.payload.length < 12) {
    //       state.hasMore = false;
    //     } else {
    //       state.hasMore = true;
    //     }
    //     // Перезаписати state.currentPosts новим значенням action.payload
    //     state.currentPosts = action.payload;
    //   }
    // },
    setCurrentLikedPosts: (state, action) => {
      // state.currentLikedPosts = action.payload;
      if (!action.payload.content || !action.payload.content.length) {
        state.hasMore = false;
      } else {
        state.hasMore = true;
        const uniquePosts = action.payload.content.filter((post) =>
          state.currentLikedPosts.every(
            (existingPost) => JSON.stringify(existingPost) !== JSON.stringify(post),
          ),
        );
        if (uniquePosts.length && uniquePosts.length < 12) {
          state.hasMore = false;
        } else {
          state.hasMore = true;
        }

        state.currentLikedPosts = [...state.currentLikedPosts, ...uniquePosts];
        state.pageCurrent = action.payload.number;
      }
    },
  },
});

export const { setCurrentUser, setCurrentPosts, setCurrentLikedPosts, resetPosts } =
  currentUserSlice.actions;
// export const selectCurrentUser = (state) => state.currentUser.user;
export default currentUserSlice.reducer;
export const getCurrentLikedPosts = (id, page) => async (dispatch) => {
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
export const getCurrentPosts = (id, page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POSTS, {
      params: { id: id, page: page, pageSize: 12 },
    });
    const data = response.data;
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
