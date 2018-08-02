import React, { Component } from 'react';
import Graph from "./Graph"
import TransactionList from "./TransactionList"

class KidInfo extends Component {
  render() {
    return (
        <div className='kidInfo'>
            <Graph />
            <TransactionList />
        </div>
    );
  }
}

export default KidInfo