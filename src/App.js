import React from 'react';
import './styles/bootstrap.min.css';
import './styles/animations.css';
import './styles/font-awesome.css';
import './styles/main.css';
import Header from './Components/Header/';
import Navbar from './Components/Header/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import CopyRight from './Components/CopyRight';
import './App.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Switch, Route } from 'react-router-dom';
import SignIn from './Components/Header/SignIn';
import SignUp from './Components/Header/SignUp';
import AboutUs from './Components/AboutUs'
import Courses from './Components/Courses';
import SingleCourse from './Components/Courses/SingleCourses/index';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={2000}
            classNames='fade'
          >
            <Switch location={location}>
              <Route path='/' exact component={Main} />
              <Route path='/signup' component={SignUp} />
              <Route path='/signin' component={SignIn} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/courses" component={Courses} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />


      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
