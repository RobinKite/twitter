import { SET_MODAL, SET_MODAL_ACTION, SET_MODAL_TITLE,PRODUKT_PRICE,PRODUKT_NAME } from "../types/modalLogin";

const initialValue = {
  isActive: false,
  modalAction: null,
  title: "",
  
  name:"",
  price:"",
};

const modalReducer = (state = initialValue, action) => {
  switch (action?.type) {
    case SET_MODAL: {
      return { ...state, isActive: !state.isActive };
    }
    // case SET_MODAL_ACTION: {
    //   return { ...state, modalAction: action.payload };
    // }
    // case SET_MODAL_TITLE: {
    //   return { ...state, title:action.payload};
    // }
   
    // case PRODUKT_PRICE: {
    //   return { ...state, price:action.payload};
    // }
    // case PRODUKT_NAME: {
    //   return { ...state, name:action.payload};
    // }

    default:
      return state;
  }
};

export default modalReducer;