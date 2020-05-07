import React from "react";
import { Link } from "react-router-dom";

const PopularItem = ({ thumb, title, date, dateTime, slug }) => {
  return (
    <li className="media align-items-center bordered rounded">
      <Link className="media-image" to={`/news/${slug}`}>
        <img className="rounded" src={thumb} alt={slug} />
      </Link>

      <div className="media-body">
        <h4>
          <Link to={`/news/${slug}`}>{title}</Link>
        </h4>
        <span className="posted-on">
          <span className="grey-link">
            <i className="icon-m-calendar-alt"></i>
            <time className="entry-date published updated" dateTime={dateTime}>
              {date}
            </time>
          </span>
        </span>
      </div>
    </li>
  );
};

export default PopularItem;