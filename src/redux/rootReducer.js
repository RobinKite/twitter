// Core
import { combineReducers } from "redux";
import modalReducer from "./reducers/modalLogin";
import userReducer from "./reducers/userInfo";
import modalPostReducer from "./reducers/modalPost";
import createPostReducer from "./reducers/createPost";

// Reducers

export const rootReducer = combineReducers({
  loginModal: modalReducer,
  postModal: modalPostReducer,
  user: userReducer,
  posts: createPostReducer,
});
