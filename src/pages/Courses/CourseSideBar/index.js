import React from "react";

import { Link } from "react-router-dom";

import "../courses.css";

const DropDownLessons = ({ lessons, openVideo }) => (
  <div>
    {lessons.map((lesson) => (
      <p
        key={lesson.id}
        onClick={() => openVideo(lesson)}
        className={`sub-lessons ${!lesson.video && "closed"}`}
      >
        {`${lesson.order}. ${lesson.title}`}
        {!lesson.video && <i className="fa fa-lock" />}
      </p>
    ))}
  </div>
);

const Course = ({
  currentCourseId,
  lessons,
  courses,
  openVideo,
  path_mode = "demo",
}) => {
  return (
    <ul>
      {courses ? (
        courses.map((course) => {
          return (
            <div key={course.id}>
              <li
                className="cat-item"
                // onClick={e => openCourse(e, index, item.id)}
              >
                <Link to={`/${path_mode}/${course.id}`}>{course.name}</Link>
                <span>{course.lessons_count}</span>
              </li>
              {currentCourseId === course.id && (
                <DropDownLessons lessons={lessons} openVideo={openVideo} />
              )}
            </div>
          );
        })
      ) : (
        <li className="cat-item">
          <div>
            Loading <i className="fa fa-spinner fa-pulse" aria-hidden="true" />
          </div>
        </li>
      )}
    </ul>
  );
};

export const CourseSideBar = React.memo(Course);
