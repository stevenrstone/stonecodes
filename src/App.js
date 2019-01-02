import React from 'react';
import { Router, Routes } from 'react-static';
import { hot } from 'react-hot-loader';

import './app.scss';

const App = () => (
  <Router>
    <div className="sc-container">
      <Routes />
    </div>
  </Router>
);

export default hot(module)(App);
