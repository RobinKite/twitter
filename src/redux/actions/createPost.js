import {
  ADD_TO_POST,
  SET_POSTS,
  GET_POST,
  DELETE_FROM_POST,
} from "../types/createPost";
import { api } from "../../service/api";

export const addPost = (post) => {
  // console.log("Action Type:", ADD_TO_POST);
  // console.log("Action Payload:", post);

  return {
    type: ADD_TO_POST,
    payload: post,
  };
};

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});
export const deleteFromPost = (post) => ({
  type: DELETE_FROM_POST,
  payload: post,
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
export const addPosts = (formData) => {
  return async (dispatch) => {
    try {
      // const { data } = await api.get("posts/home");
      api
        .post("posts/create", formData)
        .then((response) => response)
        .then(({ data }) => {
          console.log(data);
          dispatch(addPost(data));
          api.get("posts/home").then((r) => {
            // Оновити список постів у сторі
            dispatch(setPosts(r.data.content));
          });
        });
      // setPosts(data.content)
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      // Виконуємо HTTP запит для видалення поста
      await api.delete(`posts/delete/${id}`);

      // Видалення було успішним. Ви можете викликати дію в Redux для оновлення стану.
      dispatch(deleteFromPost(id));
    } catch (error) {
      // Обробка помилки, якщо видалення не вдалося
      console.error("Сталася помилка при видаленні поста:", error);
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
