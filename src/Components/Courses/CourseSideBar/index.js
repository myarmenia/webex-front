import React, { useState, useEffect } from 'react';

const CourseSideBar = props => {
    const [courses,setCourses] = useState();
    useEffect(()=>{
        setCourses(props.courses)
    },[courses,props]);

   return(
       <ul>
           {courses?courses.map((item, index) => {
               return (
                   <li className="cat-item" key={index}>
                       <a href="blog-right.html">{item.name}</a>
                       <span>{item.count}</span>
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