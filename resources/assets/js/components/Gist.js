import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Gist extends Component{
	
	/**
	 * sets up states and binds methods to this variable
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	/**
	 * renders the component
	 * @return html tags
	 */
	render() {
		return (
			<div>
				{this.props.username}'s latest gist is <a href={this.props.url}>here</a>.
			</div>
		);
	}
}

export default Gist;
