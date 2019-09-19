import React, {Component} from 'react'

export default class TreeCard extends Component {

  render(){
    const { health, steward, spc_common, address, zip_city, zipcode, status, spc_latin } = this.props.tree;
    return(
      <div style={{float: 'right'}}>
        <button style={{float: 'right'}} onClick={() => this.props.addTreeToDB(this.props.tree)}>luv</button>
        <p><b>Species:</b> {this.props.normalizeString(spc_common)} <i>({this.props.normalizeString(spc_latin)})</i></p>
        <p><b>Location:</b> {this.props.normalizeString(address)} {this.props.normalizeString(zip_city)}, NY {this.props.normalizeString(zipcode)}
        </p>
        <p><b>Status:</b> {this.props.normalizeString(status)}</p>
        <p><b>Health:</b> {this.props.normalizeString(health)}</p>
        <p><b>Steward:</b> {steward}</p>
      </div>
    )
  }
}
