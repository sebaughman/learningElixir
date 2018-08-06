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
              <SideNav kidId={kidId} tempUser={this.state.tempUser}/>
              <KidInfo kidId={kidId}/>
            </div>
            <div className='popup'>
              <KidPopup visibility={this.state.kidPopupVisibility} editPopupVisibility={(name, value)=>this.editPopupVisibility(name, value)}/>
            </div>
            <div className='popup'>
              <TransactionPopup visibility={this.state.transactionPopupVisibility} editPopupVisibility={(name, value)=>this.editPopupVisibility(name, value)}/>
            </div>
        </div>
    );
  }
}


export default Dashboard;