import { SET_MODAL_POST, POST_DESC } from "../types/modalPost";

export const setModalPost = () => ({ type: SET_MODAL_POST });

export const postDesc = (post) => ({ type: POST_DESC, payload: post });
