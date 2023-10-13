// Core
import { combineReducers } from "redux";
import modalReducer from "./reducers/modalLogin";
import userReducer from "./reducers/userInfo";
import modalPostReducer from "./reducers/modalPost";

// Reducers

export const rootReducer = combineReducers({
  loginModal: modalReducer,
  postModal: modalPostReducer,
  user: userReducer,
});
