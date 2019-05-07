export default class Auth {
  static getToken() {
    return localStorage.getItem('auth_token')
  }
  
  static setToken({ auth_token }) {
    localStorage.setItem('auth_token', auth_token);
  }
  
  static isLoggedIn() {
    return Boolean(localStorage.getItem('auth_token'));
  }
  
  static logOut() {
    localStorage.removeItem('auth_token');
  }
}

window.Auth = Auth;