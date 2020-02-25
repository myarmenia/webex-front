import auth from '../auth';

import { SignInSuccess, SignInRequest, SignInError } from '../actions/signin';

export const SignIn = (credentials, redirect) => {
  return dispatch => {
    dispatch(SignInRequest());
    auth.signIn(credentials, response => {
      dispatch(SignInSuccess(response.data.user));
      auth.setToken(response.data.access_token);
      redirect();
    }, error => {
      dispatch(SignInError(error.message));
    });
  };
}

export const getUserData = () => {
  return dispatch => {
    dispatch(SignInRequest());
    auth.getUserData(response => {
      dispatch(SignInSuccess(response.data));
    }, error => {
      dispatch(SignInError(error.message));
    });
  }
}