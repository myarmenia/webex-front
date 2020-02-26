import React from 'react';

function Homeworks(props) {

    const hm = props.homeworks;

    console.log(hm, "homeworkshomeworkshomeworkshomeworkshomeworkshomeworkshomeworkshomeworkshomeworkshomeworkshomeworks")
       return (
        <>
        {hm && hm.length?
            <div className="widget widget_course_level">
                <div className="container">
                    <h5 style={{marginBottom: '20px'}}>Վիդեո Առաջադրանքներ</h5>
                    <ul style={{lineHeight: '34px', margin: '0 43px'}}>
                        {
                            hm.map((item,index)=> {
                                return (
                                    <li key={index}>
                                        <a className="home-work" href="#" onClick={(e)=>props.openHomeWorkVideo(item)}>
                                            <i className="fa fa-play homework-icon" aria-hidden="true"/><
                                            span>{item.title}</span></a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>:null
        }
        </>

       )
}

export default Homeworks;