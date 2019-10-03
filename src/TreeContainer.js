import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import TreeCard from './TreeCard'
import Nav from './Nav'
import Search from './Search'



export class TreeContainer extends Component {

  state = {
    trees: [],
    clicked: false,
    treeSelected: {},
    treeSelectedLuvd: false,
    treeMarker: {},
    neighborhood: 'DUMBO-Vinegar%20Hill-Downtown%20Brooklyn-Boerum%20Hill',
    center: {lat: 40.703316, lng: -73.988145}
  }

  componentDidMount(){
    this.treeFetch(this.state.neighborhood)
  }

  treeFetch(n){
    fetch(`https://data.cityofnewyork.us/resource/uvpi-gqnh.json?nta_name=${n}&status=Alive&steward=None`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-App-Token': process.env.REACT_APP_TREE_TOKEN
      }
    })
    .then(res => res.json())
    .then(trees => {
      this.setState({
        trees: trees,
        center: {
          lat: trees[400].latitude,
          lng: trees[400].longitude
        }
      })
    })
  }

  handleClick = (props, marker, e) => {
    this.setState({treeSelected: props.tree, treeMarker: marker, clicked: true})
    if(this.props.stewardTrees.some(t => t.census_id === Number(props.tree.tree_id))){
      this.setState({treeSelectedLuvd: true})
    } else {
      this.setState({treeSelectedLuvd: false})
    }
  }

  updateNeighborhood = (newN) => {
    this.setState({neighborhood: newN, clicked: false})
    this.treeFetch(newN)
  }

  luvd = () => {
    this.setState({treeSelectedLuvd: true})
  }

  render(){

    const theTrees = this.state.trees.map((tree) => {
      return <Marker
            position={{lat: tree.latitude, lng: tree.longitude}}
            icon={{url: "http://maps.google.com/mapfiles/ms/icons/tree.png"}}
            onClick={this.handleClick}
            key={tree.tree_id}
            tree={tree}
          />
    })

    const { normalizeString, addTreeToDB } = this.props
    const { spc_common, address, zip_city, zipcode } = this.state.treeSelected

    return(
      <div>
      <div><Nav handleLogOut={this.props.handleLogOut} username={this.props.username}/></div>
      <div style={{marginTop: '90px'}}>
      <h1>Search by Neighborhood!</h1>
      <Search updateNeighborhood={this.updateNeighborhood}/>
      {<Map
        google={this.props.google}
        zoom={14}
        center={this.state.center}
        style={{width: '30%', height: '60%', margin: '1% 0 0 15%'}}
        yesIWantToUseGoogleMapApiInternals={true}
        >
        {theTrees}
        <InfoWindow
        marker={this.state.treeMarker}
        visible={this.state.clicked}>
          <div>
          <h2 style={{fontFamily: 'Red Hat Text'}}>
            {normalizeString(spc_common)} at {normalizeString(address)} {normalizeString(zip_city)}, NY {normalizeString(zipcode)}
            </h2>
          </div>
        </InfoWindow>
        { this.state.clicked ?
          <TreeCard
          tree={this.state.treeSelected}
          normalizeString={normalizeString}
          addTreeToDB={addTreeToDB}
          luv={this.state.treeSelectedLuvd}
          luvd={this.luvd}/>
          : null }
      </Map>}
      </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(TreeContainer)
