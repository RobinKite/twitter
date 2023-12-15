import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";
import postsSliceReducer from "./slices/postsSlice";
import userSliceReducer from "./slices/userSlice";
import currentUserSliceReducer from "./slices/currentUser";
import messagingSlice from "./slices/messagingSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
    posts: postsSliceReducer,
    user: userSliceReducer,
    messaging: messagingSlice,
    currentUser: currentUserSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
