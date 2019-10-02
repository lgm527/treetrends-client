import React, {Component} from 'react'

export default class Feed extends Component {

  state = {
    stewards: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stewards')
    .then(res => res.json())
    .then(stewards => this.setState({stewards}))
  }

  // formatDate = (s) => {
  //   s.slice(0, 10).split('-')
  // }

  render(){
    const stews = this.state.stewards.map((steward) => <div key={steward.id} style={{backgroundColor: 'rgba(0, 0, 0, .1)', padding: '5px 10px', borderRadius: '15px 50px', margin: '5px', textAlign: 'left'}}> {steward.user.username}
    <span id='heart'>♥</span>'s a {steward.tree.boroname} {steward.tree.species}
    <p style={{fontSize: '9px', paddingLeft: '10px'}}>@ {steward.created_at.slice(5, 7)}/{steward.created_at.slice(8,10)}/{steward.created_at.slice(0, 4)}
    </p></div>).reverse()

    return(
      <>
      <div style={{float: 'left'}}>
      <h3>Feed:</h3>
      <div style={{height: '500px', overflowX: 'hidden', overflowX: 'auto', textAlign: 'justify'}}>
      {stews}
      </div>
      </div>
      </>
    )
  }
}
