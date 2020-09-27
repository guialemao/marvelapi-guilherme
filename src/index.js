/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const Marvel = () => (
  <Router>
    <App />
  </Router>
);

const Root = document.getElementById('root');

ReactDOM.render(<Marvel name="Yomi" />, Root);
