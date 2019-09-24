import React, {Component} from 'react'

export default class Footer extends Component {

  render(){
    return(
      <>
      <p style={{bottom: 0, left: 0, width: '98.2%', textAlign: 'center', position: 'fixed', fontSize: '12px', backgroundColor: 'rgba(0, 0, 0, .1)', padding: '5px', borderRadius: '15px', margin: '10px'}}>Special thanks to NYC Open Data, ©TreeTrends made by the nerdy tree hugger: <a href='https://github.com/lgm527'>@lgm527</a></p>
      </>
    )
  }
}
