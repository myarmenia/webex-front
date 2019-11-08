import React, { useState, useEffect } from 'react';
//import './App.css';

export  default function ItSlide(){
   const [search,seTSearch] = useState('');
   const getSearch =(e)=>{
       console.log(e.target.value)
       seTSearch(e.target.value)
    }
    useEffect(()=>{

    },[search])
    return (
        <div id="canvas">
            <div id="box_wrapper">
        <section className="page_slider ds">
            <span className="flexslider-overlay"/>
            <img src="images/slide01.jpg" alt="" />
                <div className="container">
                    <div className="divider-15 d-none d-lg-block d-xl-none"/>
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="intro_layers_wrapper">
                                <div className="intro_layers">
                                    <div className="intro_layer">
                                        <h6 className="intro_before_featured_word animate animated fadeInUp" data-animation="fadeInUp">
                                            Webex Training
                                        </h6>
                                        <h2 className="intro_featured_word animate animated fadeInUp" data-animation="fadeInUp">
                                            Free online courses from the experts
                                        </h2>
                                        <p className="intro_after_featured_word animate animated fadeInUp" data-animation="fadeInUp">
                                            We are proud to say that since our opening in ’98
                                        </p>
                                    </div>
                                    <form role="search" method="get" className="search-form search-course animate animated fadeInUp" action="/" data-animation="fadeInUp">
                                    <div className="form-group has-placeholder">
                                    <label>
                                    <span className="screen-reader-text">Search for:</span>
                                    </label>
                                    <i className="fa fa-search"/>
                                    <input type="search" id="search-form-widget" className="search-field form-control" placeholder="Search..." value={search} onChange={getSearch} name="search"/>
                                    <button type="submit" className="search-submit btn btn-maincolor">Find courses</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="intro_layers_wrapper icon-layer">
                                <div className="intro_layers">
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32 itia poumbnail">
                                            <i className="icon-m-technology" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Technology
                                        </p>
                                    </a>
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32">
                                            <i className="icon-m-language" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Language
                                        </p>

                                    </a>
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32">
                                            <i className="icon-m-science" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Science
                                        </p>
                                    </a>
                                </div>
                                <div className="intro_layers">
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32">
                                            <i className="icon-m-business" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Business
                                        </p>
                                    </a>
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32">
                                            <i className="icon-m-marketing" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Marketing
                                        </p>
                                    </a>
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32">
                                            <i className="icon-m-health" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Health
                                        </p>
                                    </a>
                                </div>
                                <div className="intro_layers">
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32">
                                            <i className="icon-m-humanities" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Humanities
                                        </p>
                                    </a>
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32">
                                            <i className="icon-m-math" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Math
                                        </p>
                                    </a>
                                    <a href="course-categories.html" className="icon-box text-center bordered rounded animate animated moveFromLeft" data-animation="moveFromLeft">
                                        <div className="color-main icon-styled fs-32">
                                            <i className="icon-m-lifestyle" aria-hidden="true"/>
                                        </div>
                                        <p>
                                            Lifestyle
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
            </div>
        </div>


        )
}