import React, {Component} from 'react'


export default class Friend extends Component {
  render(){
    const { trees, username } = this.props.friend
    const myTrees = trees.map((tree) => <li key={tree.id}>{tree.species} at {tree.address}, {tree.boroname} NY {tree.zipcode}</li>)
    return(
      <>
      <div style={{backgroundColor: 'white', margin: '2% 0 2%', width: '40%', padding: '1%', borderRadius: '15px 50px', textAlign: 'left'}}>
      <h3 style={{textAlign: 'center'}}>{username} <span style={{color: 'red'}}>♥</span>'s {trees.length > 0 ? `${trees.length} trees` : 'No trees at the moment'}</h3>
      <ul style={{listStyleImage: 'url(http://maps.google.com/mapfiles/ms/icons/tree.png)'}}>{myTrees}</ul>
      </div>
      </>
    )
  }
}
