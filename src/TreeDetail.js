import React, {Component} from 'react'
import './Tree.css'

export default class TreeDetail extends Component {

  render(){

    const { normalizeString, tree, rmTreeFromDB } = this.props
    const { id, address, boroname, census_id, health, species, steward, zipcode } = tree;

    return(
      <div className='treeDetail' census_id={census_id}>
      <p id='luv' onClick={ () => rmTreeFromDB(id) }>♥</p>
      <p><b>Species:</b> {normalizeString(species)}</p>
      <p><b>Location:</b> {normalizeString(address)} {normalizeString(boroname)}, NY {zipcode}</p>
      <p><b>Health:</b> {health}</p>
      <p><b>Steward:</b> {steward}</p>
      </div>
    )
  }
}
