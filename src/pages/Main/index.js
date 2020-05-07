import React from "react";
import CoursesFilter from "../Courses/courses";
import Contact from "../Contact";
import Cubes from "../Header/Cubes";
import About from "../AboutUs/";
import Count from "../CountUp/";
import Price from "../Courses/Pricing";
import LastNews from "../News/lastNews";

const Home = () => {
  return (
    <main>
      {/* <Cubes /> */}
      <About />
      <CoursesFilter />
      <Count />
      <LastNews />
      <Price />
      <Contact />
    </main>
  );
};

export default Home;
