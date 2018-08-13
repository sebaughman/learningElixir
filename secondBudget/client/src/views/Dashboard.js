import React, { Component } from 'react';
import Header from "../components/Header"
import SideNav from "../components/SideNav"
import KidInfo from "../components/KidInfo"
import KidPopup from "../components/KidPopup"
import TransactionPopup from "../components/TransactionPopup"


import '../App.css'


class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      loading: true,
      tempUser: 1,
      kidPopupVisibility: 'hidden',
      transactionPopupVisibility: 'hidden'
    }
  }

  editPopupVisibility(popup, value){
    this.setState({
      [popup]: value
    })
  }

  render() {
    let kidId = this.props.match.params.kid
    return (
        <div className='dashboard'>
            <Header />
            <div className='dashboardBody'>
              <div className='aside'>
                <SideNav kidId={kidId} tempUser={this.state.tempUser}/>
                <button className='addKidButton' onClick={(popup, value)=>this.editPopupVisibility('kidPopupVisibility', 'visible')}>Add Kid</button>
              </div>
              <KidInfo kidId={kidId}/>
            </div>
            <div className='popup'>
              <KidPopup tempUser={this.state.tempUser} visibility={this.state.kidPopupVisibility} editPopupVisibility={(popup, value)=>this.editPopupVisibility(popup, value)}/>
            </div>
            <div className='popup'>
              <TransactionPopup visibility={this.state.transactionPopupVisibility} editPopupVisibility={(popup, value)=>this.editPopupVisibility(popup, value)}/>
            </div>
        </div>
    );
  }
}


export default Dashboard;