import React from 'react';
import Button from '@material-ui/core/Button';

function Section1 () {
    return (
        <section className="ls s-pt-60 s-pb-60 s-py-lg-100 c-gutter-50 about-section text-center text-lg-left container-px-lg-0">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-5">
                    <div className="about-image">
                        <img src={require('../../img/about_us/nikol.jpg')} alt="" />
                    </div>
                    <div className="divider-30 d-block d-lg-none"></div>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="item-content">
                        <h2 style={{marginTop: "46px"}}>About us</h2>
                        <div className="d-none d-lg-block divider-35"></div>
                        <div className="row c-gutter-25">
                            <div className="divider-15 d-block d-lg-none"></div>
                            <div className="col-md-10 mb-20">
                                <p className="color-dark">
                                    Webex Technologies LLC started operating in Armenia in early 2007 and opened an office in Yerevan. Our modern and professional approach has already attracted many clients.
                                    We teach: HTML5, CSS, Bootstrap, JavaScript / jQuery, ECMA Script, PHP / MySQL, PHP (OOP / MVC), AJAX, React.JS / REDUX, Laravel, NoteJS. At the end of the course you will receive a certificate certifying that you are a professional.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-700">
                                    Online Course
                                </h6>
                                <p style={{marginBottom: "0px"}}>
                                    Online courses are available everywhere. 
                                    The advantage of them is that 
                                    you choose when to study.
                                </p>
                                <a href="/signup" className="btn btn-maincolor mt-4">Get Started</a>
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-700">
                                    Stationary Courses 
                                </h6>
                                <p style={{marginBottom: "0px"}}>
                                    Stationary courses are individual classes with professional mentors that will guide you during the study. 
                                </p>
                                <a href="/signup" className="btn btn-maincolor mt-4">Get Started</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Section1;