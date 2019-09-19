import React from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends React.Component {

  render(){
    return(
      <React.Fragment>
        <nav>
          <span><Link to='/'>Home</Link> <Link to='/trees'>Trees</Link> <Link to='/profile'>Profile</Link>
          <button onClick={this.props.handleLogOut}>Logout</button></span>
        </nav>
      </React.Fragment>
    )
  }
}
