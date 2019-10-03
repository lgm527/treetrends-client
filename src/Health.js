import React from 'react'
import Nav from './Nav'
import './styles/Health.css'

export default class Species extends React.Component {

  health = {
    good: {n: 528850, p: 77},
    fair: {n: 96504, p: 14},
    poor: {n: 26818, p: 4}
  }

  state = {
    rGood: false,
    rFair: false,
    rPoor: false
  }

  handleClick = (h) => {
    if (h === 'good'){
      this.setState({rGood: !this.state.rGood})
    } else if (h === 'fair') {
      this.setState({rFair: !this.state.rFair})
    } else if (h === 'poor') {
      this.setState({rPoor: !this.state.rPoor})
    }
  }

  render(){

    const { rGood, rFair, rPoor } = this.state
    const { handleClick } = this

    return(
      <div>
      <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.user} /></div>

      <div className='healthDiv'>
      <div id='healthBanner'><u>Health!</u></div>
        <p id='good' onClick={() => {handleClick('good')}}>{rGood ? '528,850 Trees (77%)' : 'Good'}</p>
        <p id='fair' onClick={() => {handleClick('fair')}}>{rFair ? '96,504 Trees (14%)' : 'Fair'}</p>
        <p id='poor' onClick={() => {handleClick('poor')}}>{rPoor ? '26,818 Trees (4%)' : 'Poor'}</p>
      </div>

      </div>
    )
  }

}
