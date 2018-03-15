import React from 'react'
import Resource from '../models/resource'
import Regions from './Regions'
import Neighbourhoods from './Neighbourhoods'
import MapComp from './MapComp'


class Achievements extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     city_id: 0,
     mapCenter: { lat: 46.011044999999996, lng: -89.59364 }
   }
 }

  getCityId = (city_id) => {
    this.setState({city_id: city_id})
  }

  mapCenter = (lat, lng) => {
    this.setState({mapCenter: {lat: lat, lng: lng}})
  }

 render() {
   return (
    <div>
      <div style={{float: 'left'}}>
        <Regions getCityId={this.getCityId} getMapCenter={this.mapCenter}/>
      </div>
      <div style={{float: 'right'}}>
        <Neighbourhoods city_id={this.state.city_id}/>
      </div>
      <div>
         <MapComp center={this.state.mapCenter}/>
      </div>
    </div>)
  }
}

export default Achievements