import React, {Component} from 'react'

export default class Feed extends Component {

  state = {
    stewards: []
  }

  componentDidMount(){
    fetch('https://tree-trends.herokuapp.com/stewards')
    .then(res => res.json())
    .then(stewards => this.setState({stewards}))
  }

  render(){
    const stews = this.state.stewards.map((steward) => <div key={steward.id}
    style={{backgroundColor: 'rgba(0, 0, 0, .1)', padding: '5px 10px', borderRadius: '15px 50px', margin: '10px', textAlign: 'left'}}> {steward.user.username}
    <span id='heart'>♥</span>'s a {steward.tree.boroname} {steward.tree.species}
    <p style={{fontSize: '9px', float: 'right'}}>@ {steward.created_at.slice(5, 7)}/{steward.created_at.slice(8,10)}/{steward.created_at.slice(0, 4)}
    </p></div>).reverse()

    return(
      <>
      <div style={{float: 'left', marginTop: '6%', marginLeft: '10%', backgroundColor: 'rgba(0, 0, 0, .1)', padding: '1%', borderRadius: '15px 50px', backgroundColor: 'white'}}>
      <h1>Feed:</h1>
      <div style={{height: '500px', overflowX: 'hidden', overflowX: 'auto', textAlign: 'justify'}}>
      {stews}
      </div>
      </div>
      </>
    )
  }
}
