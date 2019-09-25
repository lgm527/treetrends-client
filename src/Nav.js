import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import mapicon from './mapicon.svg';
import avatar from './avatar.png';
import tree from './nycparkslogo.png';
import ttlogo from './treetrends.png';
import dataicon from './data.png';

export default class Nav extends React.Component {

  render(){

    return(
      <React.Fragment>
        <div style={{display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, .1)',
                    padding: '5px',
                    borderRadius: '15px',
                    top: 0,
                    position: 'fixed',
                    textAlign: 'center',
                    width: '97.5%',
                    marginTop: '10px',
                    marginBottom: '10px',
                    zIndex: '2'
                  }}>
          <Link to='/'>
          <img src={logo} alt='logo' style={{height: '40px', width: '40px', margin: '15px 15px 0', paddingRight: '25px'}}/>
          {' '}
          </Link>
          <Link to='/trees'>
          <img src={mapicon} alt='map' style={{height: '40px', width: '40px', margin: '15px 15px 0', paddingRight: '25px'}}/>
          {' '}
          </Link>
          <Link to='/profile'>
          <img src={avatar} alt='avatar' style={{height: '40px', width: '40px', margin: '15px 15px 0', paddingRight: '25px'}} />
          {' '}
          </Link>
          <Link to='/species'>
          <img src={dataicon} alt='species' style={{height: '40px', width: '40px', margin: '15px 15px 0', paddingRight: '25px'}} />
          {' '}
          </Link>
          <a href='https://www.nycgovparks.org/reg/stewardship'>
          <img src={tree} alt='' style={{height: '45px', width: '40px', margin: '15px 15px 0', paddingRight: '25px'}} />
          {' '}
          </a>
          <img src={ttlogo} style={{paddingRight: '15px'}} alt='treetrends logo'/>
          <p style={{float: 'right', margin: '30px 15px 0px', paddingRight: '15px'}}>{' '}Logged in as: <b>{this.props.username}{' '}</b>{' '}</p>
          <p style={{float: 'right', margin: '20px 15px 15px', cursor: 'pointer', backgroundColor: 'rgba(0, 0, 0, .1)', borderRadius: '15px', padding: '5px'}}
          onClick={this.props.handleLogOut}>Peace Out</p>
        </div>
      </React.Fragment>
    )
  }
}
