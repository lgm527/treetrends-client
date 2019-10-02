import React, {Component} from 'react';
import lorax from './assets/thelorax.svg';
import signup from './assets/signup.png';
import login from './assets/login.png';
import ttlogo from './assets/treetrends.png'
import speak from './assets/speak.png'
import {Link} from 'react-router-dom';
import Nav from './Nav';
import Feed from './Feed';
import './styles/LandingPage.css';

export default class LandingPage extends Component {

  render(){

    return(
      <div className='landingpage'>

        {localStorage.token ?
          (<>
            <Nav handleLogOut={this.props.handleLogOut} username={this.props.user}/>
            <Feed username={this.props.user} />
            <div id='welcome'>
              <p id='hi'>Welcome to TreeTrends <b>{this.props.user}</b>! <img className='tree' src='http://maps.google.com/mapfiles/ms/icons/tree.png' alt='tree' /></p>
              <p> Locate trees in your neighborhood using the map,</p>
              <p> save trees you love,</p>
              <p> see what trees others have saved,</p>
              <p> explore the data collected for the 2015 Street Tree Census,</p>
              <p> get tips for how to take care of a tree,</p>
              <p> and visit the NYC Parks website to offically register to volunteer!</p>
            </div>
          </>)
            :
          (<>
            <p className='banner'><Link to='/login'><img src={login} alt='login'/></Link><img src={ttlogo} id='ttlogo' alt='treetrends logo'/><Link to='/signup'><img src={signup} alt='signup'/></Link></p>


          <div id='intro'>
            <p>Locate trees near you to volunteer stewardship!</p>
            <p>See what trees others love <span id='heart'>♥</span></p>
            <p>Get tips on taking care of trees.</p>
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
          </>)
        }

      </div>
    )
  }
}
