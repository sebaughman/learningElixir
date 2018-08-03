import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

const KidHeaderQuery = graphql`
  query KidHeaderQuery($id: ID!) {
      kid(id: $id){
          name
          budgetAmount
          amountRemaining
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
            return<div  className='kidHeader'> <h3>{props.kid.name}</h3> <br /> <p>Budget: {props.kid.budgetAmount}</p><br /> <p>Amount Remaining: {props.kid.amountRemaining}</p> </div>
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default KidHeader