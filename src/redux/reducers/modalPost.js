import { SET_MODAL_POST ,POST_DESC} from "../types/modalPost";

const initialValue = {
  isActive: false,
  post: [],

};

const modalPostReducer = (state = initialValue, action) => {
  switch (action?.type) {
    case SET_MODAL_POST: {
      return { ...state, isActive: !state.isActive };
    }
    case POST_DESC: {
      return { ...state, post: action.payload };
    }
    // case SET_MODAL_TITLE: {
    //   return { ...state, title:action.payload};
    // }
   

    default:
      return state;
  }
};

export default modalPostReducer;