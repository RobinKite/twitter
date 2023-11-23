import { api } from "@/service/api";
import { createSlice } from "@reduxjs/toolkit";

const userListSlice = createSlice({
  name: "usersList",
  initialState: { users: [] },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const fetchUsers = (numberOfUsers) => {
  try {
    return async (dispatch) => {
      api.get(`/users/recommended?page=0&pageSize=${numberOfUsers}`).then((response) => {
        const data = response.data.content;
        console.log(response.data.content);

        dispatch(setUsers(data));
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};

export const { setUsers } = userListSlice.actions;
export default userListSlice.reducer;
