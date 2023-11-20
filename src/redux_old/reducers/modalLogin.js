import { SET_MODAL, SET_CREATE_PROFILE_MODAL } from "../types/modalLogin";

const initialValue = {
  isActive: false,
  isActiveProfileModal: false,
};

const modalReducer = (state = initialValue, action) => {
  switch (action?.type) {
    case SET_MODAL: {
      return { ...state, isActive: !state.isActive };
    }
    case SET_CREATE_PROFILE_MODAL: {
      return { ...state, isActiveProfileModal: !state.isActiveProfileModal };
    }
    default:
      return state;
  }
};

export default modalReducer;
