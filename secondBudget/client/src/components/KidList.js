import React, { Component } from 'react';
import KidLink from './KidLink'
import { createFragmentContainer, graphql } from 'react-relay';


class KidList extends Component {
  render() {
      const kids = this.props.kids.map((kid, i)=>{
          return <KidLink key={i} kid={kid}/>
      })
    return (

        <div className='kidList'>
            {kids}
        </div>
    );
  }
}

export default createFragmentContainer(KidList, graphql`
  fragment KidList_kids on Kid @relay(plural: true){
          ...KidLink_kid
  }
`)