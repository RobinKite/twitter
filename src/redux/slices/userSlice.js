import { createSlice } from "@reduxjs/toolkit";
import { client, storage } from "@/services";
import { Endpoint } from "@/constants";

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
    currentLikedPosts: [],
    usersFollowing: [],
    usersFollowers: [],
  },
  reducers: {
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
    getUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.usersList = action.payload;
    },
    sendFriendRequest: (state, action) => {
      state.friendRequests.push(action.payload);
    },
    removeFriend: (state, action) => {
      state.friendsList = state.friendsList.filter(
        (friend) => friend.id !== action.payload,
      );
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
      state.likedPosts = action.payload;
    },
    setCurrentLikedPosts: (state, action) => {
      state.currentLikedPosts = action.payload;
    },
  },
});

export const {
  loginUserAction,
  getUser,
  registerUserAction,
  setUsers,
  sendFriendRequest,
  removeFriend,
  setFriendSearches,
  googleRegisterAction,
  logoutUserAction,
  setLikedPosts,
  setCurrentLikedPosts,
  usersFollowing,
  usersFollowers,
} = userSlice.actions;

export default userSlice.reducer;

export const getUserInfo = () => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.USER_PROFILE);
    const data = response.data;

    dispatch(getUser(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};
export const getUserFollowers = (userId) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.USER_FOLLOWERS, {
      params: { page: 0, pageSize: 10, userId: userId },
    });
    const data = response.data.content;
    dispatch(usersFollowers(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};
export const getUserFollowing = (userId) => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.USER_FOLLOWED, {
      params: { page: 0, pageSize: 10, userId: userId },
    });
    const data = response.data.content;
    dispatch(usersFollowing(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};
export const getCurrentLikedPosts = () => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.LIKED_POSTS, {
      params: { page: 0, pageSize: 12 },
    });
    const data = response.data.content;
    dispatch(setCurrentLikedPosts(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};

export const getUsersUpdate = (values) => async (dispatch) => {
  try {
    const response = await client.put(Endpoint.USERS_UPDATE, values);
    const data = response.data;
    console.log(data);
    dispatch(getUser(data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
export const getUsersUpdateAvatarUrl = (avatarUrl) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", avatarUrl);
    const response = await client.post(Endpoint.UPLOAD_AVATAR, formData);
    const data = response.data;
    console.log(data);
    dispatch(getUser(data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
export const getUsersUpdateImageUrl = (imageUrl) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", imageUrl);

    const response = await client.post(Endpoint.UPLOAD_BG_IMAGE, formData);
    const data = response.data;
    console.log(data);
    dispatch(getUser(data));
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const loginUser = (email, password) => (dispatch) => {
  const payload = { email, password };
  client.post(Endpoint.LOGIN, payload).then((response) => {
    const { access_token: accessToken, refresh_token: refreshToken } = response.data;
    storage.setTokens(accessToken, refreshToken);
    client.setAccessToken(accessToken);
    dispatch(loginUserAction(response.data.user));
  });
};

export const registerUser = (user) => {
  const data = {
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    password: user.password,
    birthdate: `${user.day}.${user.month}.${user.year}`,
    userTag: user.userName,
  };
  return (dispatch) => {
    client.post(Endpoint.REGISTER, data).then((response) => {
      const { access_token: accessToken, refresh_token: refreshToken } = response.data;
      storage.setTokens(accessToken, refreshToken);
      client.setAccessToken(accessToken);
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

export const postSubcribeToUser = (id) => {
  return (dispatch) => {
    client.post(Endpoint.SUBSCRIPTIONS, { id }).then((response) => {
      const data = response.data;
      dispatch(sendFriendRequest(data));
    });
  };
};

export const deleteSubscribeToUser = (id) => {
  return (dispatch) => {
    client.delete(Endpoint.SUBSCRIPTIONS, { params: { id } }).then((response) => {
      const data = response.data;
      dispatch(removeFriend(id));
      return data;
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
      client.setAccessToken(accessToken);
      dispatch(googleRegisterAction(response.data.user));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const sendTokenToClient = () => () => {
  if (storage.accessToken !== null) {
    client.setAccessToken(storage.accessToken);
  }
};
export const getLikedPosts = () => async (dispatch) => {
  try {
    const response = await client.get(Endpoint.LIKED_POSTS, {
      params: { page: 0, pageSize: 12 },
    });
    const data = response.data.content;
    dispatch(setLikedPosts(data));
  } catch (error) {
    console.error("Error fetching liked posts:", error);
  }
};
