import React, {Component} from 'react';
import TreeDetail from './TreeDetail'
import Nav from './Nav'

export default class Profile extends Component {


  render(){

          console.log(this.props.stewardTrees);

    const { rmTreeFromDB, normalizeString } = this.props
    const stewTrees = this.props.stewardTrees.map((tree) => {
      console.log(tree.id);

      return <TreeDetail tree={tree} normalizeString={normalizeString} rmTreeFromDB={rmTreeFromDB}  key={tree.id}/>
    })

    return(
      <div>
      <div><Nav handleLogOut={this.props.handleLogOut} /></div>
      {stewTrees}
      </div>
    )
  }
}
