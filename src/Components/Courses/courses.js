import React, { Component } from "react";
import { connect } from "react-redux";

import lessDuration from "../duration.js";

import { coursesSelector } from "../../redux/selectors/coursesData";
import { getFullPackages } from "../../redux/actionCreators/coursesData";
import "./p.css";

let lessons = require("../../language.json");
class Courses extends Component {
  state = {
    filter: 3,
    course1: []
  };

  componentDidMount() {
    fetch("http://web.webex.am/api/courses")
      .then(response => response.json())
      .then(data => {
        this.setState({ course1: data });
      });
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
  render() {
    const { course1, filter } = this.state;
    const { courses } = this.props;

    console.log(courses);

    const a = course1.map((arjeq, ind) => {
      return arjeq.packages
        .filter(e => e.id === filter)
        .map((ev, index) => {
          let p = arjeq.sum_duration;
          arjeq.sum_duration.map((arj, ind) => {
            let t = arj.total;
          });
          let l = arjeq.sum_duration[0].total;
          let min = parseInt(l / 60);
          let sec = parseInt(l % 60);
          return (
            <div
              key={index}
              className={`col col-12 col-md-6 col-lg-3 ${this.state.filter}`}
            >
              <div className="course-flip h-100 ">
                <div className="course-front rounded bordered">
                  <div className=" vertical-item content-padding">
                    <div className="item-media rounded-top"></div>
                    <div className="item-content">
                      <h6 className="course-title">{arjeq.name}</h6>
                      <p>Դասեր: {arjeq.lessons_count}</p>
                      <p>Տևողություն: {lessDuration(l)} րոպե</p>
                    </div>
                  </div>
                </div>
                <div className="course-back rounded vertical-item content-padding ds">
                  <div className="">
                    <h6 className="course-title" style={{ paddingTop: "14px" }}>
                      {arjeq.name}
                    </h6>
                    <p>{arjeq.description}</p>
                    <div className="divider-32"></div>
                    {/* <a href="#" className="btn btn-maincolor" id={arjeq.id} onClick={this.courseButton}>Սկսել</a> */}
                  </div>
                </div>
              </div>
            </div>
          );
        });
    });

    console.log(a);

    return (
      <section
        className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70"
        id="courses"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-center">Վեբ ծրագրավորման դասընթացներ</h3>
              <h6
                className="special-heading fw-300 text-center"
                style={{ margin: "0 0 20px 0" }}
              >
                Մանրամասն ծանոթացեք վեբ ուսուցման ծրագրին
              </h6>
              <h6 style={{ margin: "0 0 20px 0", textAlign: "center" }}>
                Այստեղ ներկայացված են մեր վեբ ծրագրավորման վիդեոդասերը, որոնք
                դիտելով դուք կծանոթանաք մեր դասավանդման մեթոդիկային։
              </h6>
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-7">
                  <div className="filters course-filters text-lg-right">
                    <a
                      href=""
                      data-filter="3"
                      className="active"
                      onClick={this.f3}
                    >
                      Full Stack
                    </a>
                    <a href="" data-filter="1" onClick={this.f3}>
                      Front End
                    </a>
                    <a href="" data-filter="2" onClick={this.f3}>
                      Back End
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="row isotope-wrapper c-mb-30"
                data-filters=".course-filters"
                id="course"
                style={{ textAlign: "center" }}
              >
                {/* {zangvats} */}
                {a}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.coursesData.courses
});

const mapDispatchToProps = dispatch => ({
  fetchFullPackages: () => dispatch(getFullPackages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
