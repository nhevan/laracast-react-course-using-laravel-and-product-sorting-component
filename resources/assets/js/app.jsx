require('./bootstrap');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Avatar from './components/Avatar';
import Counter from './components/Counter';
import TaskApp from './components/TaskApp';
import GistBox from './components/GistBox';


if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}

if (document.getElementById('taskApp')) {
    ReactDOM.render(<TaskApp />, document.getElementById('taskApp'));
}

if (document.getElementById('gistBox')) {
    ReactDOM.render(<GistBox />, document.getElementById('gistBox'));
}