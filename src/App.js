import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import "./styles/bootstrap.min.css";
import "./styles/animations.css";
import "./styles/font-awesome.css";
import "./styles/main.css";

import Navbar from "./pages/Header/Navbar";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import CopyRight from "./pages/CopyRight";

import SignIn from "./pages/Header/SignIn";
import SignUp from "./pages/Header/SignUp";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Demo from "./pages/Demo";
import Payment from "./pages/Payment";
import News from "./pages/News";

import CoursesFilter from "./pages/Courses/courses";
import { ProtectedRoute, GuestRoute } from "./pages/ProtectedRoute";

import { getUserData } from "./redux/actionCreators/signin";
import auth from "./redux/auth/";

function App({ getUserData }) {
  const { t, i18n } = useTranslation(["translation"]);
  const {
    options: { whitelist = [] },
  } = i18n;
  const langsWhitelist = whitelist.slice(0, -1);

  const onChangeLaguage = (lang) => {
    console.log(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };
  const NoMatchPage = () => {
    return <h3 className="text-center">404 - {t("translation:not_found")}</h3>;
  };

  useEffect(() => {
    if (auth.isAuthenticated()) {
      getUserData();
    }
  }, [getUserData]);

  return (
    <div className="App">
      {/* <h1>{t("translation:welcome")}</h1> */}
      <Navbar
        onChangeLaguage={onChangeLaguage}
        langsWhitelist={langsWhitelist}
      />
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route path="/" exact component={Main} />
            <GuestRoute path="/signup" component={SignUp} />
            <GuestRoute path="/signin" component={SignIn} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/news" component={News} />
            <ProtectedRoute path="/courses/:courseId?" component={Courses} />
            <ProtectedRoute path="/profile" component={Profile} />
            <GuestRoute path="/demo/:courseId" component={Demo} />
            <GuestRoute path="/demo/" component={CoursesFilter} />
            <Route path="/payment" component={Payment} />
            <Route component={NoMatchPage} />
          </Switch>
        )}
      />
      <Footer />
      <CopyRight />
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
