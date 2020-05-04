import React from "react";

function CourseType({ test_description, test_btn_text }) {
  return (
    <>
      <span style={{ color: "#cecdcd", fontSize: "13px" }}>
        #HTML, #CSS, #Boostrap, #jQuery, #JavaScript, #React js, #Redux ...
      </span>
      <p>{test_description}</p>
      <div className="tagcloud">
        <a href="blog-right.html" className="tag-cloud-link courses">
          {test_btn_text}
        </a>
      </div>
    </>
  );
}

export default CourseType;
