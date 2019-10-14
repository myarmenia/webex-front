import React, { useState, useEffect } from 'react';

import image from './images/01.jpg';

const coursesArr = [
  { title: 'HTML', image: './images/01.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'CSS', image: './images/02.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'JavaScript', image: './images/03.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'Jquery', image: './images/04.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'React', image: './images/05.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'PHP', image: './images/06.jpg', description: 'Lorem ipsum dolor sit amet' },
];


const Courses = props => {

  const courses = coursesArr.map((c, i) => (
    <div className="col-12 col-md-6" key={i}>
      <div className="h-100 bordered rounded">
        <div className="course-front">
          <div classNameName="vertical-item content-padding">
            <div className="item-media rounded-top">
              <img src={image} alt={c.title} />
            </div>
            <div className="item-content">
              <h6 className="course-title">
                <a href="#">{c.title}</a>
              </h6>
              <p>{c.description}</p>
              {/* <div className="star-rating course-rating">
                <span style={{ width: "91.5 %" }}>Rated <strong className="rating">4.00</strong> out of 5</span>
              </div> */}

              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">Technology</a>
                <a href="#" className="tag-cloud-link">Humanities</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="ls s-py-60 s-pt-lg-100 s-pb-lg-70">
      <div className="container">
        <div className="row c-gutter-30">
          <aside className="col-lg-5 col-xl-4 course-widgets order-2 order-lg-1">
            {/* <div className="widget widget_search ds p-30 rounded">
              <h3 className="widget-title">Search</h3>
              <form role="search" method="get" className="search-form" action="/">
                <label for="search-form-widget">
                  <span className="screen-reader-text">Search for:</span>
                </label>
                <input type="search" id="search-form-widget" className="search-field form-control" placeholder="" value="" name="search" />
                <button type="submit" className="search-submit">
                  <span className="screen-reader-text">Search</span>
                </button>
              </form>
            </div> */}


            <div className="bordered rounded">
              <div className="widget widget_course_tag">

                <h3 className="widget-title">Selected Options:</h3>

                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    Science <span className="remove" aria-label="Remove this item">×</span>
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Business <span className="remove" aria-label="Remove this item">×</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="bordered rounded">
              <div className="widget widget_categories">

                <h3 className="widget-title">Select Category</h3>

                <ul>
                  <li className="cat-item">
                    <a href="blog-right.html">Technology</a>
                    60
											<ul className="children">
                      <li className="cat-item">
                        <a href="blog-right.html">Language
													</a>
                        15
												</li>
                      <li className="cat-item">
                        <a href="blog-right.html">Science
													</a>
                        23
												</li>
                    </ul>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Health</a>
                    <span>12</span>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Humanities</a>
                    <span>45</span>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Business</a>
                    <span>78</span>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Math</a>
                    <span>55</span>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Marketing</a>
                    <span>23</span>
                  </li>

                </ul>
              </div>

            </div>

            <div className="bordered rounded">
              <div className="widget widget_course_type">

                <h3 className="widget-title">Course Type</h3>

                <ul>
                  <li className="cat-item">
                    <a href="blog-right.html">Certificate</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Diploma</a>
                  </li>
                </ul>
              </div>


            </div>

            <div className="bordered rounded">
              <div className="widget widget_learning_area">

                <h3 className="widget-title">Learning Area</h3>

                <ul>
                  <li className="cat-item">
                    <a href="blog-right.html">Academic</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Workplace</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Personal Development</a>
                  </li>
                </ul>
              </div>

            </div>

            <div className="bordered rounded">
              <div className="widget widget_course_level">

                <h3 className="widget-title">Course Level</h3>

                <ul>

                  <li className="cat-item">
                    <a href="blog-right.html">Level 1</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Level 2</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Level 3</a>
                  </li>
                </ul>
              </div>

            </div>

            <div className="bordered rounded">
              <div className="widget widget_course_features">

                <h3 className="widget-title">Course Features</h3>

                <ul>
                  <li className="cat-item">
                    <a href="blog-right.html">Audio</a>
                  </li>
                  <li className="cat-item">
                    <a href="blog-right.html">Video</a>
                  </li>
                </ul>
              </div>

            </div>

          </aside>
          <main className="col-lg-7 col-xl-8 order-1 order-lg-2">
            <div className="row c-mb-30">
              {courses}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Courses;