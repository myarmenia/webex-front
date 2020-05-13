import auth from "../auth";
import api from "../api";

import {
  UserDataSuccess,
  SignInSuccess,
  SignInRequest,
  SignInError,
  NotificationDeleteSuccess,
} from "../actions/signin";

export const SignIn = (credentials, redirect) => {
  return (dispatch) => {
    dispatch(SignInRequest());
    auth.signIn(
      credentials,
      (response) => {
        dispatch(SignInSuccess(response.data.user));
        auth.setToken(response.data.access_token);
        redirect();
      },
      (error) => {
        dispatch(SignInError(error.message));
      }
    );
  };
};

export const getUserData = () => {
  return (dispatch) => {
    dispatch(SignInRequest());
    auth.getUserData(
      (response) => {
        dispatch(UserDataSuccess(response.data));
      },
      (error) => {
        dispatch(SignInError(error.message));
      }
    );
  };
};

export const deleteNotification = (id) => {
  return (dispatch) => {
    dispatch(SignInRequest());
    api
      .deleteNotification(id)
      .then((response) => dispatch(NotificationDeleteSuccess(id)))
      .catch((error) => dispatch(SignInError(error.message)));
  };
};

export const markNotifications = (notification_ids) => {
  return dispatch => { 
    api.markNotifications(notification_ids)
  };
};
