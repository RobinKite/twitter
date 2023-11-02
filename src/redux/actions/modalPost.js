import { SET_MODAL_POST, POST_DESC,CLOSE_MODAL } from "../types/modalPost";

export const setModalPost = () => ({ type: SET_MODAL_POST });
export const closeModal = () => ({ type: CLOSE_MODAL });

export const postDesc = (post) => ({ type: POST_DESC, payload: post });
