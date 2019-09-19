import React, {Component} from 'react';
import lorax from './lorax.png';
import {Link} from 'react-router-dom';
import Nav from './Nav'

export default class LandingPage extends Component {

  render(){
    return(
      <div className='landingpage'>
        <h1>TreeTrends</h1>
        {localStorage.token ?
          (<div><span>Hi {this.props.user}!</span><Nav handleLogOut={this.props.handleLogOut} /></div>) :
          (<p><Link to='/signup'>Sign Up</Link> <Link to='/login'>Login</Link></p>)}
          <br></br><br></br><br></br><br></br>
        <img src= {lorax} alt='lorax' style={{height: '400px', width: '400px'}}/>
      </div>
    )
  }
}
