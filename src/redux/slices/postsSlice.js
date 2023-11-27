import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../service/api";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: null,
    postComments: [],
    // coments:[],
  },
  reducers: {
    setPosts: (state, action) => {
      const combinedPosts = [...state.posts, ...action.payload];
      const uniquePostsSet = new Set(combinedPosts.map((post) => post.id));
      const uniquePostsArray = Array.from(uniquePostsSet, (postId) =>
        combinedPosts.find((post) => post.id === postId),
      );
      state.posts = uniquePostsArray;
    },
    addPost: (state, action) => {
      const newPost = action.payload;

      if (newPost.type === "TWEET") {
        state.posts.unshift(newPost);
      }

      if (newPost.type === "REPLY") {
        state.postComments.unshift(newPost);
        const parentPost = state.posts.find((post) => post.id === newPost.parentPost?.id);
        if (parentPost) {
          parentPost.replyCount = (parentPost.replyCount || 0) + 1;
        }
        const parentComment = state.postComments.find(
          (comment) => comment.id === newPost.parentPost?.id,
        );
        if (parentComment) {
          parentComment.replyCount = (parentComment.replyCount || 0) + 1;
        }
      }
      if (state.selectedPost && state.selectedPost.id === newPost.parentPost?.id) {
        state.selectedPost.replyCount = (state.selectedPost.replyCount || 0) + 1;
      }
    },
    addComent: (state, action) => {
      const newComent = action.payload;
      state.postComments.unshift(newComent);
    },
    // deleteComment: (state, action) => {
    // state.postComments = state.postComments.filter((comment) => comment.id !== action.payload);
    // },

    // deleteFromPost: (state, action) => {
    //   const postIdToDelete = action.payload;

    //   if (state.selectedPost && state.selectedPost.id === postIdToDelete) {
    //     state.selectedPost = null;
    //   } else if (state.selectedPost) {
    //     state.selectedPost.replyCount = Math.max(
    //       (state.selectedPost.replyCount || 0) - 1,
    //       0,
    //     );
    //   }

    //   const parentPostId = state.postComments.find((post) => post.id === postIdToDelete)
    //     ?.parentPost?.id;

    //   if (parentPostId) {
    //     const parentPost = state.posts.find((post) => post.id === parentPostId);

    //     if (parentPost) {
    //       parentPost.replyCount = Math.max((parentPost.replyCount || 0) - 1, 0);
    //     }
    //   }

    //   state.posts = state.posts.filter((post) => post.id !== postIdToDelete);

    //   state.postComments = state.postComments.filter(
    //     (post) => post.id !== postIdToDelete,
    //   );
    // },
    deleteFromPost: (state, action) => {
      const postIdToDelete = action.payload;

      // Оновлення replyCount для selectedPost, якщо він вибраний і має збільшене replyCount
      if (state.selectedPost && state.selectedPost.id === postIdToDelete) {
        // Знаходження всіх коментарів до вибраного поста
        const commentsToDelete = state.postComments.filter(
          (comment) => comment.parentPost.id === postIdToDelete,
        );

        // Видалення коментарів до вибраного поста зі списку коментарів
        state.postComments = state.postComments.filter(
          (comment) => comment.parentPost.id !== postIdToDelete,
        );

        // Зменшення replyCount у вибраного поста на кількість видалених коментарів
        state.selectedPost.replyCount = Math.max(
          (state.selectedPost.replyCount || 0) - commentsToDelete.length,
          0,
        );

        // Саме видалення вибраного поста
        state.selectedPost = null;
      } else if (state.selectedPost) {
        // Зменшення replyCount для інших постів, якщо вони мають взаємодію з видаленим постом
        const parentPostId = state.postComments.find(
          (comment) => comment.id === postIdToDelete,
        )?.parentPost?.id;

        if (parentPostId) {
          const parentPost = state.posts.find((post) => post.id === parentPostId);

          if (parentPost) {
            parentPost.replyCount = Math.max((parentPost.replyCount || 0) - 1, 0);
          }
        }

        // Видалення поста зі списку постів
        state.posts = state.posts.filter((post) => post.id !== postIdToDelete);

        // Видалення коментарів до видаленого поста зі списку коментарів
        state.postComments = state.postComments.filter(
          (comment) => comment.parentPost.id !== postIdToDelete,
        );
      }
    },
    getPostId: (state, action) => {
      const post = action.payload;
      state.selectedPost = post;
    },
    getPostComents: (state, action) => {
      const comments = action.payload;
      state.postComments = [...comments];
    },

    like: (state, action) => {
      const { postId } = action.payload;
      state.posts = state.posts.map((post) =>
        post.id === postId
          ? { ...post, likeCount: post.likeCount + 1, liked: true }
          : post,
      );

      state.postComments = state.postComments.map((post) =>
        post.id === postId
          ? { ...post, likeCount: post.likeCount + 1, liked: true }
          : post,
      );
      if (state.selectedPost && state.selectedPost.id === postId) {
        state.selectedPost = {
          ...state.selectedPost,
          likeCount: state.selectedPost.likeCount + 1,
          liked: true,
        };
      }

      console.log(state.selectedPost);
    },

    unlike: (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.map((post) =>
        post.id === id && post.likeCount > 0
          ? { ...post, likeCount: post.likeCount - 1, liked: false }
          : post,
      );
      state.postComments = state.postComments.map((post) =>
        post.id === id && post.likeCount > 0
          ? { ...post, likeCount: post.likeCount - 1, liked: false }
          : post,
      );
      if (state.selectedPost && state.selectedPost.id === id) {
        state.selectedPost = {
          ...state.selectedPost,
          likeCount: state.selectedPost.likeCount - 1,
          liked: false,
        };
      }
    },
  },
});

