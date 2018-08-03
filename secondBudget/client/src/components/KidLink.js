import React, { Component } from 'react';
import { createFragmentContainer} from 'react-relay';
import { graphql } from 'relay-runtime'


class KidLink extends Component {
  render() {
    return (
        <div className='kidLink'>
            {this.props.kid.name}
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