import React, { Component } from 'react';
import Header from "../components/Header"
import SideNav from "../components/SideNav"
import KidInfo from "../components/KidInfo"
import KidPopup from "../components/KidPopup"
import TransactionPopup from "../components/TransactionPopup"

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class Dashboard extends Component {
  render() {
    return (
        <div>
            Dashboard
            <Header />
            <SideNav />
            <KidInfo />
            <KidPopup />
            <TransactionPopup />
        </div>
    );
  }
}

const kidsQuery = gql`
          query {
            allKids(userId:1){
              name
            }
          }
          `

export default graphql(kidsQuery, { name: 'kids' })(Dashboard);