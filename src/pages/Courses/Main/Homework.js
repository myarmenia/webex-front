import React from "react";
import { useTranslation } from "react-i18next";
import HintMessages from "./HintMessages";

const Homeworks = ({
  homeworks: hm = [],
  isDemo = false,
  isClosed = false,
  openHomeWorkVideo,
}) => {
  const { t } = useTranslation(["courses", "forms"]);

  const handleOpenHomeworkVideo = (e, item) => {
    e.preventDefault();
    return openHomeWorkVideo(item);
  };

  const courseLessonContext = (item) => (
    <button
      className="home-work"
      href="#"
      onClick={(e) => handleOpenHomeworkVideo(e, item)}
    >
      <i className="fa fa-backward homework-icon"></i>
      <span>{item.title}</span>
    </button>
  );
  const courseItemContext = (item) => (
    <a
      className="home-work"
      href="#"
      onClick={(e) => handleOpenHomeworkVideo(e, item)}
    >
      <i className="fa fa-play homework-icon" aria-hidden="true" />
      <span>{item.title}</span>
    </a>
  );
  const demoItemContext = (item) => (
    <>
      <span className="sub-lessons closed">
        <i className="fa fa-play homework-icon" aria-hidden="true" />
        {item.title} <i className="fa fa-lock" aria-hidden="true"></i>
      </span>
    </>
  );

  const hmRendering = (hm) =>
    hm.map((item, index) =>
      isDemo || isClosed ? (
        <li key={index}>{demoItemContext(item)}</li>
      ) : index === 0 ? (
        <li key={index}>{courseLessonContext(item)}</li>
      ) : (
        <li key={index}>{courseItemContext(item)}</li>
      )
    );

  //   console.log(hm, "hmw");
  return (
    <>
      {hm.length > 0 && (
        <div className="widget widget_course_level">
          <div className="container">
            <h5 className="mb-20">{t("homeworks.video_tasks")}</h5>
            <ul className="lh-30 mx-40">{hmRendering(hm)}</ul>
            <HintMessages isDemo={isDemo} isClosed={isClosed} />
          </div>
        </div>
      )}
    </>
  );
};

export default Homeworks;
