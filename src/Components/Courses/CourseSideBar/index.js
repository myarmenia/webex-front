import React, { useState, useEffect } from 'react';

const CourseSideBar = props => {
    const [courses,setCourses] = useState();
    useEffect(()=>{
        console.log(props.courses,"props.coursesprops.coursesprops.coursesv")
        setCourses(props.courses)
    },[courses,props]);

   return(
       <ul>
           {courses?courses.map((item, index) => {
               return (
                   <li className="cat-item" key={index}>
                       <a href="#">{item.name}</a>
                       <span>{item.lessons_count}</span>
                   </li>
               )
           }): <li className="cat-item" >
               <a href="#">no</a>
               <span>0</span>
           </li>
           }
       </ul>
   )

}
export default CourseSideBar;