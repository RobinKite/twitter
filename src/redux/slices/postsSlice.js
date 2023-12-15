import { createSlice } from "@reduxjs/toolkit";
import { client } from "@/services";
import { Endpoint } from "@/constants";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    popularPosts: [],
    selectedPost: null,
    postComments: [],
    myPosts: [],
    hasMore: true,
  },
  reducers: {
    resetPosts: (state) => {
      state.posts = [];
      state.myPosts = [];
      state.hasMore = true;
    },
    setPosts: (state, action) => {
      if (!action.payload.length) return;
      state.posts = action.payload;
    },

    // setMyPosts: (state, action) => {
    //   // if (!action.payload.length) return;
    //   // state.myPosts = action.payload;
    //   if (!action.payload || !action.payload.length) {
    //     state.hasMore = false;
    //   } else {
    //     state.hasMore = true;
    //     const uniquePosts = action.payload.filter(
    //       (post) => !state.myPosts.includes(post),
    //     );
    //     state.myPosts = [...state.myPosts, ...uniquePosts];
    //   }
    // },
    setMyPosts: (state, action) => {
      if (!action.payload || !action.payload.length) {
        state.hasMore = false;
      } else {
        state.hasMore = true;
        const uniquePosts = action.payload.filter((post) =>
          state.myPosts.every(
            (existingPost) => JSON.stringify(existingPost) !== JSON.stringify(post),
          ),
        );
        if (uniquePosts.length && uniquePosts.length < 12) {
          state.hasMore = false;
        } else {
          state.hasMore = true;
        }
        state.myPosts = [...state.myPosts, ...uniquePosts];
      }
    },
    addPost: (state, action) => {
      const newPost = action.payload;
      if (newPost.type === "TWEET") {
        state.myPosts.unshift(newPost);
        state.posts.unshift(newPost);
      }
      if (newPost.type === "REPLY") {
        const parentPostExistsInComments = state.postComments.some(
          (comment) => comment.id === newPost.parentPost?.id,
        );

        if (!parentPostExistsInComments) {
          state.postComments.unshift(newPost);
        }

        const parentPost = state.myPosts.find(
          (post) => post.id === newPost.parentPost?.id,
        );

        if (parentPost) {
          parentPost.replyCount = (parentPost.replyCount || 0) + 1;
        }

        const parentComment = state.postComments.find(
          (comment) => comment.id === newPost.parentPost?.id,
        );

        if (parentComment) {
          parentComment.replyCount = (parentComment.replyCount || 0) + 1;
        }

        if (state.selectedPost && state.selectedPost.id === newPost.parentPost?.id) {
          state.selectedPost.replyCount = (state.selectedPost.replyCount || 0) + 1;
        }
      }
    },

    deleteFromPost: (state, action) => {
      const postIdToDelete = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postIdToDelete);
      // state.selectedPost = state.selectedPost.filter((post) => post.id !== postIdToDelete);
      if (state.selectedPost && state.selectedPost.id === postIdToDelete) {
        const commentsToDelete = state.postComments.filter(
          (comment) => comment.parentPost.id === postIdToDelete,
        );
        // state.postComments = state.postComments.filter(
        //   (comment) => comment.parentPost.id !== postIdToDelete,
        // );
        state.selectedPost.replyCount = Math.max(
          (state.selectedPost.replyCount || 0) - commentsToDelete.length,
          0,
        );
        state.selectedPost = null;
      } else if (state.selectedPost) {
        state.selectedPost.replyCount = Math.max(
          (state.selectedPost.replyCount || 0) - 1,
          0,
        );
      }
      // const parentPostId = state.postComments.find((post) => post.id === postIdToDelete)
      //   ?.parentPost?.id;

      // if (parentPostId) {
      //   const parentPost = state.myPosts.find((post) => post.id === parentPostId);

      //   if (parentPost) {
      //     parentPost.replyCount = Math.max((parentPost.replyCount || 0) - 1, 0);
      //   }
      // }
      state.myPosts = state.myPosts.filter((post) => post.id !== postIdToDelete);

      state.postComments = state.postComments.filter(
        (post) => post.id !== postIdToDelete,
      );
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
      state.myPosts = state.myPosts.map((post) =>
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
    },

    unlike: (state, action) => {
      const { id } = action.payload;
      const postIndex = state.posts.findIndex((post) => post.id === id);

      if (postIndex !== -1) {
        state.posts = [
          ...state.posts.slice(0, postIndex),
          {
            ...state.posts[postIndex],
            liked: false,
            likeCount: state.posts[postIndex].likeCount - 1,
          },
          ...state.posts.slice(postIndex + 1),
        ];
      }
      state.myPosts = state.myPosts.map((post) =>
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
  setMyPosts,
  resetPosts,
  //   setPopularPosts,
} = postsSlice.actions;
export default postsSlice.reducer;

export const handleUnlike = (id) => async (dispatch) => {
  try {
    const response = await client.delete(Endpoint.UNLIKE, { params: { id } });

    if (response.status === 200) {
      const { likeCount, liked } = response.data;
      dispatch(unlike({ id, likeCount, liked }));
    }
  } catch (error) {
    console.error("Error unliking the post:", error);
  }
};

export const handleLike = (id) => async (dispatch) => {
  try {
    const response = await client.post(Endpoint.LIKE, { postId: id });

    if (response.status === 200) {
      const { likeCount, liked } = response.data;
      dispatch(like({ postId: id, likeCount, liked }));
    }
  } catch (error) {
    console.error("Error liking the post:", error);
  }
};
export const handleLikeSPosts = (page) => async () => {
  try {
    const response = await client.post(Endpoint.LIKE, {
      params: { page: page, pageSize: 12 },
    });

    console.log(response);
  } catch (error) {
    console.error("Error liking the post:", error);
  }
};

export const axiosPostComments = (id, page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POST_REPLIES, {
      params: { postId: id, page: page, pageSize: 12 },
    });
    const comments = response.data.content;
    dispatch(getPostComents(comments));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POST, { params: { id } });
    const data = response.data;
    dispatch(getPostId(data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_ALL_POSTS, {
      params: { page: page, pageSize: 12 },
    });
    // console.log(response)
    dispatch(setPosts(response.data.content));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

// export const getPopularPosts = (page) => async (dispatch) => {
//   try {
//     const response = await client.get(Endpoint.GET_POPULAR_POSTS, {
//       params: { page: page, pageSize: 12 },
//     });

//     dispatch(setPopularPosts(response.data.content));
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//   }
// };

export const getMyPosts = (page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_MY_POSTS, {
      params: { page: page, pageSize: 12 },
    });

    dispatch(setMyPosts(response.data.content));
  } catch (error) {
    console.error("Error fetching posts:", error.errorMessage);
  }
};

export const addPosts = (formData) => async (dispatch) => {
  try {
    const response = await client.post(Endpoint.CREATE_POST, formData);
    const data = response.data;
    dispatch(addPost(data));
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await client.delete(Endpoint.DELETE_POST, { params: { id } });
    await dispatch(deleteFromPost(id));
    // dispatch(getPosts());
  } catch (error) {
    console.error("Сталася помилка при видаленні поста:", error);
  }
};

// export const {
//   setPosts,
//   addPost,
//   deleteComment,
//   deleteFromPost,
//   getPostId,
//   getPostComents,
//   like,
//   addComent,
//   unlike,
//   setMyPosts,
//   setPopularPosts,
// } = postsSlice.actions;
// export default postsSlice.reducer;
