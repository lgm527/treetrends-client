import React, {Component} from 'react'
import './Tree.css'

export default class TreeCard extends Component {

  luv = (tree) => {
    this.props.addTreeToDB(tree)
    this.props.luvd()
  }

  render(){

    const { normalizeString, tree } = this.props
    const { health, steward, spc_common, address, zip_city, zipcode, status, spc_latin } = this.props.tree;
    return(
      <div className='treeCard'>
        <p id='luv' onClick={ () => this.luv(tree) }>{ this.props.luv ? '♥' : '♡'}</p>
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
