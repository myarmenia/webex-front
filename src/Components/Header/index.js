import React from 'react';

import SignIn from './SignIn';

import SignUp from './SignUp';

import { Route, Link } from 'react-router-dom';

import Navbar from './Navbar';
import Cubes from './Cubes';

const Header = props => {
  return (
    <header className="page_header ds justify-nav-center s-borderbottom container-px-20 affix-top">
      <Navbar />
      {props.main && <Cubes />}
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </header>
  );
}

export default Header