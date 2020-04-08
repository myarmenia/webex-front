import {
  USERDATA_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_ERROR,
} from "../types/currentUser";

export const UserDataSuccess = (data) => {
  return { type: USERDATA_SUCCESS, payload: data };
};

export const SignInSuccess = (user) => {
  return { type: SIGNIN_SUCCESS, payload: user };
};

export const SignInError = (errorMessage) => {
  return { type: SIGNIN_ERROR, errorMessage };
};

export const SignInRequest = () => {
  return { type: SIGNIN_REQUEST };
};
