import React, { Component } from 'react';
import Graph from "./Graph"
import TransactionBox from "./TransactionBox"

class KidInfo extends Component {
  render() {
    return (
        <div className='kidInfo'>
            <Graph />
            <TransactionBox kidId={this.props.kidId} />
        </div>
    );
  }
}

export default KidInfo