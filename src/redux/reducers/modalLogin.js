import { SET_MODAL, SET_MODAL_ACTION, SET_MODAL_TITLE,PRODUKT_PRICE,PRODUKT_NAME } from "../types/modalLogin";

const initialValue = {
  isActive: false,

};

const modalReducer = (state = initialValue, action) => {
  switch (action?.type) {
    case SET_MODAL: {
      return { ...state, isActive: !state.isActive };
    }


    default:
      return state;
  }
};

export default modalReducer;