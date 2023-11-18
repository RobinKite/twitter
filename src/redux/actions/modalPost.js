import { SET_MODAL_POST,SET_CONTENT, SET_MODAL_COMENT, } from "../types/modalPost";

// export const setModalPost = () => ({ type: SET_MODAL_POST });



export const setModalComent = () => ({ type:  SET_MODAL_COMENT});
export const setModalPost = (payload) => ({ type: SET_MODAL_POST, payload });

export const setContent = (content) => {
  return {
    type: SET_CONTENT,
    payload: content,
  };
};

// export const setContentComent = (content) => {
//   return {
//     type: SET_CONTENT_COMENT,
//     payload: content,
//   };
// };

// export const closeModal = () => ({ type: CLOSE_MODAL });

// export const postDesc = (post) => ({ type: POST_DESC, payload: post });