import React, {Component} from 'react'

export default class TreeDetail extends Component {

  render(){

    const { normalizeString, tree, rmTreeFromDB } = this.props
    const { id, address, boroname, census_id, health, species, steward, zipcode } = tree;

    return(
      <div style={{margin: '1% 18% 1%', borderRadius: '15px 50px', backgroundColor: 'white', textAlign: 'left', padding: '1.5%', width: '450px', height: '225px', breakInside: 'avoid-column', display: 'inline-block'}} census_id={census_id}>
      <p style={{float: 'right', color: 'red', cursor: 'pointer'}} onClick={ () => rmTreeFromDB(id) }>♥</p>
      <p><b>Species:</b> {normalizeString(species)}</p>
      <p><b>Location:</b> {normalizeString(address)} {normalizeString(boroname)}, NY {zipcode}</p>
      <p><b>Health:</b> {health}</p>
      <p><b>Steward:</b> {steward}</p>
      </div>
    )
  }
}
