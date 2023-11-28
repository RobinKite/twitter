import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../service/api";
import { setAuthToken, setRefreshToken } from "../../utils/tokens";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    registerUserAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginUserAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginUserAction, getUser, registerUserAction } = userSlice.actions;
export default userSlice.reducer;

export const loginUser = (email, password) => (dispatch) => {
  const data = { email, password };
  console.log(data);
  api.post("/auth/login", data).then((response) => {
    console.log(response);
    setAuthToken(response.data.access_token);
    setRefreshToken(response.data.refresh_token);
    dispatch(loginUserAction(response.data.user));
  });
};

export const registerUser = (user) => {
  const data = {
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    password: user.password,
    birthdate: `${user.day}.${user.month}.${user.year}`,
    userTag: user.userName,
  };
  return (dispatch) => {
    api.post("/auth/register", data).then((response) => {
      console.log(response);
      setAuthToken(response.data.access_token);
      setRefreshToken(response.data.refresh_token);
      dispatch(registerUserAction(data));
    });
  };
};
