import { GET_USER_INFO } from "../types/userInfo";

const initialState = {
  user: {},
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USER_INFO:
      return { ...state, user: { ...payload } };

    default:
      return state;
  }
}
