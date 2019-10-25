import React from 'react';
import ReactPlayer from 'react-player'

// function Video (props) {
//     console.log(props.name, 'narek');
//     return (
//         <div className="row c-mb-30">
//             <ReactPlayer 
//               url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' 
//               controls 
//               playing={false}
//               light={false}
//               width='100%'
//               height='100%'
//             />
//         </div>
//     )
// }

const Video = (props) => {
    
        console.log(props.c1);
    
        return (
        <div className="row c-mb-30">
            <ReactPlayer 
              url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' 
              controls 
              playing={false}
              light={false}
              width='100%'
              height='100%'
            />
        </div>
    )
}

export default Video;