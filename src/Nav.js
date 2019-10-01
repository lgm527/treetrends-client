import React from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import mapicon from './assets/mapicon.svg';
import avatar from './assets/avatar.png';
import tree from './assets/nycparkslogo.png';
import ttlogo from './assets/treetrends.png';
import dataicon from './assets/bar.svg';
import hearthands from './assets/hearthands.png'
import health from './assets/pulse.png'
import light from './assets/light.png'
import './styles/Nav.css'

export default class Nav extends React.Component {

  render(){

    return(
      <React.Fragment>
        <div className='bigDiv'>
          <Link to='/'>
          <img src={logo} alt='logo' className='navicons'/>
          {' '}
          </Link>
          <Link to='/trees'>
          <img src={mapicon} alt='map' className='navicons'/>
          {' '}
          </Link>
          <Link to='/profile'>
          <img src={avatar} alt='avatar' className='navicons'/>
          {' '}
          </Link>
          <Link to='/friends'>
          <img src={hearthands} alt='hearthands' className='navicons'/>
          {' '}
          </Link>
          <Link to='/species'>
          <img src={dataicon} alt='species' className='navicons'/>
          {' '}
          </Link>
          <Link to='/health'>
          <img src={health} alt='health' className='navicons'/>
          {' '}
          </Link>
          <Link to='/tips'>
          <img src={light} alt='light bulb' className='navicons'/>
          {' '}
          </Link>
          <a href='https://www.nycgovparks.org/reg/stewardship'>
          <img src={tree} alt='' id='nycparkslogo' />
          {' '}
          </a>
          <img src={ttlogo} id='treetrends' alt='treetrends logo'/>
          <p id='loggedin'>{' '}Logged in as: <b>{this.props.username}{' '}</b>{' '}</p>
          <p id='peaceout' onClick={this.props.handleLogOut}>Peace Out</p>
        </div>
      </React.Fragment>
    )
  }
}
