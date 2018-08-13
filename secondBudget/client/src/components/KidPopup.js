import React, { Component } from 'react';


class KidPopup extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      budget_amount: '',
      amount_remaining: '',
      user_id: ''
    }
  }
  
  componentDidMount(){
    this.setState({
      user_id: this.props.tempUser
    })
  }


  render() {

    return (
        <div className='popup-background' style={{visibility: this.props.visibility}}>
          <div className='popup-content'>
            <div popup-header>
              KidPopup
              <button onClick={(popup, value)=>this.props.editPopupVisibility('kidPopupVisibility', 'hidden')}>X</button>
            </div>
            <div className='kidPopup'>
              <input placeholder='name' onChange={}/>
              <input placeholder='budget_amount'/>
              <button > Add Kid </button>
            </div>
          </div>
        </div>
    );
  }
}

export default KidPopup;