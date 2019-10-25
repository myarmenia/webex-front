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
import Payment1 from './Components/Payment';
import SingleCourse from './Components/Courses/SingleCourses/index';
import News from './Components/News'

import { ProtectedRoute } from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route render={({ location }) => (
        <Switch location={location}>
          <Route path='/' exact component={Main} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path="/aboutus" component={AboutUs} />
          {/* <Route path="/courses" component={Courses} /> */}
          <Route path="/news" component={News} />
          <Route path="/courses" component={Courses} />
          //<ProtectedRoute path='/courses' component={Courses} />
         <Route path='/payment' component={Payment1} />
        </Switch>

      )} />
      {/*<TransitionGroup>*/}
      {/*<CSSTransition*/}
      {/*key={location.key}*/}
      {/*timeout={2000}*/}
      {/*classNames='fade'*/}
      {/*>*/}
      {/*<Switch location={location}>*/}
      {/*<Route path='/' exact component={Main} />*/}
      {/*<Route path='/signup' component={SignUp} />*/}
      {/*<Route path='/signin' component={SignIn} />*/}
      {/*<Route path="/aboutus" component={AboutUs} />*/}
      {/*<Route path="/courses" component={Courses} />*/}
      {/*</Switch>*/}
      {/*</CSSTransition>*/}
      {/*</TransitionGroup>*/}

      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
