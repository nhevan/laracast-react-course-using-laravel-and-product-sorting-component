import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

class TaskApp extends Component{
	constructor(props) {
		super(props);
		this.state = {
			items : [],
			task : ''
		}
		this.addTask = this.addTask.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	deleteTask() {
		alert("caled on parent");
	}

	onChange(e) {
		this.setState({ task: e.target.value});
	}

	addTask(e) {
		e.preventDefault();

		this.setState({
			items: this.state.items.concat([this.state.task]),
			task: ''
		});
	}

	render() {
		return (
			<div>
				<h2>My Task App</h2>
				<TaskList deleteTask={ this.deleteTask } items={this.state.items} />
				<form onSubmit={ this.addTask } >
					<input onChange={this.onChange} value={ this.state.task }/>
					<button>Add Task</button>
				</form>
			</div>
		);
	}
}

export default TaskApp;
