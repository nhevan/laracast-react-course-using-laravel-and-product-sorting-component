require('./bootstrap');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Avatar from './components/Avatar';
import Counter from './components/Counter';
import TaskApp from './components/TaskApp';


if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}

if (document.getElementById('taskApp')) {
    ReactDOM.render(<TaskApp items={['three', 'four']}/>, document.getElementById('taskApp'));
}