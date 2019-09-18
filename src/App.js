import React, {Component} from 'react';
import './App.css';
import LandingPage from './LandingPage'
import TreeContainer from './TreeContainer'
import Login from './Login'
import Signup from './Signup'
// import Profile from './Profile'
import {Switch, Route, withRouter} from 'react-router-dom';

class App extends Component {

  state = {
    username: '',
    user_id: '',
    stewardTrees: []
  }

  // componentDidMount(){
  //   if(localStorage.token){
  //     this.getProfile()
  //   } else {
  //     this.props.history.push('/')
  //   }
  // }

  getProfile = () => {
  fetch('http://localhost:3000/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(user => {
      this.setState({username: user.username, user_id: user.id})
      this.getStewards(user.id)
    })
  }

  handleLogOut = () => {
    localStorage.clear()
    this.props.history.push('/')
  }

  addSteward = (id) => {
    fetch('http://localhost:3000/stewards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        tree_id: id
      })
    }).then(res => res.json())
    .then(() => {
      window.alert('saved for later')
      this.getStewards(this.state.user_id)
      }
    )
  }

  getStewards = (id) => {
    fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    .then(user => {
      this.setState({
        stewardTrees: user.trees
      })
    })
  }

  render(){
    return(
      <Switch>
      <Route path={'/trees'} render={routerProps => <TreeContainer{...routerProps} getProfile={this.getProfile} handleLogOut={this.handleLogOut}/>} />
      <Route path={'/login'} render={routerProps => <Login {...routerProps} getProfile={this.getProfile} />}/>
      <Route path={'/signup'} render={routerProps => <Signup {...routerProps} getProfile={this.getProfile} />}/>

      <Route exact path={'/'} render={routerProps => <LandingPage {...routerProps} handleLogOut={this.handleLogOut}/>} />
      </Switch>
    )
  }
}

export default withRouter (App);
