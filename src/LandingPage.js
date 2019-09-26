import React, {Component} from 'react';
import lorax from './thelorax.svg';
import signup from './signup.png';
import login from './login.png';
import ttlogo from './treetrends.png'
import speak from './speak.png'
import {Link} from 'react-router-dom';
import Nav from './Nav';
import './LandingPage.css'

export default class LandingPage extends Component {

  render(){

    return(
      <div className='landingpage'>
        {localStorage.token ?
          (<div><Nav handleLogOut={this.props.handleLogOut} username={this.props.user}/></div>) :
          (<p className='banner'><Link to='/login'><img src={login} alt='login'/></Link><img src={ttlogo} id='ttlogo' alt='treetrends logo'/><Link to='/signup'><img src={signup} alt='signup'/></Link></p>)}

          <div id='intro'>
          <p>Locate trees near you to provide stewardship!</p>
          <p>Also browse data from the 2015 Street Tree Census.</p>
          </div>

          <div>
            <div id='definition'>
              <p><b id='stew'>stewardship</b> <i>noun</i>
              <br></br>
              stew·​ard·​ship | \ ˈstü-ərd-ˌship  , ˈstyü-; ˈst(y)u̇rd- \
              <br></br>
              the responsible overseeing and protection of something considered worth caring for and preserving.</p>
            </div>
            <div className='pic'>
              <img src={speak} alt='speak' id='speak'/>
              <img src= {lorax} alt='lorax' id='lorax'/>
            </div>
          </div>

      </div>
    )
  }
}
