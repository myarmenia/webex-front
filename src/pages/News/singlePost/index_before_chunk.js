import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import NoMatchPage from "../../noMatchPage";
import Search from "../Search";
import Tags from "../Tags";
import Popular from "../Popular";
import SocialMedia from "../socialMedia";
import LeaveComment from "./leaveComment";

import newsMock from "../lastNews/newsMock";

function SinglePost({
  match: {
    params: { slug = "" },
  },
}) {
  window.scrollTo(0, 150);
  const { t } = useTranslation(["main", "translation"]);
  const currentNews =
    newsMock.filter(({ slug: postSlug }) => postSlug === slug)[0] || {};
  // console.log(currentNews);

  /**
   * for feature
   * (if loading === false && currentNews.length === 0) return <NoMatchPage notFound={'text'}>
   */
  if (!currentNews.id)
    return <NoMatchPage notFound={t("translation:not_found")} />;
  return (
    <>
      <section className="ls s-pt-60 s-pb-30 s-pt-lg-100 s-pb-lg-50 c-gutter-0">
        <div className="container">
          <div className="col-12">
            <div className="item-media rounded post-thumbnail">
              {/* <img src={require(`../../../img/news/newMain.jpg`)} alt="" /> */}
              <img src={currentNews.image} alt={slug} />
            </div>
          </div>
        </div>
      </section>

      <section className="ls s-pb-50 s-pb-lg-100 c-gutter-50">
        <div className="container">
          <div className="row">
            <main className="col-lg-7 col-xl-8">
              <article className="vertical-item post type-post status-publish format-standard has-post-thumbnail single-post">
                <div className="item-content">
                  <header className="entry-header">
                    <h2>{currentNews.title}</h2>
                    <span className="author vcard fs-18">
                      <span>{t("lastnews.author")}: </span>
                      <Link to={`/news/${slug}`} className="url fn n">
                        {currentNews.authorName}
                      </Link>
                    </span>
                    <div className="entry-meta">
                      <span className="byline">
                        <span className="posted-on">
                          <span className="grey-link" href="#">
                            <i className="color-main icon-m-calendar-alt"></i>
                            <time
                              className="entry-date published updated"
                              dateTime={currentNews.datetime}
                            >
                              {currentNews.date}
                            </time>
                          </span>
                        </span>
                        <span>
                          <i className="color-main fa fa-clock"></i>
                          {currentNews.duration}
                          <span className="mx-1">
                            {t(`courses.flipcard.minutes`)}
                          </span>
                        </span>
                        {/* <span className="comment-count">
                          <a className="grey-link" href="#comments">
                            <i className="color-main icon-m-comment-alt"></i>5
                          </a>
                        </span> */}
                      </span>
                    </div>
                    {/* <div className="tagcloud">
                      <a href="#" className="tag-cloud-link">
                        Technology
                      </a>

                      <a href="#" className="tag-cloud-link">
                        Humanities
                      </a>
                    </div> */}
                  </header>

                  <div className="entry-content">
                    <p>{currentNews.text}</p>
                  </div>
                </div>
              </article>

              <div id="comments" className="comments-area rounded">
                <h5
                  id="reply-title"
                  className="comment-reply-title text-center"
                >
                  Leave a comment
                </h5>

                <LeaveComment />

                {/* <Comments /> */}
              </div>
            </main>

            <aside className="col-lg-5 col-xl-4">
              {/* <Search /> */}

              <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>
                <Tags />
              </div>

              <div className="widget widget_popular_entries">
                <h3 className="widget-title">Popular Posts</h3>
                <Popular />
              </div>

              <SocialMedia />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default SinglePost;
