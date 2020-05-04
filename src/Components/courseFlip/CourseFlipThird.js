import React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import courseDuration from "../../utils/courseDuration";

const CourseFlip = ({ course }) => {
  const { t } = useTranslation(["main", "courses", "translation"]);
  return (
    <div className="col col-12 col-md-6 col-lg-4">
      <div className="course-flip h-100 ">
        <div className="course-front rounded bordered">
          <div className=" vertical-item content-padding">
            <div className="item-media rounded-top"></div>
            <div className="item-content">
              <h6 className="course-title">{course.name}</h6>
              <p className="fs-18">
                {t(`courses:categoris.${course.cat}.why`)}
              </p>
              <p className="full-description">
                <Trans i18nKey={`courses:categoris.${course.cat}.full_descr`}>
                  {t(`courses:categoris.${course.cat}.full_descr`)}
                </Trans>
              </p>
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
            <p className="px-20">
              {t(`courses:categoris.${course.cat}.description`)}
            </p>
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
