import React from "react";
// import dotenv from "dotenv";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

// dotenv.config();
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
