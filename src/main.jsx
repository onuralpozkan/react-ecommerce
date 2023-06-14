import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);
