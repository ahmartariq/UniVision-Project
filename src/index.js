import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';


ReactDOM.render(
  <Router>
      <Routes />
</Router>,
  document.getElementById('root')
);
reportWebVitals();
