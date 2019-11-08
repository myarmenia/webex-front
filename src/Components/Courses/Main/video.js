import React from 'react';
import ReactPlayer from 'react-player'

const Video = (props) => {
    
        return (
        <div className="row c-mb-30">
            <h5 className="video-title">{props.data.title} </h5>

            <ReactPlayer 
              url={`http://webex.am/${props.data.video}`}
              controls 
              playing={false}
              light={false}
              width='100%'
              height='100%'
            />
            <div className="video-descr">
                <div className="flex">
                <h6> {props.data.description}</h6>
                <span> <i className="fs-16 fa fa-clock-o"/> {props.data.duration} min.</span>
                </div>
                <div style={{display:props.data.code?'block':'none'}}>
                    <pre> {props.data.code} </pre>
                </div>
            </div>

        </div>
    )
}

export default Video;