import React, { useEffect } from 'react';

import './styles/bootstrap.min.css';
import './styles/animations.css';
import './styles/font-awesome.css';
import './styles/main.css';

import Navbar from './Components/Header/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import CopyRight from './Components/CopyRight';


import { Switch, Route } from 'react-router-dom';
import SignIn from './Components/Header/SignIn';
import SignUp from './Components/Header/SignUp';
import AboutUs from './Components/AboutUs'
import Courses from './Components/Courses';
import Payment from './Components/Payment';
import News from './Components/News'

import { connect } from 'react-redux';

import { getUserData } from './redux/actions/';

import { ProtectedRoute, GuestRoute } from './Components/ProtectedRoute';
import auth from './redux/auth/';

function App(props) {

  const NoMatchPage = () => {
    return (
      <h3 className='text-center'>404 - Not found</h3>
    );
  };

  useEffect(() => {
    if (auth.isAuthenticated()) {
      props.getUserData();
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Route render={({ location }) => (
        <Switch location={location}>
          <Route path='/' exact component={Main} />
          <GuestRoute path='/signup' component={SignUp} />
          <GuestRoute path='/signin' component={SignIn} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/news" component={News} />
          <ProtectedRoute path='/courses' component={Courses} />
          <Route path='/payment' component={Payment} />
          <Route component={NoMatchPage} />
        </Switch>
      )} />
      <Footer />
      <CopyRight />
    </div>
  );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
