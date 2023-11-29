import { createSlice } from "@reduxjs/toolkit";
import { client, storage } from "@/services";
import { Endpoint } from "@/constants";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: {},
    usersList: [],
    friendsList: [],
    friendRequests: [],
    friendSearches: [],
  },
  reducers: {
    loginUserAction: (state, action) => {
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
  },
});

export const {
  loginUserAction,
  getUser,
  setUsers,
  sendFriendRequest,
  removeFriend,
  setFriendSearches,
} = userSlice.actions;

export default userSlice.reducer;

// export function getUserAsync() {
//   return async function (dispatch) {
//     const response = await fetch(
//       `https://danit-final-twitter-8f32e99a3dec.herokuapp.com/users/profile`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       },
//     );
//     const userInfo = await response.json();
//     console.log(userInfo);

//     dispatch(getUser(userInfo));
//   };
// }

export const loginUser = (email, password) => (dispatch) => {
  const payload = { email, password };
  client.post(Endpoint.LOGIN, payload).then((response) => {
    console.log(response);
    const { access_token: accessToken, refresh_token: refreshToken } = response.data;
    storage.setTokens(accessToken, refreshToken);
    client.setAccessToken(accessToken);
    dispatch(loginUserAction(response.data.user));
  });
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
