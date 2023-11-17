import { replace } from "formik";
import {
  ADD_TO_POST,
  SET_POSTS,
  GET_POST,
  DELETE_FROM_POST,
  LIKE_POST,
  DISLIKE_POST,
  GET_POST_BY_ID,
  DELETE_COMMENT,
} from "../types/createPost";

const initialState = {
  posts: [],
  selectedPost: null,
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMENT:
      const commentIdToDelete = action.payload;
      const updatedComments = state.postComments.filter(
        (comment) => comment.id !== commentIdToDelete
      );
      return {
        ...state,
        postComments: updatedComments,
      };

    
    case DELETE_FROM_POST: {
      const postIdToDelete = action.payload; //  це id поста
      const newPosts = state.posts.filter((post) => post.id !== postIdToDelete);
      return {
        ...state,
        posts: newPosts,
      };
    }

    case ADD_TO_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

      case SET_POSTS:
        const newPosts = action.payload;
        const filteredNewPosts = newPosts.filter((newPost) => {
          return !state.posts.some((existingPost) => existingPost.id === newPost.id);
        });
      
        return {
          ...state,
          posts: [...state.posts, ...filteredNewPosts],
        };

    // case SET_POSTS:
    //   const newPosts = action.payload;

    //   const updatedPosts = newPosts.map((newPost) => {
    //     const existingPostIndex = state.posts.findIndex(
    //       (existingPost) => existingPost.id === newPost.id
    //     );

    //     if (existingPostIndex !== -1) {
    //       return {
    //         ...state.posts[existingPostIndex],
    //         liked: newPost.liked,
    //         likeCount: newPost.likeCount,
    //         replyCount: newPost.replyCount,
    //       };
    //     } else {
    //       return newPost;
    //     }
    //   });

    //   return {
    //     ...state,
    //     posts: updatedPosts,
    //   };

    default:
      return state;
  }
};

export default createPostReducer;


// case LIKE_POST:
    //   const { postId, likeCount } = action.payload;
    //   const updatedPosts = state.posts.map((post) => {
    //     if (post.id === postId) {
    //       return {
    //         ...post,
    //         likeCount: likeCount,
    //        liked:true
    //       };
    //     }
    //     return post;
    //   });
    //   return {
    //     ...state,
    //     posts: updatedPosts,
    //   };
    //   case DISLIKE_POST:
    //     return {
    //       ...state,
    //       posts: state.posts.map((post) => {
    //         if (post.id === action.payload.postId) {
    //           return {
    //             ...post,
    //             likeCount: action.payload.likeCount,
    //             liked: action.payload.liked,
    //           };
    //         }
    //         return post;
    //       }),
    //     };