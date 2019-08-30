import React from 'react';

import SignIn from './SignIn';

import SignUp from './SignUp';

import { Route, Link } from 'react-router-dom';

import Navbar from './Navbar';
import Cubes from './Cubes';

const Header = props => {
  return (
    <div>
      {/* <Navbar /> */}
      {props.main && <Cubes />}
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default Header