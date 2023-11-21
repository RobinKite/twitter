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
    loginUserAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginUserAction, getUser } = userSlice.actions;
export default userSlice.reducer;

// export function getUserAsync() {
//   return async function (dispatch) {
//     const response = await fetch(
//       `https://danit-final-twitter-8f32e99a3dec.herokuapp.com/users/profile`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       },
//     );
//     const userInfo = await response.json();
//     console.log(userInfo);

//     dispatch(getUser(userInfo));
//   };
// }

export const loginUser = (email, password) => (dispatch) => {
  const data = { email, password };
  api.post("/auth/login", data).then((response) => {
    console.log(response);
    setAuthToken(response.data.access_token);
    setRefreshToken(response.data.refresh_token);
    dispatch(loginUserAction(response.data.user));
  });
};
