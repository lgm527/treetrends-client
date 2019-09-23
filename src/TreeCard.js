import React, {Component} from 'react'

export default class TreeCard extends Component {

  render(){

    const { normalizeString, addTreeToDB, tree } = this.props
    const { health, steward, spc_common, address, zip_city, zipcode, status, spc_latin } = this.props.tree;
    return(
      <div style={{float: 'right', marginRight: '20%', borderRadius: '15px 50px', backgroundColor: 'white', textAlign: 'left', padding: '1.5%', width: '450px', height: '225px'}}>
        <button style={{float: 'right'}} onClick={ () => addTreeToDB(tree) }>luv</button>
        <p><b>Species:</b> {normalizeString(spc_common)} <i>({normalizeString(spc_latin)})</i></p>
        <p><b>Location:</b> {normalizeString(address)} {normalizeString(zip_city)}, NY {normalizeString(zipcode)}
        </p>
        <p><b>Status:</b> {normalizeString(status)}</p>
        <p><b>Health:</b> {normalizeString(health)}</p>
        <p><b>Steward:</b> {steward}</p>
      </div>
    )
  }
}
