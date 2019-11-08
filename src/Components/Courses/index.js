import React, { useState, useEffect } from 'react';
import {CourseSideBar} from './CourseSideBar';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';
import Options from './Options';
import CourseType from './CourseType';
import Level from './Level';
import Video from './Main/video';
import Homeworks from './Main/homeworks';

const Courses = () => {

  const [allCourses, setAllCourses] = useState();
  const [videoData, setVideoData] = useState({
      video:'691030f893b40cad2933b1242c5fbeb7.mp4',
      duration: 389,
      title: 'Ներածություն',
      description:'Սկզբնական թեգեռի դասավորվածությունը'}); // HTML first video link

  useEffect(() => {
   getCourses();
  }, [videoData]);

  const getCourses = () => {
      axios.get('http://web.webex.am/api/courses')
      .then((res) => {
        if (res) return res.data;
      }).then((data) => {
        setAllCourses(data);
      }).catch((error) => {
        console.log(error, "getCourses")
      })
  };
  const openVideo =(e)=>{
      setVideoData(e)
    }

    console.log(allCourses,"courses")
  return (
    <section className="ls s-py-60 s-pt-lg-100 s-pb-lg-70">
      <div className="container">
        <div className="row c-gutter-30">
          <aside className="col-lg-5 col-xl-4 course-widgets order-2 order-lg-1">

            <div className="bordered rounded">
              <div className="widget widget_course_tag">
                <Options />
              </div>
            </div>

            <div className="bordered rounded">
              <div className="widget widget_categories">
                <h3 className="widget-title">Բոլոր Վիդեոդասերը</h3>
                <CourseSideBar courses={allCourses}  openVideo={openVideo}/>
              </div>
            </div>

            <div className="bordered rounded">
              <div className="widget widget_course_type">
                <h3 className="widget-title">
                  Ստուգիր գիտելիքներդ</h3>
                <CourseType />
              </div>
            </div>

            <div className="bordered rounded">
              <div className="widget widget_course_level">
                <h3 className="widget-title">Դասերի փաթեթներ</h3>
                <Level />
              </div>
            </div>

          </aside>

          <main className="col-lg-7 col-xl-8 order-1 order-lg-2">
            <Video  data={videoData} />
            {/*<Homeworks data={videoData} />*/}
          </main>

        </div>
      </div>
    </section>
  );
}

export default Courses;