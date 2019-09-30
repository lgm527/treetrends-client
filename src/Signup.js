import React from 'react'
import {form, logoo, button} from './Form.module.scss'
import logo from './logo.png'


export default class Signup extends React.Component {

  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {  password, confirmPassword } = this.state
    if (password  !== confirmPassword){
      window.alert('Passwords don\'t match')
    } else {
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
  }

  render () {
    return (
      <div className={form}>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit} autocomplete="off" >
          <br></br>
          <input onChange={this.handleChange} value={this.state.username} type='text' name='username' placeholder='Username' />
          <br></br>
          <br></br>
          <input onChange={this.handleChange} value={this.state.password} type='password' name='password' placeholder='Password'/>
          <br></br>
          <br></br>
          <input onChange={this.handleChange} value={this.state.confirmPasswordpassword} type='password' name='confirmPassword' placeholder='Confirm Password'/>
          <br></br>
          <br></br>
          <input className={button} type='submit' value='Sign up'/>
        </form>
        <a href='/'>
        <img className={logoo} src={logo} alt='logo'/>
        </a>
      </div>
    )
  }
}
