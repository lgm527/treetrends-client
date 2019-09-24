import React from 'react'

export default class Species extends React.Component {

  state = {
    data: []
  }

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

  render(){

    const theData = this.state.data.map((spc, i) => {
      return <p style={{fontSize: Number(spc.count), textAlign: 'left'}} key={i}>{this.props.normalizeString(spc.spc_common)}</p>
    })

    console.log(this.state);
    return(
      <div>
      {theData}
      </div>

    )
  }


}
