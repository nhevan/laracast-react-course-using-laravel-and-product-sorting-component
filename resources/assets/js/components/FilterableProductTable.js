import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductSearchBar from './ProductSearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component{
	
	/**
	 * sets up states and binds methods to this variable
	 */
	constructor(props) {
		super(props);
		this.state = {
			'showInStockOnly': false,
			'filter_text': ''
		}
		this.filterStocked = this.filterStocked.bind(this);
		this.products = this.products.bind(this);
		this.updateFilterText = this.updateFilterText.bind(this);
	}

	/**
	 * set filter_text state value
	 * @param  {[type]} filter_text [description]
	 * @return {[type]}             [description]
	 */
	updateFilterText(filter_text) {
		this.setState({filter_text});
	}

	/**
	 * set showInStockOnly state value
	 * @param  {[type]} inStock [description]
	 * @return {[type]}         [description]
	 */
	filterStocked(inStock) {
		this.setState({
			'showInStockOnly': inStock
		});
	}

	/**
	 * filters the product array
	 * @return {[type]} [description]
	 */
	products() {
		var products = this.props.products;
		if(this.state.showInStockOnly){
			products = products.filter((product) => product.stocked == true);
		}

		if(this.state.filter_text !== ''){
			products = products.filter(function(product){
				return product.name.toLowerCase().indexOf(this.state.filter_text.toLowerCase()) != -1;
			}.bind(this));
		}

		return products;
	}

	/**
	 * renders the component
	 */
	render() {
		var products = this.products();

		return (
			<div>
				<ProductSearchBar inStockOnly={this.filterStocked} onFilterTextChange={this.updateFilterText} />
				<hr/>
				<ProductTable products={products} />
			</div>
		);
	}
}

export default FilterableProductTable;


