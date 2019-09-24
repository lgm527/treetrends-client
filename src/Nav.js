import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import mapicon from './mapicon.svg';
import avatar from './avatar.png';
import tree from './nyc_parks_department';
import ttlogo from './treetrends.png';

export default class Nav extends React.Component {

  render(){

    return(
      <React.Fragment>
        <div style={{display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, .1)',
                    padding: '5px',
                    borderRadius: '15px'
                  }}>
          <Link to='/'>
          <img src={logo} alt='logo' style={{height: '40px', width: '40px', margin: '15px 15px 0'}}/>
          {' '}
          </Link>
          <Link to='/trees'>
          <img src={mapicon} alt='map' style={{height: '40px', width: '40px', margin: '15px 15px 0'}}/>
          {' '}
          </Link>
          <Link to='/profile'>
          <img src={avatar} alt='avatar' style={{height: '40px', width: '40px', margin: '15px 15px 0'}} />
          {' '}
          </Link>
          <a href='https://www.nycgovparks.org/reg/stewardship'>
          <img src={tree} alt='' style={{height: '40px', width: '40px', margin: '15px 15px 0'}} />
          {' '}
          </a>
          <img src={ttlogo} alt='treetrends logo'/>
          <p style={{float: 'right', margin: '30px 15px 0px'}}>{' '}Logged in as: <b>{this.props.username}{' '}</b>{' '}</p>
          <button style={{float: 'right', margin: '30px 15px 15px'}}
          onClick={this.props.handleLogOut}>Logout</button>
        </div>
      </React.Fragment>
    )
  }
}
