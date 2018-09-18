import React, { Fragment, Component } from 'react';
import './App.css';
import Home from './components/Home'
import { Route } from 'react-router-dom'
import Item from './components/Item'

class App extends Component {
  state = { menus: [] }

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/menus/1" component={Item} />
      </Fragment>
    );
  }
}

export default App;
