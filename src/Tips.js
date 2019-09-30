import React from 'react'
import Nav from './Nav'
import './Tips.css'

export default class Tips extends React.Component {

  render(){
    return(
      <div>
        <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.user} /></div>

        <div className='tipsDiv'>
        <div id='tipBanner'><u>Stewardship Tips!</u></div>
        </div>

      </div>
    )
  }
}
