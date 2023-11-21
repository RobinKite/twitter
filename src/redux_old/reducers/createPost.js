// const initialState = {
//   posts: [],
//   selectedPost: null,
// };

// const createPostReducer = (state = initialState, action) => {
//   switch (action.type) {
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

//     default:
//       return state;
//   }
// };

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
