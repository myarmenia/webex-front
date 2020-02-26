import React from 'react';

function otherCourses () {
return (
<div className="col-lg-4">
    <div className="mb-50">
    <div className="row courses-item c-mb-30" style={{position: "relative", height: "960.312px"}}>
        
        <div className="col-12 col-md-6 col-lg-12 popular" style={{position: "absolute", left: "0%", top: "0px"}}>
            <div className="course-flip h-100">
                <div className="course-front bordered rounded">
                    <div className=" vertical-item content-padding">
                        <div className="item-media rounded-top">
                            <img src={require('../images/01.jpg')} alt="" />
                        </div>
                        <div className="item-content">
                            <h6 className="course-title">
                                <a href="single-course.html">Diploma in Basic English Grammar</a>
                            </h6>
                            <div className="star-rating course-rating">
                                <span style={{width: "91.5%"}}>Rated <strong className="rating">4.00</strong> out of 5</span>
                            </div>
                            <div className="tagcloud">
                                <a href="#" className="tag-cloud-link">Technology</a>
                                <a href="#" className="tag-cloud-link">Humanities</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-back rounded vertical-item content-padding ds">
                    <div className="item-content">
                        <h6 className="course-title">
                            <a href="single-course.html">Diploma in Basic English Grammar</a>
                        </h6>
                        <p>
                            Learn about corporate governance of organizations: internal and external factors
                        </p>
                        <div className="star-rating course-rating">
                            <span style={{width: "91.5%"}}>Rated <strong className="rating">4.00</strong> out of 5</span>
                        </div>
                        <div className="divider-48"></div>
                        <a href="#" className="btn btn-maincolor">Start now</a>
                        <div className="tagcloud">
                            <a href="#" className="tag-cloud-link">Technology</a>
                            <a href="#" className="tag-cloud-link">Humanities</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12 col-md-6 col-lg-12 popular" style={{position: "absolute", left: "0%", top: "480px"}}>
        <div className="course-flip h-100">
        <div className="course-front bordered rounded">
        <div className="vertical-item content-padding">
        <div className="item-media rounded-top">
        <img src={require('../images/01.jpg')} alt="" />
        </div>
        <div className="item-content">
        <h6 className="course-title">
        <a href="single-course.html">Diploma in Legal Studies - Revised 2017</a>
        </h6>
        <div className="star-rating course-rating">
        <span style={{width: "91.5%"}}>Rated <strong className="rating">4.00</strong> out of 5</span>
        </div>
        <div className="tagcloud">
        <a href="#" className="tag-cloud-link">
        Marketing
        </a>
        <a href="#" className="tag-cloud-link">
        Lifestyle
        </a>
        </div>
        </div>
        </div>
        </div>
        <div className="course-back rounded vertical-item content-padding ds">
        <div className="item-content">
        <h6 className="course-title">
        <a href="single-course.html">Diploma in Legal Studies - Revised 2017</a>
        </h6>
        <p>
        Learn about corporate governance of organizations: internal and external factors
        </p>
        <div className="star-rating course-rating">
        <span style={{width: "91.5%"}}>Rated <strong className="rating">4.00</strong> out of 5</span>
        </div>
        <div className="divider-48"></div>
        <a href="#" className="btn btn-maincolor">Start now</a>
        <div className="divider-95 d-block d-lg-none d-xl-block"></div>
        <div className="tagcloud">
        <a href="#" className="tag-cloud-link">
        Marketing
        </a>
        <a href="#" className="tag-cloud-link">
        Lifestyle
        </a>
        </div>
        </div>
        </div>
        </div>
        </div>

        
        </div>
    </div>
</div>
)
}

export default otherCourses;