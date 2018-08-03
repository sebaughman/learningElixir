import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

const KidHeaderQuery = graphql`
  query KidHeaderQuery($id: ID!) {
      kid(id: $id){
          name
        }
  }
`
class KidHeader extends Component {
render() {
    return (
      <QueryRenderer
        environment={environment}
        query={KidHeaderQuery}
        variables={{id: this.props.kidId}}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <h3>{props.kid.name}</h3>
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default KidHeader