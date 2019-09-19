import React, {Component} from 'react';
import TreeDetail from './TreeDetail'
import Nav from './Nav'

export default class Profile extends Component {


  render(){
    console.log(this.props);
    const { rmSteward, normalizeString } = this.props
    const stewTrees = this.props.stewardTrees.map((tree) => {
      return <TreeDetail tree={tree} normalizeString={normalizeString} rmSteward={rmSteward}  key={tree.id}/>
    })

    return(
      <div>
      <div><Nav handleLogOut={this.props.handleLogOut} /></div>
      {stewTrees}
      </div>
    )
  }
}
