import React, { useState, useEffect } from "react";
import {useTranslation, Trans} from "react-i18next";
import { connect } from "react-redux";

import {
  coursesSelector,
  lessonsByCourseId,
  courseById,
} from "../../redux/selectors/coursesData";

import { getFullPackages } from "../../redux/actionCreators/coursesData";

import { CourseSideBar } from "./CourseSideBar";
import Options from "./Options";
import CourseType from "./CourseType";
import Level from "./Level";
import Video from "./Main/video";
import Homeworks from "./Main/homeworks";

const Courses = ({
  currentCourse = {},
  courses,
  lessons,
  fetchFullPackages,
}) => {
  const {t} = useTranslation(['courses', 'translation']);
  const [videoData, setVideoData] = useState({
    video: "",
    duration: "",
    title: "",
    description: "",
  }); // HTML first video link

  useEffect(() => {
    fetchFullPackages();
  }, [fetchFullPackages]);

  useEffect(() => {
    if (lessons.length) {
      setVideoData({
        video: lessons[0].video,
        duration: lessons[0].duration,
        title: lessons[0].title,
        description: lessons[0].description,
      });
    }
  }, [currentCourse, lessons]);

  const openVideo = (e) => {
    setVideoData(e);
  };

  const openHomeWorkVideo = (e) => {
    setVideoData({
      ...videoData,
      video: e.video,
      title: e.title,
      description: e.description,
      duration: e.duration,
    });
  };

  return (
    <section className="ls s-py-60 s-pt-lg-100 s-pb-lg-70">
      <div className="container">
        <div className="row c-gutter-30">
          <aside className="col-lg-5 col-xl-4 course-widgets order-2 order-lg-1">
            <div className="bordered rounded">
              <div className="widget widget_course_tag">
                <Options
                  slogan={<Trans i18nKey={"slogan"}>{t("slogan")}</Trans>}
                />
              </div>
            </div>

            <div className="bordered rounded">
              <div className="widget widget_categories">
                <h3 className="widget-title">{t("all_videos_title")}</h3>
                <CourseSideBar
                  path_mode="courses"
                  courses={courses}
                  lessons={lessons}
                  currentCourseId={currentCourse.id || 1}
                  openVideo={openVideo}
                />
              </div>
            </div>

            <div className="bordered rounded">
              <div className="widget widget_course_type">
                <h3 className="widget-title">{t("test_title")}</h3>
                <CourseType />
              </div>
            </div>

            <div className="bordered rounded">
              <div className="widget widget_course_level">
                <h3 className="widget-title">{t("lessons_packages")}</h3>
                <Level />
              </div>
            </div>
          </aside>

          <main className="col-lg-7 col-xl-8 order-1 order-lg-2">
            <Video data={videoData} HomeWorkVideo />
            <Homeworks
              homeworks={videoData.homeworks}
              openHomeWorkVideo={openHomeWorkVideo}
              isClosed={videoData.video ? false : true}
            />

            <div style={{ display: videoData.code ? "block" : "none" }}>
              <pre> {videoData.code} </pre>
              <hr />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { courseId = 1 },
    },
  }
) => ({
  courses: coursesSelector(state),
  currentCourse: courseById(courseId)(state),
  lessons: lessonsByCourseId(courseId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFullPackages: () => dispatch(getFullPackages(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
