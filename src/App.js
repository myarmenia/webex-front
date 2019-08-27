import React from 'react';
import './styles/bootstrap.min.css';
import './styles/animations.css';
import './styles/font-awesome.css';
import './styles/main.css';
import Header from './Components/Header/';
import Home from './Components/Home/';
import ItSlide from './Components/it_slide';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={() => <>< Header main /> <Home /></>} />
      </Router>
    </div>
  );
}

export default App;
