import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.subtract = this.subtract.bind(this);
		this.add = this.add.bind(this);
	}

	subtract() {
		var count = this.state.count - 1;
		if(count)
			this.setState({count});
	}

	add() {
		var count = this.state.count + 1;
		this.setState({count});
	}

	render() {
		return (
			<div>
				<h1>Counter: {this.state.count} </h1>

				<button onClick={this.subtract}>Subtract</button>
				<button onClick={this.add}>Add</button>
			</div>
		);
	}
}

export default Counter;
