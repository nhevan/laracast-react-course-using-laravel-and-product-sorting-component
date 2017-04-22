require('./bootstrap');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Avatar from './components/Avatar';
import Counter from './components/Counter';


if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}