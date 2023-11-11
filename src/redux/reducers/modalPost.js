import { SET_MODAL_POST, SET_CONTENT, SET_MODAL_COMENT } from "../types/modalPost";

const initialValue = {
  isActiveSetModal: false,
  content: null,
};

const modalPostReducer = (state = initialValue, action) => {
  switch (action?.type) {
    case SET_MODAL_POST: {
      return { ...state, isActiveSetModal:  action.payload  };
    }
    case SET_CONTENT: {
      return { ...state, content: action.payload };
    }
    case SET_MODAL_COMENT: {
      return { ...state, isActiveSetModal: !state.isActiveSetModal };
    }

    default:
      return state;
  }
};

export default modalPostReducer;
