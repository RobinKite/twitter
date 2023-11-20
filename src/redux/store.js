import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeEnhancers, middleware } from "./middleware";
import { loginUser } from "./actions/userInfo";

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export const storeCreator = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  store.dispatch(loginUser("user2@gmail.com", "2222"));
  return store;
};
