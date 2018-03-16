import React from 'react'
import Regions from './Regions'
import Neighbourhoods from './Neighbourhoods'
import MapComp from './MapComp'


class Achievements extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     city_id: 0,
     mapCenter: { lat: 46.011044999999996, lng: -89.59364 },
     outline: false,
     markerList: [],
     bounds: []
   }
 }

  getCityId = (city_id) => {
    this.setState({city_id: city_id})
  }

  getLocationsMarkers = (markers) => {
    let newMarkerList = []
    for (let marker of markers) {
      newMarkerList.push({ lat: marker.latitude, lng: marker.longitude })
    }
    this.setState({ markerList: newMarkerList })
  }

  getMarkers = (markers) => {
    let newMarkerList = []
    for (let marker of markers) {
      let markerLat = (marker.least_lat + marker.greatest_lat) / 2
      let markerLng = (marker.least_lng + marker.greatest_lng) / 2
      newMarkerList.push({ lat: markerLat, lng: markerLng })
    }
    this.setState({markerList: newMarkerList})
  }

  mapCenter = (lat, lng, outline) => {
    console.log(outline)
    // south - west, north - east
    let bounds = [ [outline[3].lat, outline[3].lat], [outline[1].lat, outline[1].lng] ]

    this.setState({mapCenter: {lat: lat, lng: lng}, outline: outline, bounds: bounds})
  }

 render() {
   return (
    <div>
      <div className="container regioncontainer">
        <Regions getCityId={this.getCityId} getMapCenter={this.mapCenter} getMarkers={this.getMarkers}/>
      </div>
      <div className="container neighbourhoodcontainer">
         <Neighbourhoods city_id={this.state.city_id} getMapCenter={this.mapCenter} getMarkers={this.getMarkers} getLocationsMarkers={this.getLocationsMarkers}/>
      </div>
      <div className="googleMap">
         <MapComp center={this.state.mapCenter} outline={this.state.outline} markerList={this.state.markerList} bounds={this.state.bounds}/>
      </div>
    </div>)
  }
}

export default Achievements

