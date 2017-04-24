import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gist from './Gist';
import GistAddForm from './GistAddForm';

class GistBox extends Component{
	
	/**
	 * sets up states and binds methods to this variable
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
		this.state = {
			gists: []
		}
		this.addGist = this.addGist.bind(this);
	}

	/**
	 * adds a new gist
	 * @param {[type]} username [description]
	 */
	addGist(username) {
		var end_point = `https://api.github.com/users/${username}/gists`;

		$.get(end_point, function(result){
			var username = result[0].owner.login;
			var url = result[0].html_url;

			var gists = this.state.gists.concat({username, url});
			this.setState({gists});
		}.bind(this));
	}

	/**
	 * displays a single gist
	 * @return {[type]} [description]
	 */
	displayGist(gist, index) {
		return <Gist key={index} username={gist.username} url={gist.url} />
	}

	/**
	 * renders the component
	 * @return html tags
	 */
	render() {
		return (
			<div>
				<h1>Gist Box</h1>

				<GistAddForm onAdd={this.addGist}></GistAddForm>
				{ this.state.gists.map((gist, index) => this.displayGist(gist, index)) }
			</div>
		);
	}
}

export default GistBox;
