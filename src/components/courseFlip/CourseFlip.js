import React from "react";

const CourseFlip = ({ course }) => (
  <div className="col col-12 col-md-6 col-lg-3">
    <div className="course-flip h-100 ">
      <div className="course-front rounded bordered">
        <div className=" vertical-item content-padding">
          <div className="item-media rounded-top"></div>
          <div className="item-content">
            <h6 className="course-title">{course.name}</h6>
            <p>Դասեր: {course.lessons_count}</p>
            <p>Տևողություն: lessDuration(l) րոպե</p>
          </div>
        </div>
      </div>
      <div className="course-back rounded vertical-item content-padding ds">
        <div className="">
          <h6 className="course-title" style={{ paddingTop: "14px" }}>
            {course.name}
          </h6>
          <p>{course.description}</p>
          <div className="divider-32"></div>
          {/* <a href="#" className="btn btn-maincolor" id={course.id} onClick={this.courseButton}>Սկսել</a> */}
        </div>
      </div>
    </div>
  </div>
);

export default CourseFlip;
