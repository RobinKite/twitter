import { ADD_TO_POST,SET_POSTS, GET_POST, DELETE_FROM_POST } from "../types/createPost";

const initialState = {
  posts: [],
};

// const initialState = {
//   newTweet: {
//     body: '',
//     type: 'string',
//     parentPostId: 'string',
//     images: [],
//   },
// };
const createPostReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_POSTS: {
      return {
        ...state,
        posts:  action.payload,
      };
    }
      case ADD_TO_POST:
        // let newPost = [...state.posts];
        // const post = action.payload;
        // newPost.push(post);
      return {
        ...state,
        posts: [...state.posts,action.payload]
      };
   
    case GET_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }


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
