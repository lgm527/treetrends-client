import React from 'react'
import {form} from './Form.module.scss'
import logo from './logo.png'


export default class Signup extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (!data.errors) {
        localStorage.token = data.token
        localStorage.username = data.user.username
        localStorage.id = data.user.id
        this.props.getProfile()
        this.props.history.push('/')
      }
    })
  }

  render () {
    return (
      <div className={form}>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Username:
          <br></br>
          <input onChange={this.handleChange} value={this.state.username} type='text' name='username' />
          </label>
          <br></br>
          <br></br>
          <label> Password:
          <br></br>
          <input onChange={this.handleChange} value={this.state.password} type='password' name='password' />
          </label>
          <br></br>
          <br></br>
          <input type='submit' value='Log In'/>
        </form>
        <a href='/'>
        <img style={{float: 'left', height: '30px', width: '30px'}} src={logo} alt='logo'/>
        </a>
      </div>
    )
  }
}
