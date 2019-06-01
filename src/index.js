import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";


axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://final-project-trinity.herokuapp.com/"
    : "http://localhost:4000/";

  
axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token;
  config.headers.X_API_TOKEN = "development";
  config.headers["Content-type"] = "application/json";
  return config;
});

window.axios = axios;
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

