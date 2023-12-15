import { Endpoint } from "@/constants";
// import { loginFormSchema } from "@/schemas";
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
  },
});

export const {
  setModal,
  setCreateProfileModal,
  setModalPost,
  setContent,
  setDrawer,
  setPasswordMessage,
} = appSlice.actions;
export default appSlice.reducer;

export const changePassword =
  ({ currentPassword, newPassword }) =>
  async (dispatch) => {
    const updatePassword = {
      current_password: currentPassword,
      new_password: newPassword,
    };
    dispatch(setPasswordMessage(""));
    try {
      const response = await client.post(Endpoint.CHANGE_PASSWORD, updatePassword);
      console.log(response.status);
    } catch (err) {
      console.log("Error while changing password: ", err.response.data.errorMessage);
      dispatch(setPasswordMessage(err.response.data.errorMessage));
    }
  };
