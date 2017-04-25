import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends Component{
	
	/**
	 * sets up states and binds methods to this variable
	 */
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	/**
	 * prepare the rows to display in table
	 * @return {[type]} [description]
	 */
	prepareProducts() {
		var last_category = null;
		var rows = [];
		this.props.products.map((product) => {
			if(product.category != last_category){
				rows.push(<ProductCategoryRow category={product.category} />);
				last_category = product.category;
			}
			rows.push(<ProductRow name={product.name} price={product.price} inStock={product.stocked} />);
		});
		
		return rows;
	}

	/**
	 * renders the component
	 */
	render() {
		var products = this.prepareProducts();
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{products}
				</tbody>
			</table>
		);
	}
}

export default ProductTable;
