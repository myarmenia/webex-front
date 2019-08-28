import React, {Component} from 'react';
import styled from 'styled-components';
// import './App.css';
// import './css/animations.css';
 //import '../../styles/bootstrap.min.css';
// import './css/main.css';
let lessons=[
{
 text:"React",
 name: "true",
 info:"",
 diploma: "Diploma in Basic",
 language:"English",
//  images:""
},
{
 text:"jScript",
 name: "true",
 info:"",
 diploma: "Diploma in Basic",
 language:"English"
},
{
 text:"Nodjs",
 name: "true",
 info:"",
 diploma: "Diploma in Basic",
 language:"English"
},
{
 text:"HTML",
 name: "true",
 info:"",
 diploma: "Diploma in Basic",
 language:"English"
}
]
class Courses extends Component {
  render() {
    const zangvats=lessons.map(function(arjeq,index){
      return (
      
   <div key={index} className="col-12 col-md-6 col-lg-4 popular">
      
    
                  <div className="course-flip h-100 ">
                    <div className="course-front rounded bordered">
                      <div className=" vertical-item content-padding">
                        <div className="item-media rounded-top">
                        <img src={require(`./images/0${++index}.jpg`)} alt="" />
                        </div>
                        <div className="item-content">
                          <h6 className="course-title">
                            <a href="single-course.html"> {arjeq.text} Diploma in Basic English Grammar</a>
                          </h6>

                          <div className="star-rating course-rating">
                            <span>Rated <strong className="rating">4.00</strong> out of 5</span>
                          </div>

                          <div className="tagcloud">
                            <a href="#" className="tag-cloud-link">
                              Technology
                            </a>
                            <a href="#" className="tag-cloud-link">
                              Humanities
                            </a>
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
                          <span >Rated <strong className="rating">4.00</strong> out of 5</span>
                        </div>
                        <div className="divider-48"></div>
                        <a href="#" className="btn btn-maincolor">Start now</a>
                        <div className="tagcloud">
                          <a href="#" className="tag-cloud-link">
                            Technology
                          </a>
                          <a href="#" className="tag-cloud-link">
                            Humanities
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                
  
   
  </div>

      )
    });

   return (
    <section className="ls s-pt-55 s-pb-30 s-pt-lg-95 s-pb-lg-70" id="courses">
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
       
        <div className="row isotope-wrapper c-mb-30" data-filters=".course-filters">
         {zangvats}
      </div>
      </div>
      </div> 
      </div>
      </section>


      
    );
  }
    }
export default Courses;