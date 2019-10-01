import React from 'react';
import CoursesFilter from '../Courses/courses';
import Contact from '../Contact';
import Cubes from '../Header/Cubes';
import About from '../AboutUs/';
import Section5 from '../AboutUs/Section5/Section5';
import Count from '../CountUp/';
import Price from '../Courses/Pricing';
import Advantages from '../Courses/Advantages';
import Registration from '../Registration';


const Home = props => {
  return (
    <main>
      <Cubes />
      <About />
      {/* <News /> - do not touch! Dangerous for life */}
      <CoursesFilter />
      <Count />
      <Price />
      <Advantages />

      {/* <Price /> - do not touch! Dangerous for life */}
      {/*<Section5 />*/}
      <Contact />
      {/*<Registration />*/}
    </main>
  );
}

export default Home;