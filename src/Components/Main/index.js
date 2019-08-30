import React from 'react';
import ItSlide from '../it_slide';
import Courses from '../Courses/courses';
import SignUp from '../Header/SignUp'

const Home = props => {
  return (
    <main>
      <ItSlide />
      <SignUp />
      <Courses />
    </main>
  );
}

export default Home;