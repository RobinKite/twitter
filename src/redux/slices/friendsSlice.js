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
  console.log("send POST Subscription");
  try {
    return (dispatch) => {
      api.post("/subscriptions", { id: `${id}` }).then((response) => {
        const data = response.data;
        console.log(response);

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
      console.log("send DELETE Subscription");
      api.delete(`/subscriptions?id=${id}`).then((response) => {
        const data = response.data;
        console.log(response);

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
