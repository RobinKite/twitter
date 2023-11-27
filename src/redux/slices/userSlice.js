import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../service/api";
import { setAuthToken, setRefreshToken } from "../../utils/tokens";

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
  const data = { email, password };
  api.post("/auth/login", data).then((response) => {
    console.log(response);
    setAuthToken(response.data.access_token);
    setRefreshToken(response.data.refresh_token);
    dispatch(loginUserAction(response.data.user));
  });
};

export const fetchUsers = (numberOfUsers) => {
  try {
    return (dispatch) => {
      api.get(`/users/recommended?page=0&pageSize=${numberOfUsers}`).then((response) => {
        const data = response.data.content;

        dispatch(setUsers(data));
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};

export const postSubcribeToUser = (id) => {
  try {
    return (dispatch) => {
      api.post("/subscriptions", { id }).then((response) => {
        const data = response.data;
        dispatch(sendFriendRequest(data));
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.error(error);
  }
};

export const deleteSubscribeToUser = (id) => {
  try {
    return (dispatch) => {
      api.delete(`/subscriptions?id=${id}`).then((response) => {
        const data = response.data;
        dispatch(removeFriend(id));
        return data;
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.error(error);
  }
};

export const fetchFriedsSearch = (query) => {
  try {
    return (dispatch) => {
      api.get(`/users/search?query=${query}&page=0&pageSize=12`).then((response) => {
        const data = response.data.content;
        dispatch(setFriendSearches(data));
        return data;
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.error(error);
  }
};
