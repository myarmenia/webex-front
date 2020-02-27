import React, { Component } from "react";
import { connect } from "react-redux";

import lessDuration from "../duration.js";

import CourseFlip from "../../components/courseFlip/CourseFlip";

import TabButton from "../../components/tabButton/TabButton";

import {
  packagesSelector,
  coursesOfPackage
} from "../../redux/selectors/coursesData";
import { getFullPackages } from "../../redux/actionCreators/coursesData";

import { SetTabPackageId } from "../../redux/actions/coursesData";

let lessons = require("../../language.json");
class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 0
    };
  }

  componentDidMount() {
    this.props.fetchFullPackages();
  }

  f3 = e => {
    const arr = document.querySelector(".course-filters");
    const arr1 = document.querySelector("#course");
    for (let j = 0; j < arr1.children.length; j++) {
      if (j % 2 == 0 && j > 4) {
        arr1.children[j].style.transform = "scale(0)";
        arr1.children[j].style.left = "-100px";
        arr1.children[j].style.top = "-100px";
        let p = arr1.children[j];
        setTimeout(function() {
          p.style.transition = "0.1s";
          p.style.left = "0px";
          p.style.top = "0px";
          p.style.transform = "scale(1)";
        }, 300);
      } else if (j % 2 == 0 && j < 4) {
        arr1.children[j].style.transform = "scale(0)";
        arr1.children[j].style.left = "100px";
        arr1.children[j].style.top = "100px";
        let p = arr1.children[j];
        setTimeout(function() {
          p.style.transition = "0.1s";
          p.style.left = "0px";
          p.style.top = "0px";
          p.style.transform = "scale(1)";
        }, 400);
      } else {
        arr1.children[j].style.transform = "scale(0)";
        arr1.children[j].style.left = "100px";
        arr1.children[j].style.top = "100px";
        let p = arr1.children[j];
        setTimeout(function() {
          p.style.transition = "0.1s";
          p.style.left = "0px";
          p.style.top = "0px";
          p.style.transform = "scale(1)";
        }, 300);
      }
    }
    e.preventDefault();
    for (let i = 0; i < arr.children.length; i++) {
      arr.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
    const data = e.target.getAttribute("data-filter");
    this.setState({ filter: +data });
  };
  courseButton = ele => {
    ele.preventDefault();
  };

  handleClick = e => {
    e.preventDefault();
    const id = e.target.getAttribute("data-filter"),
      index = e.target.getAttribute("data-index");

    console.log(index);

    this.setState({ filter: parseInt(index) });
    this.props.SetTabPackageId(id);
  };

  renderCourseFlip = course => <CourseFlip course={course} key={course.id} />;

  render() {
    const { coursesOfPackage, packages } = this.props;

    const tabPackages = packages.map(({ id, name }, index) => (
      <TabButton
        key={id}
        active={this.state.filter === index}
        filter={id}
        index={index}
        title={name}
        handleClick={this.handleClick}
      />
    ));

    const courses = coursesOfPackage.map(course =>
      this.renderCourseFlip(course)
    );

    console.log(coursesOfPackage);

    return (
      <section className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-center">Վեբ ծրագրավորման դասընթացներ</h3>
              <h6 className="special-heading fw-300 text-center mb-3">
                <p>Մանրամասն ծանոթացեք վեբ ուսուցման ծրագրին</p>
                <p>
                  Այստեղ ներկայացված են մեր վեբ ծրագրավորման վիդեոդասերը, որոնք
                  դիտելով դուք կծանոթանաք մեր դասավանդման մեթոդիկային։
                </p>
              </h6>
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-7">
                  <div className="filters course-filters text-lg-right">
                    {tabPackages}
                  </div>
                </div>
              </div>
              <div className="row text-center isotope-wrapper c-mb-30">
                {courses}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  packages: packagesSelector(state),
  coursesOfPackage: coursesOfPackage(state)
});

const mapDispatchToProps = dispatch => ({
  fetchFullPackages: () => dispatch(getFullPackages()),
  SetTabPackageId: id => dispatch(SetTabPackageId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
