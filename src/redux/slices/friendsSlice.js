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
  },
});

export const postSubcribeToUser = (id) => {
  try {
    return async (dispatch) => {
      api.post("/subscriptions", `${id}`).then((response) => {
        const data = response.data;
        console.log(response);

        dispatch(sendFriendRequest(data));
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};

export const { sendFriendRequest } = friendsSlice.actions;
export default friendsSlice.reducer;
