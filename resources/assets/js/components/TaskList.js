import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TaskList extends Component{
	constructor(props) {
		super(props);
		this.state = {
		
		}
	}

	render() {
		var displayTask = (task, index) => <li>{task} <button id={index} onClick={ this.props.deleteTask }>Delete</button></li>;
		return (
			<ul>
				{ this.props.items.map( displayTask) }
			</ul>
		);
	}
}

export default TaskList;
