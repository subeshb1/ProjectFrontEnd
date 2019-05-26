import axios from "axios";
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://final-project-trinity.herokuapp.com/"
      : "http://localhost:4000/",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: localStorage.getItem("auth_token"),
    X_API_TOKEN: "development",
    "Content-type": "application/json"
  }
});

export default api;
window.api = api;