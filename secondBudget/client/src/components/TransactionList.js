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
            <h3>Transactions</h3>
            <table>
                <tr>
                    <th>Amount</th>
                    <th>Category</th> 
                </tr>
                {transactions}
            </table>
            
        </div>
    );
  }
}

export default createFragmentContainer(TransactionList, graphql`
  fragment TransactionList_transactions on Transaction @relay(plural: true){
          ...Transaction_transaction
  }
`)