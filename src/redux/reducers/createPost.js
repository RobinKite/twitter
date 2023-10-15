import { ADD_TO_POST, GET_POST, DELETE_FROM_POST } from "../types/createPost";

const initialState = {
  post: [],
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST: {
      return {
        ...state,
        post: [...state.post, action.payload],
      };
    }

    case ADD_TO_POST: {
      let newPost = [...state.post];
      return {
        ...state,
        post: newPost,
      };
    }
    case DELETE_FROM_POST: {
      const newPost = [...state.post];
      return {
        ...state,
        post: newPost,
      };
    }
    default:
      return state;
  }
};

export default createPostReducer;
