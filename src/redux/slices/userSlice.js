import { createSlice } from "@reduxjs/toolkit";
// import { client } from "@/services";
// import { setAuthToken, setRefreshToken } from "../../utils/tokens";
import { client, storage } from "@/services";
import { Endpoint } from "@/constants";

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
  const payload = { email, password };
  client.post(Endpoint.LOGIN, payload).then((response) => {
    console.log(response);
    const { access_token: accessToken, refresh_token: refreshToken } = response.data;
    storage.setTokens(accessToken, refreshToken);
    client.setAccessToken(accessToken);
    dispatch(loginUserAction(response.data.user));
  });
};
