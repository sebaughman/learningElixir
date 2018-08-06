import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import KidList from './KidList'

const SideNavQuery = graphql`
  query SideNavQuery($userId: ID!) {
      allKids(userId: $userId){
          ...KidList_kids
        }
  }
`
class SideNav extends Component {
render() {
    return (
      <QueryRenderer
        environment={environment}
        query={SideNavQuery}
        variables={{userId: this.props.tempUser}}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <KidList kids={props.allKids} kidId={this.props.kidId}/>
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default SideNav