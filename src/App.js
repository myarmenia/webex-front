import React from 'react';
import './styles/bootstrap.min.css';
import './styles/animations.css';
import './styles/font-awesome.css';
import './styles/main.css';
import ItSlide from './Components/it_slide'
import './App.css';
import SignIn from './Components/SignIn.js';

function App() {
  return (
    <div className="App">
      <ItSlide />
      <SignIn />
    </div>
  );
}

export default App;
