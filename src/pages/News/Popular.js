import React from 'react';

function Popular() {
    return (
        <ul className="list-unstyled">

            <li className="media align-items-center bordered rounded">
                <a className="media-image" href="blog-single-right.html">
                    <img className="rounded" src={require(`../../img/news/recent_post1.jpg`)} alt="" />
                </a>
                <div className="media-body">
                    <h4>
                        <a href="blog-single-right.html">Tools of Trading: Modern Marketing</a>
                    </h4>
                    <span className="posted-on">
                        <a className="grey-link" href="#">
                            <i className="icon-m-calendar-alt"></i>
                            <time className="entry-date published updated" dateTime="2018-01-03T10:11:37+00:00">16. 01. 19</time>
                        </a>
                    </span>
                </div>
            </li>

            <li className="media align-items-center bordered rounded">
                <a className="media-image" href="blog-single-right.html">
                    <img className="rounded" src={require(`../../img/news/recent_post1.jpg`)} alt="" />
                </a>
                <div className="media-body">
                    <h4>
                        <a href="blog-single-right.html">Tools of Trading: Modern Marketing</a>
                    </h4>
                    <span className="posted-on">
                        <a className="grey-link" href="#">
                            <i className="icon-m-calendar-alt"></i>
                            <time className="entry-date published updated" dateTime="2018-01-03T10:11:37+00:00">16. 01. 19</time>
                        </a>
                    </span>
                </div>
            </li>

            <li className="media align-items-center bordered rounded">
                <a className="media-image" href="blog-single-right.html">
                    <img className="rounded" src={require(`../../img/news/recent_post1.jpg`)} alt="" />
                </a>
                <div className="media-body">
                    <h4>
                        <a href="blog-single-right.html">Tools of Trading: Modern Marketing</a>
                    </h4>
                    <span className="posted-on">
                        <a className="grey-link" href="#">
                            <i className="icon-m-calendar-alt"></i>
                            <time className="entry-date published updated" dateTime="2018-01-03T10:11:37+00:00">16. 01. 19</time>
                        </a>
                    </span>
                </div>
            </li>

        </ul>
    )
}

export default Popular;