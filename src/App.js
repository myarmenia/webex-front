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
import ForgotPassword from "./pages/Header/ForgotPassword";
import ResetPassword from "./pages/Header/ResetPassword";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Demo from "./pages/Demo";
import Payment from "./pages/Payment";
import News from "./pages/News";
import SinglePost from "./pages/News/singlePost";
import Quiz from "./pages/Quiz";
import NoMatchPage from "./pages/noMatchPage";

import CoursesFilter from "./pages/Courses/courses";
import {
  ProtectedRoute,
  AuthenticatedRoute,
  GuestRoute,
} from "./pages/ProtectedRoute";

import { getUserData } from "./redux/actionCreators/signin";
import auth from "./redux/auth/";
import api from "./redux/api";

function App({ getUserData }) {
  const { t, i18n } = useTranslation(["translation"]);

  const {
    options: { whitelist = [] },
  } = i18n;
  const langsWhitelist = whitelist.slice(0, -1);

  const onChangeLaguage = (lang) => {
    localStorage.setItem("language", lang);
    // i18n.changeLanguage(lang); //I18n changes faster
    if (!auth.isAuthenticated()) return void window.location.reload();

    api
      .setPreferredLanguage(lang)
      .then((r) => window.location.reload())
      .catch((e) => {
        console.log(e);
        window.location.reload();
      });
  };

  useEffect(() => {
    if (auth.isAuthenticated()) {
      getUserData();
    }
  }, [getUserData]);

  return (
    <div className="App">
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
            <GuestRoute path="/forgot-password" component={ForgotPassword} />
            <GuestRoute
              path="/password/reset/:token"
              component={ResetPassword}
            />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/news/:slug" component={SinglePost} />
            <Route path="/news" component={News} />
            <ProtectedRoute path="/courses/:courseId?" component={Courses} />
            <AuthenticatedRoute path="/profile" component={Profile} />
            <GuestRoute path="/demo/:courseId" component={Demo} />
            <GuestRoute path="/demo/" component={CoursesFilter} />

            <AuthenticatedRoute path="/quiz/:courseId" component={Quiz} />

            <Route path="/payment" component={Payment} />
            <Route
              render={() => (
                <NoMatchPage notFound={t("translation:not_found")} />
              )}
            />
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
