import { api } from "@/service/api";
import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friendsList: [],
    friendRequests: [],
  },
  reducers: {
    sendFriendRequest: (state, action) => {
      state.friendRequests.push(action.payload);
    },
    removeFriend: (state, action) => {
      state.friendsList = state.friendsList.filter(
        (friend) => friend.id !== action.payload,
      );
    },
  },
});

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

export const { sendFriendRequest, removeFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
