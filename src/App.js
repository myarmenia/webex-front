import React, { useEffect } from "react";

import "./styles/bootstrap.min.css";
import "./styles/animations.css";
import "./styles/font-awesome.css";
import "./styles/main.css";

import Navbar from "./pages/Header/Navbar";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import CopyRight from "./pages/CopyRight";

import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/Header/SignIn";
import SignUp from "./pages/Header/SignUp";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Demo from "./pages/Demo";
import Payment from "./pages/Payment";
import News from "./pages/News";

import CoursesFilter from "./pages/Courses/courses";

import { connect } from "react-redux";

import { getUserData } from "./redux/actionCreators/signin";

import { ProtectedRoute, GuestRoute } from "./pages/ProtectedRoute";

import auth from "./redux/auth/";

function App(props) {
  const NoMatchPage = () => {
    return <h3 className="text-center">404 - Not found</h3>;
  };

  useEffect(() => {
    if (auth.isAuthenticated()) {
      props.getUserData();
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
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
