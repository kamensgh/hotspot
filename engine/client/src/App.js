import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from './components/container';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" render={props =>  <HomeContainer {...props} />} />
      </Router>
    );
  }
}

export default App;
