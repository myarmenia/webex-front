import React, { useState, useEffect } from 'react';
import CourseSideBar from './CourseSideBar';
import image from './images/01.jpg';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';

const coursesArr = [
  { title: 'HTML', image: './images/01.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'CSS', image: './images/02.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'JavaScript', image: './images/03.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'Jquery', image: './images/04.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'React', image: './images/05.jpg', description: 'Lorem ipsum dolor sit amet' },
  { title: 'PHP', image: './images/06.jpg', description: 'Lorem ipsum dolor sit amet' },
];

const c={"courses":[{"id":1,"name":"HTML \/ HTML5","order":0,"count":2},{"id":2,"name":"CSS \/ CSS3","order":1,"count":1},{"id":3,"name":"BOOTSTRAP","order":2,"count":1},{"id":4,"name":"JavaScript","order":3,"count":1},{"id":5,"name":"EcmaScript (ES6)","order":4,"count":1},{"id":6,"name":"jQuery","order":5,"count":1},{"id":7,"name":"PHP \/ PHP 7","order":6,"count":1},{"id":8,"name":"MySQL","order":7,"count":1},{"id":9,"name":"React","order":8,"count":1},{"id":10,"name":"Redux","order":9,"count":1},{"id":11,"name":"Server","order":10,"count":1},{"id":12,"name":"Wordpress","order":11,"count":1},{"id":13,"name":"Laravel","order":12,"count":1},{"id":14,"name":"Node.js","order":13,"count":1},{"id":15,"name":"Angular","order":14,"count":1},{"id":16,"name":".htaccess","order":15,"count":1},{"id":17,"name":"OOP \/ MVC","order":16,"count":1}]}

const Courses = props => {

    const [allCourses,setAllCourses] = useState();
    useEffect(()=>{
        getCourses();
    },[]);

    const [openVideo, setOpenVideo] = useState(false);

    const getCourses=()=>{
        axios.get('http://web.webex.am/api/courses')
            .then((res)=>{
          if(res)return res.data;
               })
            .then((data)=>{
          console.log(data.courses,"allCourses")
                setAllCourses(data.courses)
            })
            .catch((error)=>console.log(error, "getCourses"))

    }

  //   const courses = coursesArr.map((c, i) => (
  //   <div className="col-lg-6">
  //      <Widget
  //       title="Contact Us"
  //       subtitle="And my cool subtitle"
  //     />
  //     <div key={i}>
  //       <div className="h-100 bordered rounded">
  //         <div className="course-front">
  //           <div className="vertical-item content-padding">
  //             <div className="item-media rounded-top" onClick={() => setOpenVideo(true)}>
  //             {
  //                openVideo ? 
  //                   <video src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4" 
  //                   width="100%" height="auto" autoPlay controls>
  //                   </video>: 
  //                   <a style={{cursor: "pointer"}} className="embed-placeholder" data-gal="" target="_blank">
  //                    <img src={image} alt={c.title} />
  //                  </a>
  //             }
  //             </div>
  //             <div className="item-content">
  //               <h6 className="course-title">
  //                 <a href="#">{c.title}</a>
  //               </h6>
  //               <p>{c.description}</p>
              
  //               <div className="tagcloud">
  //                 <a href="#" className="tag-cloud-link">Technology</a>
  //                 <a href="#" className="tag-cloud-link">Humanities</a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // ));

  return (
    <section className="ls s-py-60 s-pt-lg-100 s-pb-lg-70">
      <div className="container">
        <div className="row c-gutter-30">
          <aside className="col-lg-5 col-xl-4 course-widgets order-2 order-lg-1">
            
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
                <CourseSideBar courses={allCourses}/>
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
              {/* {courses} */}
              <Widget
                title="Contact Us"
                subtitle="And my cool subtitle"
            />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Courses;