import React from 'react';
import Text from './Text';

function Main () {

	const startVideo = () => {
		document.getElementById("playButton").style.display = "none";
		document.getElementById("video").style.display = "block";
		document.getElementById("video").play();
	}

    return (
        <div className="col-lg-8">
			<div className="mb-40">

				<div id="playButton">
					<span class="embed-placeholder"
					style={{position: 'relative', left: "50%", zIndex: "3", cursor: "pointer"}}
					onClick={startVideo}></span>
					<img className="w-100 rounded" src={require(`../../images/`+Text.img)} />
				</div>

				<video 
				src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
				width="100%"
				style={{display: "none"}} 
				id="video"
				controls>
				</video>

			</div>

			<h2>{Text.title}</h2>

			<p>{Text.description}</p>
		</div>
    )
}

export default Main;