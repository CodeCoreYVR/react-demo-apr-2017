import React from 'react';
// const React = require('react');
import ReactDOM from 'react-dom';
import App from './App';
// const App = require('./App');
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function HelloWorld (props) {
  return <p>Hello {props.name}!</p>
}

ReactDOM.render(<HelloWorld name='Steve' />, document.getElementById('root'));
registerServiceWorker();
