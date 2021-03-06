import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
ReactDOM.render(
  <Provider store={store}>  
    <Router>
      <ScrollToTop />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
