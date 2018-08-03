import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import KidList from './KidList'

const SideNavQuery = graphql`
  query SideNavQuery {
      allKids(userId: 1){
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
        render={({error, props}) => {
            console.log(props)
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <KidList kids={props.allKids} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default SideNav