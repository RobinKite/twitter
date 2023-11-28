import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoginModalActive: false,
    isProfileModalActive: false,
    isPostModalActive: false,
    postModalContent: null,
    isModalActive: false,
  },
  reducers: {
    setModal: (state) => {
      state.isLoginModalActive = !state.isModalActive;
    },
    setCreateProfileModal: (state) => {
      state.isProfileModalActive = !state.isProfileModalActive;
    },
    setModalPost: (state, action) => {
      state.isPostModalActive = action.payload;
    },
    setContent: (state, action) => {
      state.postModalContent = action.payload;
    },
  },
});

export const { setModal, setCreateProfileModal, setModalPost, setContent } =
  appSlice.actions;
export default appSlice.reducer;
