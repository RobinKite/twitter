import { GET_USER_INFO, LOGIN_USER } from "../types/userInfo";
import { api } from "../../service/api";
import { setAuthToken, setRefreshToken } from "../../utils/tokens";
export function getUser(data) {
  return {
    type: GET_USER_INFO,
    payload: data,
  };
}

export function loginUserAction(data) {
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export function GetUserAsync() {
  return async function (dispatch) {
    const response = await fetch(
      `https://danit-final-twitter-8f32e99a3dec.herokuapp.com/users/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    const userInfo = await response.json();
    console.log(userInfo);

    dispatch(getUser(userInfo));
  };
}

export const loginUser = (email, password) => (dispatch) => {
  const data = {
    email,
    password,
  };
  api.post("/auth/login", data).then((r) => {
    setAuthToken(r.data.access_token);
    setRefreshToken(r.data.refresh_token);
    dispatch(loginUserAction(r.data));
  });
};
