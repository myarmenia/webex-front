import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({
  image,
  title,
  slug,
  author = "By",
  authorName,
  date,
  datetime = "2019-06-10T10:11:37+00:00",
  minutes = "m",
  duration,
}) => {
  return (
    <div className="col-lg-4" data-animation="fadeInUp">
      <div className="card text-center text-md-left vertical-item">
        <Link to={`/news/${slug}`}>
          <img className="card-img-top" src={image} alt="Card image cap" />
        </Link>
        <div className="card-body">
          <div className="item-content">
            <header className="entry-header">
              <h4 className="entry-title">
                <Link to={`/news/${slug}`}>{title}</Link>
              </h4>
              <span className="author vcard fs-18">
                <span>{author}: </span>
                <Link to={`/news/${slug}`} className="url fn n">
                  {authorName}
                </Link>
              </span>
              <div className="entry-meta">
                <span className="byline">
                  <span className="posted-on">
                    <span className="grey-link">
                      <i className="color-main icon-m-calendar-alt"></i>
                      <time
                        className="entry-date published updated"
                        dateTime={datetime}
                      >
                        {date}
                      </time>
                    </span>
                  </span>
                  <span>
                    <i
                      className="color-main fa fa-clock"
                      aria-hidden="true"
                    ></i>
                    {duration}
                    <span className="mx-1">{minutes}</span>
                  </span>
                  {/* <span className="comment-count">
                    <a className="grey-link" href="#">
                      <i className="color-main icon-m-comment-alt"></i>13
                    </a>
                  </span> */}
                </span>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
