import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Route exact path="/" component={Home} />
    );
  }
}

export default App;
