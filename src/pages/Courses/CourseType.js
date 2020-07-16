import React from "react";
import { Link } from "react-router-dom";

function CourseType({ courses, test_description, test_btn_text }) {
  return (
    <>
      <p style={{ color: "#cecdcd", fontSize: "13px" }}>
        {courses.map(({ id, name }) => (
          <Link className="d-block" to={`/quiz/${id}`}>
            #{name}
          </Link>
        ))}
      </p>
      <p>{test_description}</p>
      {/* <div className="tagcloud">
        <a href="#!" className="tag-cloud-link courses">
          {test_btn_text}
        </a>
      </div> */}
    </>
  );
}

export default CourseType;
