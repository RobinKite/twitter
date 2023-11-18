import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import { storeCreator } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = storeCreator();

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
