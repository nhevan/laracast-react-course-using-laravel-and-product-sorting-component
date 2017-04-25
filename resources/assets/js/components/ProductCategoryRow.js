import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProductCategoryRow extends Component{
	
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
		return (
			<tr>
				<td colSpan="2"><hr/>{this.props.category}<hr/></td>
			</tr>
		);
	}
}

export default ProductCategoryRow;
