import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { coursesSelector, lessonsSelector } from '../../redux/selectors/coursesData';
import { getCoursesWithLessons } from '../../redux/actionCreators/coursesData';

import { CourseSideBar } from './CourseSideBar';
import axios from 'axios';
import Options from './Options';
import CourseType from './CourseType';
import Level from './Level';
import Video from './Main/video';
import Homeworks from './Main/homeworks';



const Courses = props => {

  console.log(props);

  const [allCourses, setAllCourses] = useState();
  const [videoData, setVideoData] = useState({
    video: '691030f893b40cad2933b1242c5fbeb7.mp4',
    duration: 389,
    title: 'Ներածություն',
    description: 'Սկզբնական թեգեռի դասավորվածությունը'
  }); // HTML first video link

  useEffect(() => {
    props.getCoursesWithLessons();
  }, []);

  // const getCourses = () => {
  //   axios.get('http://web.webex.am/api/courses')
  //     .then((res) => {
  //       if (res) return res.data;
  //     }).then((data) => {
  //       setAllCourses(data);
  //     }).catch((error) => {
  //       console.log(error, "getCourses")
  //     })
  // };
  const openVideo = (e) => {
    setVideoData(e)
  }
  const openHomeWorkVideo = (e) => {

    setVideoData({
      ...videoData,
      video: e.video,
      title: e.title,
      description: e.description,
      duration: e.duration
    })
  }

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
                <CourseSideBar courses={props.courses} openVideo={openVideo} />
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
            <Video data={videoData} HomeWorkVideo />
            <Homeworks homeworks={videoData.homeworks} openHomeWorkVideo={openHomeWorkVideo} />

            <div style={{ display: videoData.code ? 'block' : 'none' }}>
              <pre> {videoData.code} </pre>
              <hr />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  courses: () => coursesSelector(state),
  lessons: course_id => lessonsSelector(state, course_id)
});

const mapDispatchToProps = dispatch => ({
  getCoursesWithLessons: () => dispatch(getCoursesWithLessons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);