// Core
import { combineReducers } from "redux";
import modalReducer from "./modalLogin/reducer";

// Reducers

export const rootReducer = combineReducers({
    loginModal: modalReducer,
});
