import React from 'react';

import auth from '../../redux/auth';

import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      if (auth.isAuthenticated()) {
        return <Component {...props} />
      } else {
        return <Redirect to={{
          pathname: '/signin',
          state: {
            from: props.location
          }
        }} />
      }
    }} />
  );
}

export const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      if (auth.isAuthenticated()) {
        return <Redirect to={{
          pathname: '/profile',
          state: {
            from: props.location
          }
        }} />
      } else {
        return <Component {...props} />
      }
    }} />
  );
}