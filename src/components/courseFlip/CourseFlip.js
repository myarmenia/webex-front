import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import courseDuration from "../../utils/courseDuration";

const CourseFlip = ({ course }) => {
  const { t } = useTranslation(["main", "translation"]);
  return (
    <div className="col col-12 col-md-6 col-lg-3">
      <div className="course-flip h-100 ">
        <div className="course-front rounded bordered">
          <div className=" vertical-item content-padding">
            <div className="item-media rounded-top"></div>
            <div className="item-content">
              <h6 className="course-title">{course.name}</h6>
              <p>
                {t("courses.flipcard.lessons")}: {course.lessons_count}
              </p>
              <p>
                <i className="fa fa-clock mr-1"></i>
                {courseDuration(course.summary_duration_count)}{" "}
                {t("courses.flipcard.minutes")}
              </p>
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
            <Link className="btn btn-maincolor" to={`/demo/${course.id}`}>
              {t("translation:buttons.get_started")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFlip;
