import React from "react";
import { Link } from "react-router-dom";

// import Comments from "./Comments"; // maybe will be used later
// import PostTags from "./PostTags"; // maybe will be used later

const Article = ({ currentPost, author, minutes }) => {
  const { slug, authorName, datetime, date, duration, text } = currentPost;
  return (
    <main className="col-lg-7 col-xl-8">
      <article className="vertical-item post type-post status-publish format-standard has-post-thumbnail single-post">
        <div className="item-content">
          <header className="entry-header">
            <h2>{currentPost.title}</h2>
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
                  <i className="color-main fa fa-clock"></i>
                  {duration}
                  <span className="mx-1">{minutes}</span>
                </span>
                {/* <span className="comment-count">
                <a className="grey-link" href="#comments">
                  <i className="color-main icon-m-comment-alt"></i>5
                </a>
              </span> */}
              </span>
            </div>
            {/* <PostTags /> */}
          </header>

          <div className="entry-content">
            <p>{text}</p>
          </div>
        </div>
      </article>

      {/* <Comments /> */}
    </main>
  );
};

export default Article;
