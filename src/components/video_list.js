// import React library is required in every component 
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { //props argument is recieving video array from index.js. however in class based component props can be called: this.props

	const VideoItems = props.videos.map((video) => { // map function is same as for loop, loops through video state array (present in index.js/App)
		return (	
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} 
			/>
		); 
	});

	return (

		<ul className="col-md-4 list-group">
			{VideoItems}
		</ul>

	);

};

export default VideoList;