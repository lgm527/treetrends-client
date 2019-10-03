import React, {Component} from 'react';
import TreeDetail from './TreeDetail'
import Nav from './Nav'
import loraxx from './assets/lorax_no.gif'
import map from './assets/mapicon.svg'

export default class Profile extends Component {


  render(){

    const luvTreesStyle = {textAlign: 'center', columnCount: '2', margin: '5% 20%',  columnWidth: '455px', marginTop: '90px'}

    const { rmTreeFromDB, normalizeString } = this.props
    const stewTrees = this.props.stewardTrees.map((tree) => {

      return <TreeDetail tree={tree} normalizeString={normalizeString} rmTreeFromDB={rmTreeFromDB}  key={tree.id}/>
    })

    return(
      <div>
      <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.username} /></div>
      <div style={luvTreesStyle}>
      {this.props.stewardTrees.length > 0 ?
        stewTrees :
        <div id='hello'>

        <div style={{float: 'left'}}>
          <br></br>
          You have not <span id='heart'>♥</span> any trees yet
          <br></br>
          Click the <img src={map} style={{width: '20px', height: '20px'}} /> icon to locate some trees and get started!
        </div>

        <div style={{float: 'right'}}>
          <img src={loraxx} alt='lorax'/>
        </div>

        </div>}

        </div>
      </div>
    )
  }
}
