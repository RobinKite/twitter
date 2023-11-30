import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";
import postsSliceReducer from "./slices/postsSlice";
import userSliceReducer from "./slices/userSlice";
import currentUserSliceReducer from "./slices/currentUser";
import messagesSlice from "./slices/messagesSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
    posts: postsSliceReducer,
    user: userSliceReducer,
    messages: messagesSlice,
    currentUser: currentUserSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
