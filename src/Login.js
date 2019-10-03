import React from 'react'
import {form, logoo, button} from './styles/Form.module.scss'
import logo from './assets/logo.png'

export default class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.token = data.token
        localStorage.username = data.user.username
        localStorage.id = data.user.id
        this.props.getProfile()
        this.props.history.push('/')
      } else {
        window.alert('Wrong information, ¯\\_(ツ)_/¯ please try again.')
      }
    })
  }
  render () {
    return (
      <div className={form}>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off" >
          <br></br>
          <input onChange={this.handleChange} value={this.state.username} type='text' name='username' placeholder='Username' />
          <br></br>
          <br></br>
          <input onChange={this.handleChange} value={this.state.password} type='password' name='password' placeholder='Password' />
          <br></br>
          <br></br>
          <input className={button} type='submit' value='Log In'/>
        </form>
        <a href='/'>
        <img className={logoo} src={logo} alt='logo'/>
        </a>
      </div>
    )
  }
}
