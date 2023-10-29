import {
  ADD_TO_POST,
  SET_POSTS,
  GET_POST,
  // DELETE_FROM_POST,
} from "../types/createPost";
import { api } from "../../service/api";

export const addPost = (post) => ({
  type: ADD_TO_POST,
  payload: post,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});
export const getPosts = () => {
  return async (dispatch) => {
    try {
      // const { data } = await api.get("posts/home");
      api.get("posts/home").then((r) => dispatch(setPosts(r.data.content)));
      // setPosts(data.content)
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

// export const addToPost = (data) => ({
//   type: ADD_TO_POST,
//   payload: data,
// });

// export const deleteFromPost = (data) => ({
//   type: DELETE_FROM_POST,
//   payload: data,
// });

// export function addPost() {
//   return async function (dispatch) {
//     const response = await fetch(
//       `https://danit-final-twitter-8f32e99a3dec.herokuapp.com/posts/create`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     );
//     const post = await response.json();
//     console.log(post);

//     dispatch(addToPost(post));
//   };
// }

// export function getPost() {
//   return async function (dispatch) {
//     const response = await fetch(
//       `https://danit-final-twitter-8f32e99a3dec.herokuapp.com/posts/home`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     );
//     const getPost = await response.json();
//     console.log(getPost);

//     dispatch(getPost(getPost));
//   };
// }
