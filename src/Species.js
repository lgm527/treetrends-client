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

  total = (t, n) => {
    return t + n
  }

  fixFontSize = (n) => {
    this.state.data.reduce(this.total)
  }



  render(){

    const theData = this.state.data.map((spc, i) => {
      return <p style={{fontSize: Number(spc.count), textAlign: 'left'}} key={i}>{this.props.normalizeString(spc.spc_common)}</p>
    })

    return(
      <div>
      <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.user} /></div>
      {theData}
      </div>

    )
  }


}
