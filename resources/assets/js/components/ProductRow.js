import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProductRow extends Component{
	
	/**
	 * sets up states and binds methods to this variable
	 */
	constructor(props) {
		super(props);
		this.state = {

		}
	}


	/**
	 * renders the component
	 */
	render() {
		var style = {};
		if(!this.props.inStock){
			style = {
				'color': 'red'
			}
		}
		
		return (
			<tr style={style}>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
			</tr>
		);
	}
}

export default ProductRow;
