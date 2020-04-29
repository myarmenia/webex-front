import React from "react";
import CoursesFilter from "../Courses/courses";
import Contact from "../Contact";
import Cubes from "../Header/Cubes";
import About from "../AboutUs/";
import Count from "../CountUp/";
import Price from "../Courses/Pricing";
import Advantages from "../Courses/Advantages";
import Registration from "../Registration";
import LastNews from "../News/lastNews/LastNews";

const Home = (props) => {
  return (
    <main>
      <Cubes />

      <About />
      {/* <News /> - do not touch! Dangerous for life */}
      <CoursesFilter />
      <Count />
      <LastNews />
      <Price />
      {/* <Price /> - do not touch! Dangerous for life */}
      {/*<Section5 />*/}
      <Contact />
      {/*<Registration />*/}
    </main>
  );
};

export default Home;
