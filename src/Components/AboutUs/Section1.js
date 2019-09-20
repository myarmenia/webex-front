import React from 'react';

function Section1 () {
    return (
        <section className="ls s-pt-60 s-pb-60 s-py-lg-100 c-gutter-50 about-section text-center text-lg-left container-px-lg-0">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-5">
                    <div className="about-image">
                        <img src={require('../../img/about_us/first.jpg')} alt="" />
                    </div>
                    <div className="divider-30 d-block d-lg-none"></div>
                </div>
                <div className="col-12 col-lg-7">
                    <div className="item-content">
                        <h6 className="special-heading fw-300">Empower Yourself</h6>
                        <h2>About us</h2>
                        <div className="d-none d-lg-block divider-35"></div>
                        <div className="row c-gutter-25">
                            <div className="divider-15 d-block d-lg-none"></div>
                            <div className="col-md-10 mb-20">
                                <p className="color-dark">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae</p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-700">
                                    Online Course
                                </h6>
                                <p style={{marginBottom: "0px"}}>
                                    Nonumy eirmod por invidunt labore dolore magna.
                                </p>
                                <a href="#" className="btn btn-maincolor">Get Started</a>
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-700">
                                    Office Course
                                </h6>
                                <p style={{marginBottom: "0px"}}>
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                </p>
                                <a href="#" className="btn btn-maincolor">Get Started</a>
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