import api from "./api";

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
    return api.post("auth/login", credentials)
      .then(Auth.setToken)
  }
}

window.Auth = Auth;
  