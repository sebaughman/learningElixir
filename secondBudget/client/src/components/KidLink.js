import React, { Component } from 'react';
import { createFragmentContainer} from 'react-relay';
import { graphql } from 'relay-runtime'
import {Link} from 'react-router-dom'


class KidLink extends Component {
  render() {
    return (
        <div className='kidLink'>
           <Link to={`/dashboard/${this.props.kid.id}`}>{this.props.kid.name}</Link>
        </div>
    );
  }
}

export default createFragmentContainer(KidLink, graphql`
  fragment KidLink_kid on Kid {
    id
    name
  }
`)