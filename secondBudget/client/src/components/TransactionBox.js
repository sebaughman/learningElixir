import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import TransactionList from './TransactionList'

const TransactionBoxQuery = graphql`
  query TransactionBoxQuery($kidId: ID!) {
      allTransactions(kidId: $kidId){
          ...TransactionList_transactions
        }
  }
`
class TransactionBox extends Component {
render() {
    return (
      <QueryRenderer
        environment={environment}
        query={TransactionBoxQuery}
        variables={{kidId: this.props.kidId}}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <TransactionList transactions={props.allTransactions} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default TransactionBox