import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import TreeCard from './TreeCard'



export class TreeContainer extends Component {

  state = {
    trees: [],
    clicked: false,
    treeSelected: {},
    treeMarker: {}
  }

  componentDidMount(){
    fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json?nta_name=DUMBO-Vinegar%20Hill-Downtown%20Brooklyn-Boerum%20Hill&$limit=100',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-App-Token': process.env.REACT_APP_TREE_TOKEN
      }
    })
    .then(res => res.json())
    .then(trees => {this.setState({trees})})
  }

  handleClick = (props, marker, e) => {
    this.setState({treeSelected: props.tree, treeMarker: marker, clicked: true})
  }

  handleHeartClick = (e) => {
    console.log(e);
  }

  normalizeString = (string) => {
  let res
  let theString
		if (string !== undefined) {
      theString = string.replace(/[^a-zA-Z\d\s:]*/g, '')
  		if (string.includes(' ')){
      let words = theString.split(' ')
      let result = []
      words.forEach((word) => {
      	result.push( word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() )
      })
      res = result.join(' ')
      } else {
       res = theString.charAt(0).toUpperCase() + theString.slice(1).toLowerCase()
      }
  	}
    return res
  }


  render(){
    const firstCenter = {lat: 40.703316, lng: -73.988145};
    const theTrees = this.state.trees.map((tree) => {
      return <Marker
            position={{lat: tree.latitude, lng: tree.longitude}}
            icon={{url: "http://maps.google.com/mapfiles/ms/icons/tree.png"}}
            onClick={this.handleClick}
            key={tree.tree_id}
            tree={tree}
          />
    })

    return(
      <div>
      <h1>All the Trees</h1>
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={firstCenter}
        style={{width: '500px', height: '500px'}}
        yesIWantToUseGoogleMapApiInternals={true}
        >
        {theTrees}
        <InfoWindow
        marker={this.state.treeMarker}
        visible={this.state.clicked}>
          <div>
          <h2>
            {this.normalizeString(this.state.treeSelected.spc_common)} at {this.normalizeString(this.state.treeSelected.address)} {this.normalizeString(this.state.treeSelected.zip_city)}, NY {this.normalizeString(this.state.treeSelected.zipcode)}
            </h2>
          </div>
        </InfoWindow>
        { this.state.clicked ? <TreeCard tree={this.state.treeSelected} normalizeString={this.normalizeString} addTreeToDB={this.props.addTreeToDB}/> : null }
      </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(TreeContainer)
