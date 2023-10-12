// Core
import { combineReducers } from "redux";
import modalReducer from "./reducers/modalLogin";
import userReducer from "./reducers/userInfo";

// Reducers

export const rootReducer = combineReducers({
  loginModal: modalReducer,

  user: userReducer,
});
