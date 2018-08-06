import React, { Component } from 'react';
import { createFragmentContainer} from 'react-relay';
import { graphql } from 'relay-runtime'


class Transaction extends Component {
  render() {
    return (

          <tr className='transaction'>
            <th>${this.props.transaction.transactionAmount}</th>
            <th>{this.props.transaction.category.type}</th> 
          </tr>

    );
  }
}

export default createFragmentContainer(Transaction, graphql`
  fragment Transaction_transaction on Transaction {
    id
    transactionAmount
    category{
        type
    }
  }
`)