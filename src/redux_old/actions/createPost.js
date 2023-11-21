// export const dislikePost = (postId, likeCount, liked) => {
//   return {
//     type: DISLIKE_POST,
//     payload: {
//       postId,
//       likeCount,
//       liked,
//     },
//   };
// };
// export const dislikePostAxios = (postId) => {
//   return async (dispatch) => {
//     try {
//       const response = await api.delete(`likes/unlike?id=${postId}`);
//       dispatch(dislikePost(postId, response.data.likeCount,));

//     } catch (error) {
//       console.error("Сталася помилка:", error);
//     }
//   };
// };

// export const likePost = (postId, likeCount, liked) => {
//   return {
//     type: LIKE_POST,
//     payload: {
//       postId,
//       likeCount,
//       liked,
//     },
//   };
// };
// export const likePostAxios = (postId) => {
//   return async (dispatch) => {
//     try {
//       const requestData = {
//         postId: postId,
//       };
//       await api
//         .post(`likes/like`, requestData)
//         .then((r) => dispatch(likePost(postId, r.data.likeCount, )));

//     } catch (error) {
//       console.error("Сталася помилка :", error);
//     }
//   };
// };
// export const likePostAxios = (postId) => {
//   return async (dispatch) => {
//     try {
//       const requestData = {
//         postId: postId,
//       };
//
//       const response = await api.post(`likes/like`, requestData);
//
//       const likeCount = response.data.likeCount;
//       const liked = true;

//       dispatch(likePost(postId, likeCount, liked));

//     } catch (error) {
//       console.error("Сталася помилка:", error);
//     }
//   };
// };
