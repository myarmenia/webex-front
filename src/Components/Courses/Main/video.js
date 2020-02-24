import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import lessDuration from '../../duration';


const Video = (props) => {

    const [data, setData] = useState({});

    // const openVideo = (video) => {
    //     setData({
    //         ...data,
    //         video: video
    //     })
    // }

    useEffect(() => {
        setData(props.data)
    }, [props])

    return (
        <div className="row c-mb-30">
            <h5 className="video-title">{data.title} </h5>
            <ReactPlayer
                url={`http://webex.am/${data.video}`}
                controls
                playing={false}
                light={false}
                width='100%'
                height='100%'
            />
            <div className="video-descr" >
                <div className="flex">
                    <h6> {data.description}</h6>
                    <span className="dur"> <i className="fs-16 fa fa-clock-o" /> {lessDuration(data.duration)} sec.</span>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Video;