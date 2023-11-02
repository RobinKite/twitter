import { SET_MODAL_POST ,POST_DESC, CLOSE_MODAL} from "../types/modalPost";

const initialValue = {
  isActive: false,


};

const modalPostReducer = (state = initialValue, action) => {
  switch (action?.type) {
    case SET_MODAL_POST: {
      return { ...state, isActive: !state.isActive };
    }
  
    case CLOSE_MODAL: {
      return { ...state, isActive: false};
    }
   

    default:
      return state;
  }
};

export default modalPostReducer;