import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {

  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const usersQuery = gql`
          query {
            allUsers{
              name
            }
          }
          `

export default graphql(usersQuery, { name: 'usersQry' })(App);
