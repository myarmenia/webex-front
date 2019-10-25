import React, { useState, useEffect } from 'react';
import Video from '../Main/video';

const CourseSideBar = props => {

    const [courses, setCourses] = useState();

    useEffect(() => {
        setCourses(props.courses)
    }, [courses, props]);

    const openCourse = (event) => {
        event.preventDefault();
       
        if (event.target.parentElement.nextElementSibling.style.display == "none") {
            event.target.parentElement.nextElementSibling.style.display = "block";
        } else {
            event.target.parentElement.nextElementSibling.style.display = "none";
        }
    }

    const f1 = () => {
        // return (
        //     <Video video="sd" />
        // )
        alert("A");
    }
    

    return (
        <ul>
            
            {
                courses ? courses.map((item, index) => {
                    return (
                        <>
                            <li className="cat-item" onClick={openCourse} key={index}>
                                <a href="#">{item.name}</a>                                                                                                                                                                                  "
                                <span>{item.lessons_count}</span>     
                                <p></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                            </li>
                            <div style={{display: 'none'}}>
                                {item.lessons.map((data) => {
                                    return <p onClick={f1} id={data.video}>{data.description}</p>
                                })}
                            </div>
                        </>
                    )
                }) : <li className="cat-item">
                        <a href="#">No</a>
                    </li>
            }
        </ul>
    )

}
export default CourseSideBar;