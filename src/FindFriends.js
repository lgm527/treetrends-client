import React, {Component} from 'react';
import Nav from './Nav'
import Friend from './Friend'

export default class FindFriends extends Component {

  state = {
    friends: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/friends')
    .then(res => res.json())
    .then(friends => {this.setState({friends})})
  }

  render(){

    const treeHuggers = this.state.friends.map((friend) => friend.username !== this.props.user ? <Friend friend={friend} key={friend.id}/> : null)
    return(
      <div>
        <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.user} /></div>
        <div style={{marginTop: '90px', marginLeft: '3%', marginBottom: '3%'}}>
          {treeHuggers}
        </div>
      </div>
    )
  }
}
