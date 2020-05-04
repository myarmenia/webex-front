import React from "react";
import ReactPlayer from "react-player";

import { API_VIDEO_URL } from "../../../redux/config";

import courseDuration from "../../../utils/courseDuration";

const Video = ({ data }) => {
  const getVideoUrl = (str) => {
    if (
      str.match(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
      )
    )
      return str;

    // ("691030f893b40cad2933b1242c5fbeb7.mp4");
    return `${API_VIDEO_URL}${str}`;
  };

  return (
    <div className="row c-mb-30">
      <h5 className="video-title">{data.title} </h5>
      {data.video && (
        <ReactPlayer
          url={getVideoUrl(data.video)}
          controls
          playing={false}
          light={false}
          width="100%"
          height="400px"
        />
      )}
      <div className="video-descr">
        <div className="flex">
          <h6> {data.description}</h6>
          <span className="dur">
            <i className="fs-16 fa fa-clock-o" />
            {courseDuration(data.duration)}
          </span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Video;
