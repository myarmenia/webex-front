import React from "react";
import ReactPlayer from "react-player";

import { API_VIDEO_URL } from "../../../redux/config";

import courseDuration from "../../../utils/courseDuration";

const Video = ({ data }) => {
  return (
    <div className="row c-mb-30">
      <h5 className="video-title">{data.title} </h5>
      {data.video && (
        <ReactPlayer
          url={`${API_VIDEO_URL}${data.video}`}
          controls
          playing={false}
          light={false}
          width="100%"
          height="100%"
        />
      )}
      <div className="video-descr">
        <div className="flex">
          <h6> {data.description}</h6>
          <span className="dur">
            <i className="fs-16 fa fa-clock-o" />{" "}
            {courseDuration(data.duration)}
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Video;
