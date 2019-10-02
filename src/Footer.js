import React, {Component} from 'react'

export default class Footer extends Component {

  render(){

    const divStyle = {bottom: 0, textAlign: 'center', width: '98%', position: 'fixed'}
    const pStyle = {fontSize: '12px', backgroundColor: 'rgba(0, 0, 0, .1)', padding: '5px', borderRadius: '15px'}

    return(
      <>
      <div style={divStyle}>
      <p style={pStyle}>Special thanks to NYC Open Data, ©TreeTrends made by the nerdy tree hugger: <a href='https://github.com/lgm527'>@lgm527</a> <span id='heart'>♥</span></p>
      </div>
      </>
    )
  }
}
