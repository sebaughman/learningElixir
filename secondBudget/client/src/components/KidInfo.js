import React, { Component } from 'react';
import Graph from "./Graph"
import TransactionBox from "./TransactionBox"
import KidHeader from './KidHeader'

class KidInfo extends Component {
  render() {
    return (
        <div className='kidInfo'>
            <KidHeader kidId={this.props.kidId} />
            <Graph />
            <TransactionBox kidId={this.props.kidId} />
        </div>
    );
  }
}

export default KidInfo