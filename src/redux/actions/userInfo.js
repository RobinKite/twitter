import { GET_USER_INFO } from "../types/userInfo";
export function getUser(data) {
  return {
    type: GET_USER_INFO,
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
      }
    );
    const userInfo = await response.json();
    console.log(userInfo);

    dispatch(getUser(userInfo));
  };
}
