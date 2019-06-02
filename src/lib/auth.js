import axios from "axios";

var event = new Event('storage_change');
export default class Auth {
  static token = localStorage.getItem("auth_token");
  static getToken() {
    return Auth.token || localStorage.getItem("auth_token");
  }

  static setToken({ auth_token }) {
    localStorage.setItem("auth_token", auth_token);

    window.dispatchEvent(event);
  }

  static isLoggedIn() {
    return Boolean(localStorage.getItem("auth_token"));
  }

  static logOut() {
    localStorage.removeItem("auth_token");
    window.dispatchEvent(event);
  }

  static getRole() {
    
    return Auth.isLoggedIn() ? axios.get('api/v1/users/role').then(res => res.data.role) :  Promise.resolve(null);
  }

  static login(credentials) {
    return axios.post("auth/login", credentials)
      .then(res => res.data)
      .then(Auth.setToken)
  }
}

window.Auth = Auth;
  