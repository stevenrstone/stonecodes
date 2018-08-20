import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';

import './app.scss';

const App = () => (
  <Router>
    <div className="sc-container">
      <Routes />
    </div>
  </Router>
);

export default hot(module)(App);
