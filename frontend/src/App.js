import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
      </Fragment>
    </Router>
  );
};

export default App;
