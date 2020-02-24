import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../courses.css';


const Course = props => {

    const [courses, setCourses] = useState();
    const [active, setActive] = useState('');
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        setCourses(props.courses)
    }, [courses, props, active, lessons]);

    const openCourse = (event, index, id) => {
        event.preventDefault();
        const li = event.target.parentElement;
        const elem = document.getElementsByClassName('cat-item');
        axios.get(`http://web.webex.am/api/courses/1/${id}`)
            .then((res) => {
                if (res) return res.data;
            }).then((data) => {
                if (li.nextElementSibling.style.display === "none") {
                    li.nextElementSibling.style.display = "block";
                    for (let i = 0; i < elem.length; i++) {
                        if (i !== index) {
                            elem[i].nextElementSibling.style.display = "none";
                        }
                    }
                }
                setLessons(data)
            }).catch((error) => {
                console.log(error, "getCourses")
            })
        setActive('')
    }

    const setVideoLink = (e, index) => {
        setActive(index);
        props.openVideo(e);
    }

    return (
        <ul>
            {
                props.courses ? props.courses.map((item, index) => {
                    return (
                        <div>
                            <li className="cat-item" onClick={(e) => openCourse(e, index, item.id)} key={index} >
                                <a href="#">{item.name}</a>                                                                                                                                                                                 "
                               <span>{item.lessons_count}</span>
                            </li>
                            <div style={{ display: 'none' }}>
                                {lessons.map((data, index) => {
                                    if (data.users.length) {
                                        return <p key={index} onClick={(e) => { setVideoLink(data, index) }} className={`sub-lessons opened ${active === index ? 'active' : ''}`} >{index + 1}. {data.title}</p>
                                    }
                                    else {
                                        return <p key={index} className="sub-lessons closed" >{index + 1}. {data.title} <i className="fa  fa-lock" /></p>
                                    }
                                })}
                            </div>
                        </div>
                    )
                }) : <li className="cat-item">
                        <div >Loading <i className="fa fa-spinner fa-pulse" aria-hidden="true" /></div>
                    </li>
            }
        </ul>
    )

}
export const CourseSideBar = React.memo(Course);

