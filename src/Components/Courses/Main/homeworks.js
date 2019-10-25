import React from 'react';

function Homeworks() {

    // const openHomeworkFunc = e => {
    //     e.preventDefault();
    //     alert("A");
    // }

    return (
        <div className="widget widget_course_level">
            {/* <ul>
                <li className="cat-item narekCatItem" style={{ fontSize: "25px" }} onClick={openHomeworkFunc}>
                    <a href="blog-right.html">Do Homeworks</a>
                </li>
            </ul> */}


            <div className="container">
                <h4 style={{marginBottom: '20px'}}>Do Homeworks</h4>

                <ul style={{lineHeight: '34px'}}>
                    <li>Homework 1</li>
                    <li>Homework 2</li>
                    <li>Homework 3</li>
                </ul>
            </div>
        </div>
    )
}

export default Homeworks;