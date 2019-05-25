import axios from "axios";


export default class Auth {
  static getToken() {
    return localStorage.getItem("auth_token");
  }

  static setToken({ auth_token }) {
    localStorage.setItem("auth_token", auth_token);
  }

  static isLoggedIn() {
    return Boolean(localStorage.getItem("auth_token"));
  }

  static logOut() {
    localStorage.removeItem("auth_token");
  }

  static login(credentials) {
    console.log(credentials);
    return axios.post("http://localhost:4000/auth/login", credentials)
      .then(res => {
        if (res.status !== 200) throw new Error("error");
        return res;
      })
      .then(Auth.setToken)
  }
}

window.Auth = Auth;
