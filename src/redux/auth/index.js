import axios from "axios";

import {
  API_SIGNIN_URL,
  API_SIGNOUT_URL,
  API_SIGNUP_URL,
  API_USERDATA_URL,
} from "../config";

class Auth {
  tokenKey = "token";

  isAuthenticated() {
    return this.getToken() !== "";
  }

  signIn(credentials, resolve, reject) {
    axios
      .post(API_SIGNIN_URL, credentials, {
        withCredentials: true,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  }

  async signUp(data) {
    return await axios.post(API_SIGNUP_URL, { ...data });
  }

  logOut() {
    this.removeToken();
    window.location.assign("/");
  }

  getToken() {
    return localStorage.getItem(this.tokenKey) || "";
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  getUserData(resolve, reject) {
    if (this.isAuthenticated()) {
      axios
        .get(
          API_USERDATA_URL,
          {},
          {
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          }
        )
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    } else {
      reject({ error: "No token was found" });
    }
  }
}

export default new Auth();
