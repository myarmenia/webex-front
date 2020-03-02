import React, { Component } from "react";
import { connect } from "react-redux";

import CourseFlip from "../../components/courseFlip/CourseFlip";

import TabButton from "../../components/tabButton/TabButton";

import {
  packagesSelector,
  coursesOfPackage,
  tabPackageIdSelector
} from "../../redux/selectors/coursesData";

import { getFullPackages } from "../../redux/actionCreators/coursesData";

import { SetTabPackageId } from "../../redux/actions/coursesData";

class Courses extends Component {
  componentDidMount() {
    this.props.fetchFullPackages();
  }

  handleTabButton = e => {
    e.preventDefault();
    const id = e.target.getAttribute("data-filter");

    this.props.SetTabPackageId(id);
  };

  renderCourseFlip = course => <CourseFlip course={course} key={course.id} />;

  render() {
    const { coursesOfPackage, packages } = this.props;

    const tabPackages = packages.map(({ id, name }) => (
      <TabButton
        key={id}
        active={parseInt(this.props.tabPackageId) === id}
        filter={id}
        title={name}
        handleClick={this.handleTabButton}
      />
    ));

    const courses = coursesOfPackage.map(course =>
      this.renderCourseFlip(course)
    );

    return (
      <section
        id="coursesSection"
        className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70"
      >
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
  coursesOfPackage: coursesOfPackage(state),
  tabPackageId: tabPackageIdSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchFullPackages: () => dispatch(getFullPackages()),
  SetTabPackageId: id => dispatch(SetTabPackageId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
