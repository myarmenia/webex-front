import axios from 'axios';

import store from '../store';

import { API_SIGNIN_URL } from '../constants';

class Auth {

  isAuthenticated() {
    const authenticated = store.getState().currentUser.authenticated;
    return this.getToken() !== '' && authenticated;
  }

  signIn(credentials, resolve, reject) {
    axios.post(API_SIGNIN_URL, credentials, {
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    }).then(response => resolve(response)).catch(error => reject(error));
  }

  signUp() {

  }

  signOut() {

  }

  checkToken() {

  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }
}

export default new Auth()