import React, { Component } from 'react';


class TransactionPopup extends Component {
  render() {
    return (
      <div className='popup-background' style={{visibility: this.props.visibility}}>
        <div className='popup-content'>
          TransactionPopup
        </div>
    </div>
    );
  }
}

export default TransactionPopup;