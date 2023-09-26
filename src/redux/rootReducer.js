// Core
import { combineReducers } from "redux";
import modalReducer from "./reducers/modalLogin";

// Reducers

export const rootReducer = combineReducers({
    loginModal: modalReducer,
});
