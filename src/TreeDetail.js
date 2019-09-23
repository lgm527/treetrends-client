import React, {Component} from 'react'

export default class TreeDetail extends Component {

  render(){

    const { normalizeString, tree, rmTreeFromDB } = this.props
    const { id, address, boroname, census_id, health, species, steward, zipcode } = tree;

    return(
      <div style={{float: 'right', borderRadius: '.5em', backgroundColor: 'white'}} census_id={census_id}>
      <p><b>Species:</b> {normalizeString(species)}</p>
      <p><b>Location:</b> {normalizeString(address)} {normalizeString(boroname)}, NY {zipcode}</p>
      <p><b>Health:</b> {health}</p>
      <p><b>Steward:</b> {steward}</p>
      <button onClick={ () => rmTreeFromDB(id) }>unluv</button>
      </div>
    )
  }
}
