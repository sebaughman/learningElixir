import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from "./views/Dashboard"


class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        {/* <Route exact path='/' component={ Login } /> */}
        <Route path='/dashboard/:kid' component = { Dashboard } />
      </Switch>
    </Router>
    );
  }
}

export default App;
