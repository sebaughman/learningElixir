import React, { Component } from 'react';
import { createFragmentContainer} from 'react-relay';
import { graphql } from 'relay-runtime'
import {Link} from 'react-router-dom'


class KidLink extends Component {
  render() {
    return (
        <div className='kidLink'>
           <Link to={`/dashboard/${this.props.kid.id}`}><div className={this.props.kid.id === this.props.kidId ? 'selectedKid': ''}>{this.props.kid.name}</div></Link>
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