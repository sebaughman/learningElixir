import React, { Component } from 'react';
import Transaction from './Transaction'
import { createFragmentContainer, graphql } from 'react-relay';


class TransactionList extends Component {
  render() {
      const transactions = this.props.transactions.map((transaction, i)=>{
          return <Transaction key={i} transaction={transaction}/>
      })
    return (

        <div className='transactionList'>
            {transactions}
        </div>
    );
  }
}

export default createFragmentContainer(TransactionList, graphql`
  fragment TransactionList_transactions on Transaction @relay(plural: true){
          ...Transaction_transaction
  }
`)