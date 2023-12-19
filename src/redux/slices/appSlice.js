import { Endpoint } from "@/constants";
import { client } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoginModalActive: false,
    isProfileModalActive: false,
    isPostModalActive: false,
    postModalContent: null,
    isDrawerActive: false,
    isModalActive: false,
    isChangePasswordModalActive: false,
    passwordMessage: "",
  },
  reducers: {
    setModal: (state) => {
      state.isLoginModalActive = !state.isLoginModalActive;
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
    setDrawer: (state, action) => {
      state.isDrawerActive = action.payload;
    },
    setPasswordMessage: (state, action) => {
      state.passwordMessage = action.payload;
    },
    setIsChangePasswordModalActive: (state, action) => {
      state.isChangePasswordModalActive = action.payload;
    },
  },
});

export const {
  setModal,
  setCreateProfileModal,
  setModalPost,
  setContent,
  setDrawer,
  setPasswordMessage,
  setIsChangePasswordModalActive,
} = appSlice.actions;
export default appSlice.reducer;

export const changePassword =
  ({ currentPassword: current_password, newPassword: new_password }) =>
  async (dispatch) => {
    const payload = { current_password, new_password };
    try {
      const response = await client.post(Endpoint.CHANGE_PASSWORD, payload);
      if (response.status === 200) dispatch(closeChangePasswordModal());
    } catch (error) {
      dispatch(setPasswordMessage(error.response.data.errorMessage));
    }
  };

export const closeChangePasswordModal = () => (dispatch) => {
  dispatch(setIsChangePasswordModalActive(false));
  dispatch(setPasswordMessage(""));
};
