import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const articleClassName = `text-center text-md-left vertical-item post type-post status-publish format-standard has-post-thumbnail`;

const MainNewsItem = ({ item }) => {
  const { t } = useTranslation(["main"]);
  return (
    <article className={articleClassName}>
      <div className="item-media post-thumbnail rounded">
        <img src={item.image} alt={item.slug} />
        <div className="media-links">
          <Link
            className="abs-link"
            to={`/news/${item.slug}`}
            title={item.slug}
          />
        </div>
      </div>
      <div className="item-content">
        <header className="entry-header">
          <h3 className="entry-title">
            <Link to={`/news/${item.slug}`}>{item.title}</Link>
          </h3>
          <span className="author vcard fs-18">
            <span>{t("lastnews.author")}: </span>
            {/* <a className="url fn n" href="blog-left.html"></a> */}
            <Link className="url fn n" to={`/news/${item.slug}`}>
              {item.authorName}
            </Link>
          </span>
          <div className="entry-meta">
            <span className="byline">
              <span className="posted-on">
                <span className="grey-link">
                  <i className="color-main icon-m-calendar-alt"></i>
                  <time
                    className="entry-date published updated"
                    dateTime={item.datetime}
                  >
                    {item.date}
                  </time>
                </span>
              </span>
              <span>
                <i className="color-main fa fa-clock"></i>
                {item.duration}
                <span className="mx-1">{t(`courses.flipcard.minutes`)}</span>
              </span>
              {/* <span className="comment-count">
                      <a className="grey-link" href="#">
                        <i className="color-main icon-m-comment-alt"></i>
                        {item.comments}
                      </a>
                    </span> */}
            </span>
          </div>
        </header>
      </div>
    </article>
  );
};

export default MainNewsItem;
