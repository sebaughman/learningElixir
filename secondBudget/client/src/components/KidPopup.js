import React, { Component } from 'react';


class KidPopup extends Component {
  render() {
    return (
        <div className='popup-background' style={{visibility: this.props.visibility}}>
          <div className='popup-content'>
            KidPopup
          </div>
        </div>
    );
  }
}

export default KidPopup;