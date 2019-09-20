import React, {Component} from 'react';
import './App.css';
import LandingPage from './LandingPage'
import TreeContainer from './TreeContainer'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import {Switch, Route, withRouter} from 'react-router-dom';

class App extends Component {

  state = {
    username: '',
    user_id: '',
    stewardTrees: []
  }

  componentDidMount(){
    if(localStorage.token){
      this.getProfile()
    } else {
      this.props.history.push('/')
    }
  }

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

  normalizeString = (str) => {
  let res
  let theString
    if (str !== undefined && str !== null) {
      theString = str.replace(/[^a-zA-Z\d\s:]*/g, '')
      if (str.includes(' ')){
      let words = theString.split(' ')
      let result = []
      words.forEach((word) => {
        result.push( word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() )
      })
      res = result.join(' ')
      } else {
       res = theString.charAt(0).toUpperCase() + theString.slice(1).toLowerCase()
      }
    }
    return res
  }

  addTreeToDB = (tree) => {
    fetch('http://localhost:3000/trees', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        census_id: tree.tree_id,
        species: this.normalizeString(tree.spc_common),
        address: this.normalizeString(tree.address),
        boroname: tree.boroname,
        zipcode: tree.zipcode,
        health: tree.health,
        steward: tree.steward
      })
      })
      .then(res => res.json())
      .then((data) => {
        this.addSteward(data.id)
        window.alert('saved for later')
    })
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
    })
    .then(res => res.json())
    .then(this.getProfile())
  }

  rmTreeFromDB = (id) => {
    let updatedTrees = this.state.stewardTrees.filter(tree => tree.id !== id)
    this.setState({
      stewardTrees: updatedTrees
    })
    fetch(`http://localhost:3000/trees/${id}`, {
      method: 'DELETE'
    })
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

      <Route path={'/trees'}
      render={routerProps => <TreeContainer{...routerProps}
      getProfile={this.getProfile}
      handleLogOut={this.handleLogOut}
      addTreeToDB={this.addTreeToDB}
      normalizeString={this.normalizeString}/>} />

      <Route path={'/login'}
      render={routerProps => <Login {...routerProps}
      getProfile={this.getProfile} />}/>

      <Route path={'/signup'}
      render={routerProps => <Signup {...routerProps}
      getProfile={this.getProfile} />}/>

      <Route path={'/profile'}
      render={routerProps => <Profile {...routerProps}
      username={this.state.username}
      getProfile={this.getProfile}
      stewardTrees={this.state.stewardTrees}
      normalizeString={this.normalizeString}
      handleLogOut={this.handleLogOut}
      rmTreeFromDB={this.rmTreeFromDB}/>} />

      <Route exact path={'/'}
      render={routerProps => <LandingPage {...routerProps}
      user={this.state.username}
      handleLogOut={this.handleLogOut}/>} />

      </Switch>
    )
  }
}

export default withRouter (App);
