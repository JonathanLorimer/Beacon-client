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
     mouseOverIncomplete: [],
     reRenderCities: false,
   }
 }

  getAverageCoord = (markers) => {
    let newMarkerList = []
    for (let marker of markers) {
      let markerLat = (marker.least_lat + marker.greatest_lat) / 2
      let markerLng = (marker.least_lng + marker.greatest_lng) / 2
      newMarkerList.push({ lat: markerLat, lng: markerLng })
    }
    return newMarkerList
  }

  getCityId = (city_id) => {
    this.setState({city_id: city_id})
  }

  renderCityMarker = () => {
    this.setState({reRenderCities: true})
    this.setState({reRenderCities: false})
  }

  getLocationsMarkers = (markers) => {

    let newMarkerList = []
    let newCompletedMarkerList = []
    let completedMarkerList = []
    // lets find which achievements have been completed

    for (let object of markers) {
      if (this.props.completedAchievements.locations.hasOwnProperty(object.id)) {
        newCompletedMarkerList.push(object)
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

    let newCompletedMarkerList = []
    // lets find which achievements have been completed

    for (let object of markers) {
      if (this.props.completedAchievements.neighbourhoods.hasOwnProperty(object.id) && object.city_id) {
        newCompletedMarkerList.push(object)
      }
    }
    for (let object of markers) {
      if (this.props.completedAchievements.cities.hasOwnProperty(object.id) && object.region_id) {
        newCompletedMarkerList.push(object)
      }
    }
    for (let object of markers) {
      if (this.props.completedAchievements.regions.hasOwnProperty(object.id) && object.country_id) {
        newCompletedMarkerList.push(object)
      }
    }

    let newMarkerList = this.getAverageCoord(markers)
    let completedMarkerList = this.getAverageCoord(newCompletedMarkerList)
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

  mouseOverComplete = (marker) => {
    console.log('hello')
    let newMouseOverComplete = []
    let markerLat = (marker.least_lat + marker.greatest_lat) / 2
    let markerLng = (marker.least_lng + marker.greatest_lng) / 2
    newMouseOverComplete.push({ lat: markerLat, lng: markerLng })
    this.setState({ mouseOverComplete: newMouseOverComplete, mouseOverIncomplete: [] })
  }

  mouseOverIncomplete = (marker) => {
    console.log('hello')
    let newMouseOverIncomplete = []
    let markerLat = (marker.least_lat + marker.greatest_lat) / 2
    let markerLng = (marker.least_lng + marker.greatest_lng) / 2
    newMouseOverIncomplete.push({ lat: markerLat, lng: markerLng })
    this.setState({ mouseOverComplete: [], mouseOverIncomplete: newMouseOverIncomplete })
  }

  mouseOut = () => {
    console.log('mouse out')
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
          reRenderCities={this.state.reRenderCities}
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
          mouseOverComplete={this.mouseOverComplete}
          mouseOverIncomplete={this.mouseOverIncomplete}
          mouseOut={this.mouseOut}
          reRenderCities={this.renderCityMarker}
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

