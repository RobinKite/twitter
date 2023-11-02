import {
  ADD_TO_POST,
  SET_POSTS,
  GET_POST,
  DELETE_FROM_POST,
  LIKE_POST,
  UNLIKE_POST,
} from "../types/createPost";

const initialState = {
  posts: [],
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case GET_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }
    case DELETE_FROM_POST: {
      const newPosts = [...state.posts];

      const post = action.payload;
      const index = newPosts.findIndex((el) => el.id === post.id);
      newPosts.splice(index, 1);

      return {
        ...state,
        posts: newPosts,
      };
    }
    case LIKE_POST:
      const { postId, likeCount } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likeCount: likeCount,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    // case UNLIKE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.map((post) =>
    //     post.id === action.payload
    //       ? { ...post, liked: false, likeCount: post.likeCount - 1 }
    //       : post
    //   ),

    //   };
    default:
      return state;
  }
};

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

export default createPostReducer;
