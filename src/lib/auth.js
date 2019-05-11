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
    return fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        X_API_TOKEN: "km2K6M5CjHpmpymf",
        "Content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => {
        if (!res.ok) throw "error";
        return res;
      })
      .then(res => res.json())
      .then(Auth.setToken)
  }
}

window.Auth = Auth;
