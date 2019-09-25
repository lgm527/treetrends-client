import React, {Component} from 'react'

export default class Footer extends Component {

  render(){
    return(
      <>
      <div style={{bottom: 0, textAlign: 'center', width: '98%', position: 'fixed'}}>
      <p style={{fontSize: '12px', backgroundColor: 'rgba(0, 0, 0, .1)', padding: '5px', borderRadius: '15px'}}>Special thanks to NYC Open Data, ©TreeTrends made by the nerdy tree hugger: <a href='https://github.com/lgm527'>@lgm527</a></p>
      </div>
      </>
    )
  }
}
