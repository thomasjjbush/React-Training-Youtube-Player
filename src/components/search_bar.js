// import React library is required in every component 
import React, { Component } from 'react';

// all components built using class (as apposed to const) are more powerful as they have access to React.Component functionality
class SearchBar extends Component {

	// first and only function called automatically when instance of component is rendered
	constructor(props) {
		// calling parent method via super
		super(props);
		// initialise state by creating object
		this.state = { term: 'Messi' };
	};

	// every class based react component reuqieres a render function
	render() {
		// watch for change and call event handler to update state
		return (

			<div>
				<input 
					value={this.state.term} // set input value to match state
					onChange={event => this.onInputChange(event.target.value)} // run onInputChange (function below)
				/>
			</div>

		);
	};

	onInputChange(term) {
		this.setState({term}); // update state with typed value upon rerender
		this.props.onSearch(term); // update term used in parent component to render video + video list
	}

};

// export component data if it is required in another component (e.g App)
export default SearchBar;