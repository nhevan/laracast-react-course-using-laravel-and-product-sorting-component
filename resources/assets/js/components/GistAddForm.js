import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class GistAddForm extends Component{
	
	/**
	 * sets up states and binds methods to this variable
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
		this.onChange = this.onChange.bind(this);
		this.addGist = this.addGist.bind(this);
	}

	/**
	 * syncs the input box for searching username
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	onChange(e) {
		this.setState({
			username: e.target.value
		});
	}

	/**
	 * handles a new request for adding a gist
	 */
	addGist(e) {
		e.preventDefault();
		this.props.onAdd(this.state.username);
	}

	/**
	 * renders the component
	 * @return html tags
	 */
	render() {
		return (
			<form onSubmit={this.addGist}>
				<input onChange={this.onChange}/>
				<button>Fetch Latest Gist</button>
			</form>
		);
	}
}

export default GistAddForm;
