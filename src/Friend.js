import React, {Component} from 'react'
import './styles/FindFriends.css'


export default class Friend extends Component {
  render(){
    const { trees, username } = this.props.friend
    const myTrees = trees.map((tree) => <li key={tree.id}>{tree.species} at {tree.address}, {tree.boroname} NY {tree.zipcode}</li>)
    return(
      <>
      <div className='friend'>
      <h3>{username} <span id='heart'>♥</span>'s {trees.length > 0 ? `${trees.length} trees` : 'No trees at the moment'}</h3>
      <ul style={{listStyleImage: 'url(http://maps.google.com/mapfiles/ms/icons/tree.png)'}}>{myTrees}</ul>
      </div>
      </>
    )
  }
}
