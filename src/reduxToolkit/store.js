import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";
import postsSliceReducer from "./slices/postsSlice";
import userSliceReducer from "./slices/userSlice";

const store = configureStore({
  reducer: { app: appSliceReducer, posts: postsSliceReducer, user: userSliceReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
