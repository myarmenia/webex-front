import React from 'react';
import './styles/bootstrap.min.css';
import './styles/animations.css';
import './styles/font-awesome.css';
import './styles/main.css';
import Header from './Components/Header/';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

    
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={() => <>< Header main /> <Main /><Footer /></>} />
      </Router>
    </div>
  );
}

export default App;
