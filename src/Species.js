import React from 'react'
import Nav from './Nav'

export default class Species extends React.Component {

  state = {
    data: []
  }

  //https://data.cityofnewyork.us/resource/uvpi-gqnh.json?$select=spc_common,count(*)&$group=spc_common&$order=count%20DESC
  //https://data.cityofnewyork.us/resource/uvpi-gqnh.json?$select=spc_common,count(*)&$group=spc_common&$order=count%20ASC
  //alphabetical

  componentDidMount(){
    fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json?$select=spc_common,count(*)&$group=spc_common', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-App-Token': process.env.REACT_APP_TREE_TOKEN
      }
    })
    .then(res => res.json())
    .then(data => this.setState({data}))
  }

  fonter = (n) => {
    return Math.ceil((Number(n)/683788) * 5000)
  }

  fontSize = (n) => {
    let size = this.fonter(n)
    let fSize = 10;
    if (size > 500) {
      fSize = 400;
    } else if (size > 400) {
      fSize = 300;
    } else if (size > 300) {
      fSize = 200;
    } else if (size > 200) {
      fSize = 100;
    } else if (size > 100) {
      fSize = 75;
    } else if (size > 75) {
      fSize = 50;
    } else if (size > 50) {
      fSize = 30;
    } else if (size > 40) {
      fSize = 25;
    } else if (size > 30) {
      fSize = 20;
    } else if (size > 20) {
      fSize = 15;
    }
    return fSize;
  }

  render(){

    const theData = this.state.data.map((spc, i) => {
      return <p style={{fontSize: this.fontSize(spc.count), textAlign: 'left'}} key={i}>{this.props.normalizeString(spc.spc_common)}</p>
    })


    return(
      <div>
      <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.user} /></div>
      <div style={{marginTop: '80px'}}>
      {theData}
      </div>
      </div>

    )
  }


}