export const {
  setPosts,
  addPost,
  deleteComment,
  deleteFromPost,
  getPostId,
  getPostComents,
  like,
  addComent,
  unlike,
} = postsSlice.actions;
export default postsSlice.reducer;

export const handleUnlike = (id) => async (dispatch) => {
  try {
    const response = await api.delete(`likes/unlike?id=${id}`);

    if (response.status === 200) {
      const { likeCount, liked } = response.data;
      dispatch(unlike({ id, likeCount, liked }));
    }
  } catch (error) {
    console.error("Error unliking the post:", error);
  }
};

export const handleLike = (id) => async (dispatch) => {
  const requestData = {
    postId: id,
  };
  try {
    const response = await api.post(`likes/like`, requestData);

    if (response.status === 200) {
      const { likeCount, liked } = response.data;
      dispatch(like({ postId: id, likeCount, liked }));
    }
  } catch (error) {
    console.error("Error liking the post:", error);
  }
};

export const axiosPostComments = (id) => async (dispatch) => {
  try {
    const response = await api.get(`posts/replies?postId=${id}&page=${0}&pageSize=${10}`);
    const comments = response.data.content;
    // console.log(comments);
    dispatch(getPostComents(comments));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`posts/post?id=${id}`);
    const data = response.data;
    dispatch(getPostId(data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPosts = (currentPage) => async (dispatch) => {
  try {
    const response = await api.get(`posts/home?page=${currentPage}&pageSize=${12}`);
    // console.log(response);

    dispatch(setPosts(response.data.content));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const addPosts = (formData) => async (dispatch) => {
  try {
    const response = await api.post("posts/create", formData);
    const data = response.data;
    dispatch(addPost(data));
  } catch (error) {
    console.log("ERROR", error);
  }
};
export const addToComent = (formData) => async (dispatch) => {
  try {
    const response = await api.post("posts/create", formData);
    const data = response.data;
    dispatch(addComent(data));
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`posts/delete?id=${id}`);
    await dispatch(deleteFromPost(id));
    // dispatch(getPosts());
  } catch (error) {
    console.error("Сталася помилка при видаленні поста:", error);
  }
};
