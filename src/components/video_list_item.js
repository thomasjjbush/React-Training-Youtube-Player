// import React library is required in every component 
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video; property passed from video={video} in VideoList map function, we are doing same thing on line 4, rather then calling props we call "video" specifically, which instantly creates constant

	const ImageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;

	return (

		<li className="list-group-item" onClick={() => onVideoSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={ImageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{videoTitle}
					</div>
				</div>
			</div>
		</li>

	);

};

export default VideoListItem;