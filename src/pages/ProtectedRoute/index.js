import React from "react";

import { currentActivationSelector } from "../../redux/selectors/currentUser";

import { connect } from "react-redux";

import auth from "../../redux/auth";

import { Route, Redirect as RouterRedirect } from "react-router-dom";
import { getUserData } from "../../redux/actionCreators/signin";
import {Loader} from "../../Components/Loader/loader";
const Redirect = ({ pathname = "/signin", location }) => (
  <RouterRedirect
    to={{
      pathname,
      state: {
        from: location,
      },
    }}
  />
);

const mapStateToProps = (state) => ({
  user: state.currentUser.user,
  currentActivation: currentActivationSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(getUserData()),
});

export const ProtectedRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ component: Component, user, currentActivation, ...rest }) => {
  /**
   * Wait untill the activations are loaded from API, show loader
   * If the user is not Authenticated redirect immediately
   *
   * Or if the activations are loaded and the user does not have currentActivation => redirect
   *
   */
  if (!currentActivation) {
    if (!auth.isAuthenticated() || currentActivation === false)
      return <Redirect location="/courses" />;

    return <Loader />;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          auth.isAuthenticated() &&
          user.email_verified_at !== null &&
          (currentActivation.attendances_count < 5 || currentActivation.is_paid)
        ) {
          return <Component {...props} />;
        } else {
          return <Redirect location={props.location} />;
        }
      }}
    />
  );
});

export const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <Redirect location={props.loc} />;
        }
      }}
    />
  );
};

export const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Redirect pathname="/profile" location={props.location} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
