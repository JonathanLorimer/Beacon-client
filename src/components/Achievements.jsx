import React from 'react'
import Regions from './Regions'
import Neighbourhoods from './Neighbourhoods'
import MapComp from './MapComp'

// this.props.completedAchievements
class Achievements extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     city_id: 0,
     mapCenter: { lat: 46.011044999999996, lng: -89.59364 },
     outline: false,
     markerList: [],
     completedMarkerList: [],
     bounds: [],
     mouseOverComplete: [],
     mouseOverIncomplete: []
   }
 }

  getCityId = (city_id) => {
    this.setState({city_id: city_id})
  }

  getLocationsMarkers = (markers) => {
    // console.log("i am in get locations markers")
    let newMarkerList = []
    let newCompletedMarkerList = []
    let completedMarkerList = []
    // lets find which achievements have been completed

    for (let object of markers) {
      for (let level_of_ach in this.props.completedAchievements) {
        for (let object_to_compare of this.props.completedAchievements[level_of_ach]) {
          if (object.name === object_to_compare.name) {
            newCompletedMarkerList.push(object)
          }
        }
      }
    }

    for (let marker of markers) {
      newMarkerList.push({ lat: marker.latitude, lng: marker.longitude })
    }
    for (let marker of newCompletedMarkerList) {
      completedMarkerList.push({ lat: marker.latitude, lng: marker.longitude })
    }
    this.setState({ markerList: newMarkerList, completedMarkerList: completedMarkerList })
  }

  getMarkers = (markers) => {
    let newMarkerList = []
    let newCompletedMarkerList = []
    let completedMarkerList = []
    // lets find which achievements have been completed

    for ( let object of markers ) {
      for ( let level_of_ach in this.props.completedAchievements ) {
        for (let object_to_compare of this.props.completedAchievements[level_of_ach] ) {
          if ( object.name === object_to_compare.name ){
            newCompletedMarkerList.push(object)
          }
        }
      }     
    }

    for (let marker of markers) {
      let markerLat = (marker.least_lat + marker.greatest_lat) / 2
      let markerLng = (marker.least_lng + marker.greatest_lng) / 2
      newMarkerList.push({ lat: markerLat, lng: markerLng })
    }

    for (let marker of newCompletedMarkerList) {
      let markerLat = (marker.least_lat + marker.greatest_lat) / 2
      let markerLng = (marker.least_lng + marker.greatest_lng) / 2
      completedMarkerList.push({ lat: markerLat, lng: markerLng })
    }

    // console.log(newMarkerList, completedMarkerList)
    this.setState({ markerList: newMarkerList, completedMarkerList: completedMarkerList})
  }

  mapCenter = (lat, lng, outline) => {
    // console.log(outline)
    // south - west, north - east
    let bounds = [ [outline[3].lat, outline[3].lng], [outline[1].lat, outline[1].lng] ]
    this.setState({mapCenter: {lat: lat, lng: lng}, outline: outline, bounds: bounds})
  }

  mouseOverCompleteLocation = (place) => {
    let newMouseOverComplete = []
    newMouseOverComplete.push({ lat: place.latitude, lng: place.longitude })
    this.setState({ mouseOverComplete: newMouseOverComplete, mouseOverIncomplete: []})
  }

  mouseOverIncompleteLocation = (place) => {
    let newMouseOverIncomplete = []
    newMouseOverIncomplete.push({ lat: place.latitude, lng: place.longitude })
    this.setState({ mouseOverComplete: [], mouseOverIncomplete: newMouseOverIncomplete })
  }

  // mouseOverComplete = (marker) => {
  //   let newMouseOverComplete = []
  //   for (let marker of markers) {
  //     let markerLat = (marker.least_lat + marker.greatest_lat) / 2
  //     let markerLng = (marker.least_lng + marker.greatest_lng) / 2
  //     newMouseOverComplete.push({ lat: markerLat, lng: markerLng })
  //   }
  //   this.setState({ mouseOverComplete: newMouseOverComplete, mouseOverIncomplete: [] })
  // }

  // mouseOverIncomplete = (marker) => {
  //   let newMouseOverIncomplete = []
  //   for (let marker of markers) {
  //     let markerLat = (marker.least_lat + marker.greatest_lat) / 2
  //     let markerLng = (marker.least_lng + marker.greatest_lng) / 2
  //     newMouseOverIncomplete.push({ lat: markerLat, lng: markerLng })
  //   }
  //   this.setState({ mouseOverComplete: [], mouseOverIncomplete: newMouseOverIncomplete })
  // }

  mouseOut = () => {
    this.setState({ mouseOverComplete: [], mouseOverIncomplete: [] })
  }

 render() {
   return (
    <div>
      <div className="container regioncontainer">
        <Regions 
          getCityId={this.getCityId} 
          getMapCenter={this.mapCenter} 
          getMarkers={this.getMarkers} 
          completedAchievements={this.props.completedAchievements}
        />
      </div>
      <div className="container neighbourhoodcontainer">
        <Neighbourhoods 
          city_id={this.state.city_id} 
          getMapCenter={this.mapCenter} 
          getMarkers={this.getMarkers} 
          getLocationsMarkers={this.getLocationsMarkers} 
          completedAchievements={this.props.completedAchievements}
          mouseOverCompleteLocation={this.mouseOverCompleteLocation}
          mouseOverIncompleteLocation={this.mouseOverIncompleteLocation}
          mouseOverComplete={this.state.mouseOverComplete}
          mouseOverIncomplete={this.state.mouseOverIncomplete}
          mouseOut={this.mouseOut}
        />
      </div>
      <div className="googleMap">
        <MapComp 
          center={this.state.mapCenter} 
          outline={this.state.outline} 
          markerList={this.state.markerList} 
          completedMarkerList={this.state.completedMarkerList} 
          bounds={this.state.bounds}
          mouseOverCompleteLocation={this.state.mouseOverComplete}
          mouseOverIncompleteLocation={this.state.mouseOverIncomplete}
          mouseOverComplete={this.state.mouseOverComplete}
          mouseOverIncomplete={this.state.mouseOverIncomplete}
        />
      </div>
    </div>)
  }
}

export default Achievements

