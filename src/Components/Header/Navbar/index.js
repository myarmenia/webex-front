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
              <span className="logo-text color-darkgrey">utor</span>
            </Link>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-7 col-1">
            <div className="nav-wrap">
              <nav className="top-nav">
                <ul className="nav sf-menu">

                  <li className="active">
                    <a href="#">Home</a>
                    <ul>
                      <li>
                        <a href="index.html">Home Page</a>
                      </li>
                      <li>
                        <a href="index_singlepage.html">Single Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">Pages</a>
                    <ul>
                      <li>
                        <a href="course-categories.html">Course Categories</a>
                      </li>

                      <li>
                        <a href="shortcodes_widgets_default.html">Widgets</a>
                      </li>


                      <li>
                        <a href="events-left.html">Events</a>
                      </li>

                      <li>
                        <a href="team.html">Team</a>
                      </li>


                      <li>
                        <a href="comingsoon.html">Comingsoon</a>
                      </li>

                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>

                      <li>
                        <a href="404.html">404</a>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <span className="toggle_menu"><span></span></span>
      </div>
    </header>
  );
}

export default NavBar;