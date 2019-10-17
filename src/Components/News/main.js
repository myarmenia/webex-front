import React from 'react';
import mainJson from './mainJson.json';

function Main() {
    console.log(mainJson);
    return (
        <main className="col-lg-7 col-xl-8 order-lg-2">
            {
                mainJson.map((item, index) => {
                    return (
                        <article key={index} className="text-center text-md-left vertical-item post type-post status-publish format-standard has-post-thumbnail">
                            <div className="item-media post-thumbnail rounded">
                                <img src={require(`../../img/news/newMain.jpg`)} alt="" />
                                <div className="media-links">
                                    <a className="abs-link" title="" href={item.href}></a>
                                </div>
                            </div>
                            <div className="item-content">
                                <header className="entry-header">
                                    <h3 className="entry-title">
                                        <a href="blog-single-left.html" rel="bookmark">
                                            {item.title}
                                        </a>
                                    </h3>
                                    <span className="author vcard fs-18">
                                        <span>By: </span>
                                        <a className="url fn n" href="blog-left.html">
                                            {item.author}
                                        </a>
                                    </span>
                                    <div className="entry-meta">
                                        <span className="byline">
                                            <span className="posted-on">
                                                <a className="grey-link" href="#">
                                                    <i className="color-main icon-m-calendar-alt"></i>
                                                    <time className="entry-date published updated" datetime="2018-01-03T10:11:37+00:00">
                                                        {item.date}
                                                    </time>
                                                </a>
                                            </span>
                                            <span>
                                                <i className="color-main fa fa-eye"></i>
                                                {item.views}
                                        </span>
                                            <span className="comment-count">
                                                <a className="grey-link" href="#">
                                                    <i className="color-main icon-m-comment-alt"></i>
                                                    {item.comments}
                                            </a>
                                            </span>
                                        </span>
                                    </div>
                                </header>
                            </div>
                        </article>
                    )
                })
            }


            <nav className="navigation pagination @@navClassName" role="navigation">
                <button type="button" className="btn btn-maincolor full-width">load more<i className="fa fa-spinner fa-pulse"></i></button>
            </nav>

        </main>
    )
}

export default Main;