import React, {Component} from 'react';
import TreeDetail from './TreeDetail'
import Nav from './Nav'

export default class Profile extends Component {


  render(){

    const { rmTreeFromDB, normalizeString } = this.props
    const stewTrees = this.props.stewardTrees.map((tree) => {

      return <TreeDetail tree={tree} normalizeString={normalizeString} rmTreeFromDB={rmTreeFromDB}  key={tree.id}/>
    })

    return(
      <div>
      <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.username} /></div>
      <div style={{textAlign: 'center', columnCount: '2', margin: '3%', overflow: 'auto'}}>
      {stewTrees}
      </div>
      </div>
    )
  }
}
