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
          (<p style={{backgroundColor: 'rgba(0, 0, 0, .1)', padding: '5px', borderRadius: '15px'}}><Link to='/login'><img src={login} alt='login'/></Link><img src={ttlogo} style={{padding: '50px'}} alt='treetrends logo'/><Link to='/signup'><img src={signup} alt='signup'/></Link></p>)}

          <div style={{marginTop: '90px'}}>
          <p>Locate trees near you to provide stewardship!</p>
          <p>Also browse data from the 2015 Street Tree Census.</p>
          </div>

          <div>
            <div style={{background: 'white', marginLeft: '15%', marginTop: '3%', height: '170px', width: '400px', float: 'left', textAlign: 'left', padding: '2%', borderRadius: '15px 50px'}}>
              <p><b style={{fontSize: '25px'}}>stewardship</b> <i>noun</i>
              <br></br>
              stew·​ard·​ship | \ ˈstü-ərd-ˌship  , ˈstyü-; ˈst(y)u̇rd- \
              <br></br>
              the responsible overseeing and protection of something considered worth caring for and preserving.</p>
            </div>
            <div style={{marginRight: '15%', marginTop: '3%', marginBottom: '5%', height: '400px', width: '600px',  float: 'right'}}>
              <img src={speak} alt='speak' style={{height: '200px', width: '200px', float: 'left'}}/>
              <img src= {lorax} alt='lorax' style={{height: '400px', width: '400px', float: 'right'}}/>
            </div>
          </div>

      </div>
    )
  }
}
