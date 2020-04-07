import React, { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../../../img/logo.png";
import auth from "../../../redux/auth";

import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import WebexListLink from "../../../components/menuLink/MenuLink";

const NavBar = ({ currentUser }) => {
  const showLoadingOrUserName = ({
    user: { name = "", last_name = "" },
    authenticated,
  }) => {
    return authenticated ? `${name} ${last_name}` : <CircularProgress />;
  };

  const [toggle, setToggle] = useState(false);
  const updateToggle = () => toggle && setToggle(false);
  const mobileActiveClass = toggle ? "mobile-active" : "";

  const GuestNavigation =()=>  (
      <>
        <WebexListLink exact={true} handleClick={updateToggle} />

        <WebexListLink
          to={"/#aboutUs"}
          name={"Մեր Մասին"}
          handleClick={updateToggle}
          smooth
          hash="true"
        />

        {/* <WebexListLink
          to={"/news"}
          name={"Նորություններ"}
          handleClick={updateToggle}
        /> */}

        <WebexListLink
          to={"/#coursesSection"}
          name={"Կուրսեր"}
          handleClick={updateToggle}
          smooth
          hash="true"
        />

        <WebexListLink
          to={"/#pricesSection"}
          name={"Գներ"}
          activeClassName="active"
          smooth
          handleClick={updateToggle}
          hash="true"
        />

        <WebexListLink
          child={<i className="fs-16 fa fa-user"></i>}
          className="sign-btn-form"
          to="/signup"
          name="Գրանցվել"
          handleClick={updateToggle}
        />
        <WebexListLink
          child={<i className="fw-900 s-16 fa fa-sign-in"></i>}
          className="login-btn-form"
          to="/signin"
          name="Մուտք"
          handleClick={updateToggle}
        />
      </>
    ),
    AuthenticatedNavigation =()=> (
      <>
        <WebexListLink
          to={"/payment"}
          name={"Գներ"}
          handleClick={updateToggle}
        />

        <WebexListLink
          to={"/news"}
          name={"Նորություններ"}
          handleClick={updateToggle}
        />

        <WebexListLink
          to={"/courses"}
          name={"Կուրսեր"}
          handleClick={updateToggle}
        />

        <WebexListLink
          to={"/profile"}
          name={showLoadingOrUserName(currentUser)}
          child={<i className="fs-16 fa fa-user"></i>}
          activeClassName="active"
          handleClick={updateToggle}
        />

        <WebexListLink
          name={"Log Out"}
          child={<i className="fs-16 fa fa-sign-out"></i>}
          handleClick={() => {
            auth.logOut();
          }}
        />
      </>
    );

  return (
    <header
      className={`
        page_header ds justify-nav-center
        s-borderbottom container-px-20
          affix-top ${mobileActiveClass}`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-4 col-md-5 col-11">
            <Link to="/" className="logo">
              <img src={logo} alt="Webex" />
            </Link>
          </div>
          <div className="col-xl-10 ">
            <div className="nav-wrap pull-right">
              <nav className="top-nav">
                <ul className="nav sf-menu">
                  {auth.isAuthenticated()
                    ? AuthenticatedNavigation()
                    : GuestNavigation()}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <span
          className={`toggle_menu ${mobileActiveClass}`}
          onClick={(e) => setToggle((toggle) => !toggle)}
        >
          <span></span>
        </span>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps)(NavBar);
