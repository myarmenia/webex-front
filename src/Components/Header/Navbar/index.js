import React, { useState } from 'react';

import { Link, Route } from 'react-router-dom';

import logo from '../../../img/logo.png';
import auth from '../../../redux/auth';

import { connect } from 'react-redux';

const NavBar = props => {

  const [toggle, setToggle] = useState(false);

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
                    <Link to='/#aboutUs'>About us</Link>
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
            <div className="top-includes main-includes">
              {auth.isAuthenticated() ?
                (
                  <Link to='/profile' ><i className="fs-16 fa fa-user"></i> Profile</Link>
                ):
                (
                  <>
                    <Link className="sign-btn-form" to='/signup' ><i className="fw-900 s-16 fa fa-sign-in"></i>Sign Up</Link>
                    <Link className="login-btn-form login_modal_window" to='/signin'><i className="fs-16 fa fa-user"></i>Sign In</Link>
                  </>
                )
              }
            </div>
          </div>
        </div>
        <span className="toggle_menu" onClick={e => setToggle(toggle => !toggle)}><span></span></span>
      </div>
    </header>
  );
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(NavBar);