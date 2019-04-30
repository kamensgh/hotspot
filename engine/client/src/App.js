import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from './components/container';
import EventsContainer from './components/container/events';
import PlacesContainer from './components/container/places';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={props =>  <HomeContainer {...props} />} />
        <Route exact path="/events" render={props =>  <EventsContainer {...props} />} />
        <Route exact path="/places" render={props =>  <PlacesContainer {...props} />} />
      </Router>
    );
  }
}

export default App;
