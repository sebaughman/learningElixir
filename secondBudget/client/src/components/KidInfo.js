import React, { Component } from 'react';
import Graph from "./Graph"
import TransactionList from "./TransactionList"

import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'


class KidInfo extends Component {
  render() {
    let tempUser = this.props.tempUser
    console.log(this.props.tempUser)
    return (
        <div className='kidInfo'>
            <h2></h2>
            <Graph />
            <TransactionList />
        </div>
    );
  }
}

const kidsQuery = gql`
          query {
            allKids($userId:1){
              name
            }
          }
          `

export default graphql(kidsQuery, { name: 'kids' })(KidInfo);