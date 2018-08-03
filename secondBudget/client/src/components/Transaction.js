import React, { Component } from 'react';
import { createFragmentContainer} from 'react-relay';
import { graphql } from 'relay-runtime'


class Transaction extends Component {
  render() {
    return (
        <div className='transaction'>
            {this.props.transaction.transactionAmount} ({this.props.transaction.category.type})
        </div>
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