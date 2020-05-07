import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTranslation } from "react-i18next";

import WebexListLink from "../../../components/menuLink/MenuLink";

import logo from "../../../img/logo.png";
import auth from "../../../redux/auth";

const NavBar = ({ currentUser, onChangeLaguage, langsWhitelist, location }) => {
  const { t } = useTranslation(["navbar"]);

  function handleChangeLanguage(language) {
    onChangeLaguage(language);
  }

  const showLoadingOrUserName = ({
    user: { name = "", last_name = "" },
    authenticated,
  }) => {
    return authenticated ? `${name} ${last_name}` : <CircularProgress />;
  };

  const [toggle, setToggle] = useState(false);
  const updateToggle = () => toggle && setToggle(false);
  const mobileActiveClass = toggle ? "mobile-active" : "";

  const GuestNavigation = () => (
      <>
        <WebexListLink
          name={t("nav.home")}
          exact={true}
          handleClick={updateToggle}
        />

        <WebexListLink
          to={"/#aboutUs"}
          name={t("nav.about_us")}
          handleClick={updateToggle}
          smooth
          hash="true"
        />

        <WebexListLink
          to={location.pathname === "/" ? "/#lastNews" : "/news"}
          name={t("nav.news")}
          smooth
          handleClick={updateToggle}
          hash={location.pathname === "/"}
        />

        <WebexListLink
          to={"/#coursesSection"}
          name={t("nav.courses")}
          handleClick={updateToggle}
          smooth
          hash="true"
        />

        <WebexListLink
          to={"/#pricesSection"}
          name={t("nav.prices")}
          smooth
          handleClick={updateToggle}
          hash="true"
        />

        <WebexListLink
          child={<i className="fs-16 fa fa-user"></i>}
          className="sign-btn-form"
          to="/signup"
          name={t("nav.sign_up")}
          handleClick={updateToggle}
        />
        <WebexListLink
          child={<i className="fw-900 s-16 fa fa-sign-in"></i>}
          className="login-btn-form"
          to="/signin"
          name={t("nav.sign_in")}
          handleClick={updateToggle}
        />
      </>
    ),
    AuthenticatedNavigation = () => (
      <>
        {/* <WebexListLink
          to={"/payment"}
          name={t("nav.prices")}
          handleClick={updateToggle}
        /> */}

        <WebexListLink
          to={"/news"}
          name={t("nav.news")}
          handleClick={updateToggle}
        />

        <WebexListLink
          to={"/courses"}
          name={t("nav.courses")}
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
          name={t("nav.log_out")}
          child={<i className="fs-16 fa fa-sign-out"></i>}
          handleClick={() => {
            auth.logOut();
          }}
        />
      </>
    );

  // make new component LangBar
  const renderLanguageBar = (langsWhitelist) =>
    langsWhitelist.map((lang, index) => (
      <button key={index} onClick={() => handleChangeLanguage(lang)}>
        {t(`langs.${lang}`)}
      </button>
    ));
  //col-xl-2 col-lg-4 col-md-5 col-11
  return (
    <header
      className={`
        page_header ds justify-nav-center
        s-borderbottom container-px-20
          affix-top ${mobileActiveClass}`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-1">
            <Link to="/" className="logo">
              <img src={logo} alt="Webex" />
            </Link>
          </div>
          <div className="col-xl-11 ">
            <div className="nav-wrap pull-right">
              <nav className="top-nav">
                <ul className="nav sf-menu">
                  {auth.isAuthenticated()
                    ? AuthenticatedNavigation()
                    : GuestNavigation()}
                  <li className="language-bar">
                    {renderLanguageBar(langsWhitelist)}
                  </li>
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

export default connect(mapStateToProps)(withRouter(NavBar));
