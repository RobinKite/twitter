import { ADD_TO_POST, GET_POST, DELETE_FROM_POST } from "../types/createPost";

// const initialState = {
//   post: [],
// };

const initialState = {
  newTweet: {
    body: '',
    type: 'string',
    parentPostId: 'string',
    images: [],
  },
};
const createPostReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'UPDATE_TWEET':
      return {
        ...state,
        newTweet: action.payload,
      };
    // case GET_POST: {
    //   return {
    //     ...state,
    //     post: [...state.post, action.payload],
    //   };
    // }

  //   case ADD_TO_POST: {
  //     let newPost = [...state.post];
  //     return {
  //       ...state,
  //       post: newPost,
  //     };
  //   }
  //   case DELETE_FROM_POST: {
  //     const newPost = [...state.post];
  //     return {
  //       ...state,
  //       post: newPost,
  //     };
  //   }
    default:

      return state;
  }
};

export default createPostReducer;
