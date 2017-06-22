import React from 'react';
// const React = require('react');
import ReactDOM from 'react-dom';
import App from './components/App';
// const App = require('./App');
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
