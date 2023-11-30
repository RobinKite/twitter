import { client } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    user: null,
    currentPosts: [],
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    setCurrentPosts: (state, action) => {
      state.currentPosts = action.payload;
    },
    // clearCurrentUser: (state) => {
    //   state.user = null;
    // },
  },
});

export const { setCurrentUser, setCurrentPosts } = currentUserSlice.actions;
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

export const getCurrentUser = (id) => async (dispatch) => {
  try {
    const response = await client.get(`users/${id}`);
    const data = response.data;

    dispatch(setCurrentUser(data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
