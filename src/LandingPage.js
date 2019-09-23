import React, {Component} from 'react';
import lorax from './thelorax.svg';
import signup from './signup.png';
import login from './login.png';
import ttlogo from './treetrends.png'
import speak from './speak.png'
import {Link} from 'react-router-dom';
import Nav from './Nav';

export default class LandingPage extends Component {

  render(){

    return(
      <div className='landingpage'>
        {localStorage.token ?
          (<div><Nav handleLogOut={this.props.handleLogOut} username={this.props.user}/></div>) :
          (<p><img src={ttlogo} alt='treetrends logo'/><br></br><Link to='/login'><img src={login} alt='login'/></Link><Link to='/signup'><img src={signup} alt='signup'/></Link></p>)}
        <div style={{height: '400px', width: '600px', margin: '5% 30% 0'}}>
          <img src={speak} alt='speak' style={{height: '200px', width: '200px', float: 'left'}}/>
          <img src= {lorax} alt='lorax' style={{height: '400px', width: '400px', float: 'right'}}/>
        </div>
      </div>
    )
  }
}
