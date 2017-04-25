require('./bootstrap');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Avatar from './components/Avatar';
import Counter from './components/Counter';
import TaskApp from './components/TaskApp';
import GistBox from './components/GistBox';
import FilterableProductTable from './components/FilterableProductTable'


if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}

if (document.getElementById('taskApp')) {
    ReactDOM.render(<TaskApp />, document.getElementById('taskApp'));
}

if (document.getElementById('gistBox')) {
    ReactDOM.render(<GistBox />, document.getElementById('gistBox'));
}

var products = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
	{category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
	{category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
	{category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
	{category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
	{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

if (document.getElementById('filterable-product-table')) {
    ReactDOM.render(<FilterableProductTable products={products} />, document.getElementById('filterable-product-table'));
}