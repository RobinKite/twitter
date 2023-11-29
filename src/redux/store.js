import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";
import postsSliceReducer from "./slices/postsSlice";
import userSliceReducer from "./slices/userSlice";
import currentUserSliceReducer from "./slices/currentUser";
const store = configureStore({
  reducer: {
    app: appSliceReducer,
    posts: postsSliceReducer,
    user: userSliceReducer,
    currentUser: currentUserSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
