import auth from '../auth';

export const SignInSuccess = user => {
  return { type: 'SIGNIN_SUCCESS', payload: user };
}

export const SignInError = errorMessage => {
  return { type: 'SIGNIN_ERROR', errorMessage };
}

export const SignInRequest = () => {
  return { type: 'SIGNIN_REQUEST' }
}

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