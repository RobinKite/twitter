import { createSlice } from "@reduxjs/toolkit";
import { client } from "@/services";
import { Endpoint, PostType } from "@/constants";
import { setPostsTemplate } from "@/utils";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    popularPosts: [],
    selectedPost: null,
    postComments: [],
    myPosts: [],
    repostedPosts: [],
    hasMore: true,
    page: 0,
  },
  reducers: {
    resetPosts: (state) => {
      state.posts = [];
      state.postComments = [];
      state.myPosts = [];
      state.page = 0;
      state.hasMore = true;
    },
    setPosts: (state, action) => {
      setPostsTemplate(state, action, "posts");
    },

    setMyPosts: (state, action) => {
      setPostsTemplate(state, action, "myPosts");
    },

    setHasMore(state, action) {
      state.hasMore = action.payload;
    },
    addPost: (state, action) => {
      const newPost = action.payload;
      if (newPost.type === PostType.TWEET) {
        state.myPosts.unshift(newPost);
        state.posts.unshift(newPost);
      }
      if (newPost.type === PostType.QUOTE) {
        state.myPosts.unshift(newPost);
        state.posts.unshift(newPost);
      }
      if (newPost.type === PostType.REPLY) {
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
      if (state.selectedPost && state.selectedPost.id === postIdToDelete) {
        const commentsToDelete = state.postComments.filter(
          (comment) => comment.parentPost.id === postIdToDelete,
        );

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
      state.myPosts = state.myPosts.filter((post) => post.id !== postIdToDelete);
      state.postComments = state.postComments.filter(
        (comment) => comment.parentPost.id !== postIdToDelete,
      );
    },

    setPostComments: (state, action) => {
      state.postComments = action.payload;
    },

    setPopularPosts: (state, action) => {
      state.popularPosts = action.payload;
    },

    addRepostedPosts: (state, action) => {
      state.repostedPosts = action.payload;
    },

    getPostId: (state, action) => {
      const post = action.payload;
      state.selectedPost = post;
    },
    getPostComents: (state, action) => {
      setPostsTemplate(state, action, "postComments");
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
  setHasMore,
  setPopularPosts,
  addRepostedPosts,
  setPostComments,
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

export const axiosPostComments = (page, id) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POST_REPLIES, {
      params: { postId: id, page: page, pageSize: 12 },
    });

    dispatch(getPostComents(response.data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const fetchPostsOrRedirect = (id, navigate) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POST, { params: { id } });
    dispatch(getPostId(response.data));
  } catch (error) {
    navigate(-1);
    console.error("Error fetching posts:", error);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_ALL_POSTS, {
      params: { page: page, pageSize: 12 },
    });
    dispatch(setPosts(response.data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getPopularPosts = (page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_POPULAR_POSTS, {
      params: { page: page, pageSize: 12 },
    });

    dispatch(setPopularPosts(response.data.content));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getMyPosts = (page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.GET_MY_POSTS, {
      params: { page: page, pageSize: 12 },
    });

    dispatch(setMyPosts(response.data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const addPosts = (formData) => async (dispatch) => {
  try {
    const response = await client.post(Endpoint.CREATE_POST, formData);
    dispatch(addPost(response.data));
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    await client.delete(Endpoint.DELETE_POST, { params: { id } });
    await dispatch(deleteFromPost(id));
    const comments = getState().posts.postComments.filter((comment) => comment.id !== id);
    dispatch(setPostComments(comments));
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};
