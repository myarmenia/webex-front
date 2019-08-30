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

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cubes from './Components/Header/Cubes';
import SignIn from './Components/Header/SignIn';
import SignUp from './Components/Header/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path='/' exact component={() =>
          <>
            {/* <div style={{ position: "relative" }} > */}
            <Cubes />
            {/* </div> */}
            <Main />
          </>}
        />

        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />

        {/* <Route path='/' /> */}
        <Footer />
        <CopyRight />

      </Router>
    </div>
  );
}

export default App;
