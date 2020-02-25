
export const SignInSuccess = user => {
  return { type: 'SIGNIN_SUCCESS', payload: user };
}

export const SignInError = errorMessage => {
  return { type: 'SIGNIN_ERROR', errorMessage };
}

export const SignInRequest = () => {
  return { type: 'SIGNIN_REQUEST' }
}


