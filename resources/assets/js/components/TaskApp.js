import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

class TaskApp extends Component{
	
	/**
	 * sets up states and binds methods to this variable
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
		this.state = {
			items : [],
			task : ''
		}
		this.addTask = this.addTask.bind(this);
		this.onChange = this.onChange.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	/**
	 * removes a task from the items array
	 * @return void
	 */
	deleteTask(e) {
		var task_index = e.target.id;
		var items = this.state.items;

		items.splice(task_index, 1);
		this.setState({items});
	}

	/**
	 * keeps the value of task input in sync with the state variable named task
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	onChange(e) {
		this.setState({ task: e.target.value});
	}

	/**
	 * adds a new task
	 * @param {[type]} e [description]
	 */
	addTask(e) {
		e.preventDefault();

		this.setState({
			items: this.state.items.concat([this.state.task]),
			task: ''
		});
	}

	/**
	 * renders the component
	 * @return {[type]} [description]
	 */
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
