import { createSlice } from "@reduxjs/toolkit";
import { client, storage } from "@/services";
import { Endpoint } from "@/constants";
import { getBirthdayInSeconds } from "@/utils/date";
import { setPostsTemplate } from "@/utils";
import { getCurrentUser } from "./currentUser";
import { setIsLoading } from "./appSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: !!storage.accessToken,
    user: {},
    usersList: [],
    friendsList: [],
    friendRequests: [],
    friendSearches: [],
    likedPosts: [],
    page: 0,
    bookmarkPosts: [],
    usersFollowing: [],
    usersFollowers: [],
    notifications: [],
    notificationsCount: 0,
    hasMore: true,
  },
  reducers: {
    resetPostsLiked: (state) => {
      state.likedPosts = [];
      state.notifications = [];
      state.bookmarkPosts = [];
      state.page = 0;
      state.hasMore = true;
    },
    usersFollowers: (state, action) => {
      state.usersFollowers = action.payload;
    },
    usersFollowing: (state, action) => {
      state.usersFollowing = action.payload;
    },
    registerUserAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginUserAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    googleRegisterAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.usersList = action.payload;
    },
    setFriendSearches: (state, action) => {
      state.friendSearches = action.payload;
    },
    logoutUserAction: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.usersList = [];
      state.friendsList = [];
      state.friendRequests = [];
      state.friendSearches = [];
    },
    setLikedPosts: (state, action) => {
      setPostsTemplate(state, action, "likedPosts");
    },

    setBookmarkPost: (state, action) => {
      console.log(action.payload);
      setPostsTemplate(state, action, "bookmarkPosts");
    },
    removeBookmarkPost: (state, action) => {
      state.bookmarkPosts = state.bookmarkPosts.filter(
        (post) => post.id !== action.payload,
      );
    },
    setNotifications: (state, action) => {
      console.log(action.payload);
      // setPostsTemplate(state, action, "notifications");
      state.notifications = action.payload;
    },
    setNotificationsCount: (state, action) => {
      state.notificationsCount = action.payload;
    },
  },
});

export const {
  loginUserAction,
  setUser,
  registerUserAction,
  setUsers,
  setFriendSearches,
  googleRegisterAction,
  logoutUserAction,
  setLikedPosts,
  resetPostsLiked,
  // setCurrentLikedPosts,
  setBookmarkPost,
  removeBookmarkPost,
  usersFollowing,
  usersFollowers,
  setNotifications,
  setNotificationsCount,
} = userSlice.actions;

export default userSlice.reducer;

