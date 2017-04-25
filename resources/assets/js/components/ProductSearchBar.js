import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProductSearchBar extends Component{
	
	/**
	 * sets up states and binds methods to this variable
	 */
	constructor(props) {
		super(props);
		this.state = {
			'inStockOnly': false
		}
		this.onInStockToggle = this.onInStockToggle.bind(this);
		this.onFilterTextChange = this.onFilterTextChange.bind(this);
	}

	onFilterTextChange(e) {
		this.props.onFilterTextChange(e.target.value);
	}

	onInStockToggle(e) {
		this.setState({
			'inStockOnly': e.target.checked
		});
		this.props.inStockOnly(e.target.checked);
	}

	/**
	 * renders the component
	 */
	render() {
		return (
			<div>
				<input placeholder="Search ..." onChange={this.onFilterTextChange}/>
				<br/>
				<input checked={this.state.inStockOnly} onChange={this.onInStockToggle} type="checkbox" /> Only show products in stock
			</div>
		);
	}
}

export default ProductSearchBar;
