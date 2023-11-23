import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";
import postsSliceReducer from "./slices/postsSlice";
import userSliceReducer from "./slices/userSlice";
import usersListSliceReducer from "./slices/usersListSlice";
import friendsSliceReducer from "./slices/friendsSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
    posts: postsSliceReducer,
    user: userSliceReducer,
    usersList: usersListSliceReducer,
    friends: friendsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