export const fetchUser = () => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.USER_PROFILE);
    dispatch(setUser(response.data));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.error("Error:", error);
  }
};
export const getUserFollowers = (userId) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.USER_FOLLOWERS, {
      params: { page: 0, pageSize: 10, userId: userId },
    });
    dispatch(usersFollowers(response.data.content));
  } catch (error) {
    console.error("Error:", error);
  }
};
export const getUserFollowing = (userId) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.USER_FOLLOWED, {
      params: { page: 0, pageSize: 10, userId: userId },
    });
    dispatch(usersFollowing(response.data.content));
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getUsersUpdate = (values) => async (dispatch) => {
  try {
    const response = await client.put(Endpoint.USERS_UPDATE, values);
    dispatch(setUser(response.data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const getUsersUpdateAvatarUrl = (avatarUrl) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", avatarUrl);
    const response = await client.post(Endpoint.UPLOAD_AVATAR, formData);
    dispatch(setUser(response.data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const getUsersUpdateImageUrl = (imageUrl) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", imageUrl);

    const response = await client.post(Endpoint.UPLOAD_BG_IMAGE, formData);
    dispatch(setUser(response.data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const loginUser = (email, password) => (dispatch) => {
  const payload = { email, password };
  client.post(Endpoint.LOGIN, payload).then((response) => {
    const { access_token: accessToken, refresh_token: refreshToken } = response.data;
    storage.setTokens(accessToken, refreshToken);
    dispatch(loginUserAction(response.data.user));
  });
};

export const registerUser = (user) => {
  const birthdateInSeconds = getBirthdayInSeconds({
    day: user.day,
    month: user.month,
    year: user.year,
  });
  const data = {
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    password: user.password,
    birthdate: birthdateInSeconds,
    userTag: user.userName,
  };
  return (dispatch) => {
    client.post(Endpoint.REGISTER, data).then((response) => {
      const { access_token: accessToken, refresh_token: refreshToken } = response.data;
      storage.setTokens(accessToken, refreshToken);
      dispatch(registerUserAction(data));
    });
  };
};

export const fetchUsers = (numberOfUsers) => {
  return (dispatch) => {
    client
      .get(Endpoint.USERS_RECOMMENDED, { params: { page: 0, pageSize: numberOfUsers } })
      .then((response) => {
        const data = response.data.content;
        dispatch(setUsers(data));
      });
  };
};

export const postSubscribeToUser = (id) => {
  return (dispatch) => {
    client.post(Endpoint.SUBSCRIPTIONS, { id }).then(() => {
      dispatch(fetchUser());
      dispatch(getCurrentUser(id));
    });
  };
};

export const deleteSubscribeToUser = (id) => {
  return (dispatch) => {
    client.delete(Endpoint.SUBSCRIPTIONS, { params: { id } }).then(() => {
      dispatch(fetchUser());
      dispatch(getCurrentUser(id));
    });
  };
};

export const fetchFriedsSearch = (query) => {
  return (dispatch) => {
    client
      .get(Endpoint.USERS_SEARCH, { params: { query, page: 0, pageSize: 12 } })
      .then((response) => {
        const data = response.data.content;
        dispatch(setFriendSearches(data));
        return data;
      });
  };
};
export const googleRegister = (code, state) => (dispatch) => {
  const payload = { code, state };

  client
    .post(Endpoint.GOOGLE_REGISTRATION, payload)
    .then((response) => {
      const { access_token: accessToken, refresh_token: refreshToken } = response.data;
      storage.setTokens(accessToken, refreshToken);
      dispatch(googleRegisterAction(response.data.user));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getLikedPosts = (page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.LIKED_POSTS, {
      params: { page: page, pageSize: 12 },
    });
    const data = response.data;

    dispatch(setLikedPosts(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};

export const addBookmarkPost = (postId) => async (dispatch) => {
  try {
    await client.post(Endpoint.BOOKMARKS, null, { params: { postId } });
    dispatch(getAllBookmarkPosts());
  } catch (error) {
    console.error("Error adding bookmark post:", error);
  }
};

export const deleteBookmarkPost = (postId) => async (dispatch) => {
  try {
    await client.delete(Endpoint.BOOKMARKS, { params: { postId } });
    dispatch(getAllBookmarkPosts());
  } catch (error) {
    console.error("Error removing bookmark post:", error);
  }
};

export const getAllBookmarkPosts = (page) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.BOOKMARKS, {
      params: { page: page, pageSize: 12 },
    });
    const data = response.data;
    dispatch(setBookmarkPost(data));
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const getNotifications = () => {
  return async (dispatch) => {
    try {
      let page = 0;
      let allNotifications = [];
      let totalPages = 0;
      do {
        const response = await client.get(Endpoint.GET_NOTIFICATIONS, {
          params: { page, pageSize: 12 },
        });
        const data = response.data.content;
        totalPages = response.data.totalPages;
        allNotifications = [...allNotifications, ...data];
        page++;
      } while (page < totalPages);
      dispatch(setNotifications(allNotifications));
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };
};

export const getNotificationsCount = () => {
  return (dispatch) => {
    client.get(Endpoint.GET_NOTIFICATIONS_COUNT).then((response) => {
      const data = response.data.count;

      dispatch(setNotificationsCount(data));
    });
  };
};
