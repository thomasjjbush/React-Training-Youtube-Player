// import React library is required in every component 
import React, { Component } from 'react';
// import ReactDOM library is required in components which aim to pass data to DOM
import ReactDOM  from 'react-dom';
// import statement below is using npm library to handle youtube api calls
import YTSearch  from 'youtube-api-search';
// import statement below is using npm library to throttle function calls
import _ from 'lodash';
// import all user components below (user files need strict paths)
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// const = declaration of constant (Basically a variable, however it's value will never be reasigned) (This const is our YouTube API key)
const API_KEY = 'AIzaSyAwibfbgEhZ9-UcBXF27jpp6TbOYsTyXvs';

// ES6 function declaration: "function()" === "() =>" -- below is a functional component
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	); 
// }

class App extends Component {

	constructor(props) {

		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		// fire videoSearch function with inital value
		this.videoSearch('messi');

	};

	// every instance of data fetching should occur in parent component (i.e App)
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => { // this complies to "example({key: x, term: y}, function(data){this.setState({videos: data})});"
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	};

	render() {

		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar
					onSearch={videoSearch} // pass down prop on VideoSearch, gives searchbar power to update detail + list
				/>
				<VideoDetail
					video={this.state.selectedVideo}
				/>
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={ this.state.videos } //this is how we pass the video data to the video list (passing props)
				/> 
			</div>
		);

	};

};

// Wrapping class of "App" in JSX tag produces instance of said class --- Second argument is target element within the DOM (In this case, "container")
ReactDOM.render(<App />, document.querySelector('.container')); 