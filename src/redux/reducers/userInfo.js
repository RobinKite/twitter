import {GET_USER_INFO, LOGIN_USER} from "../types/userInfo";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USER_INFO:
      return { ...state, user: { ...payload } };

    case LOGIN_USER:
      return {...state, isAuthenticated: true }
    default:
      return state;
  }
}
