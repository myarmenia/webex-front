import React from 'react';

import { Link, Route } from 'react-router-dom';

import logo from '../../../img/logo.png';

const NavBar = props => {
  return (
    <header className="page_header ds justify-nav-center s-borderbottom container-px-20 affix-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-4 col-md-5 col-11">
            <Link to="/" className="logo">
              <img src={logo} alt="Webex" />

            </Link>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-7 col-1">
            <div className="nav-wrap">
              <nav className="top-nav">
                <ul className="nav sf-menu">

                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to='/aboutus'>About us</Link>
                  </li>
                  <li>
                    <Link to='/news'>News</Link>
                  </li>
                  <li>
                    <Link to='/courses'>Courses</Link>
                  </li>
                  <li>
                    <Link to='/'>Price</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-4 d-none d-xl-block">
            <div class="top-includes main-includes">
              <Link class="sign-btn-form" to='/signup' ><i class="fw-900 s-16 fa fa-sign-in"></i>Sign Up</Link>
              <Link class="login-btn-form login_modal_window" to='/signin'><i class="fs-16 fa fa-user"></i>Sign In</Link>
            </div>
          </div>
        </div>
        <span className="toggle_menu"><span></span></span>
      </div>
    </header>
  );
}

export default NavBar;