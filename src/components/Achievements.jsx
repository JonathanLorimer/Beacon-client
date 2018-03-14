import React from 'react'
import Resource from '../models/resource'
import Regions from './Regions'
import Neighbourhoods from './Neighbourhoods'


class Achievements extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     city_id: 0
   }
 }

getCityId = (city_id) => {
  console.log(city_id, " city id in Achievements")
  this.setState({city_id: city_id})
}

 render() {
   return (
    <div>
      <div style={{float: 'left'}}>
        <Regions getCityId={this.getCityId}/>
      </div>
      <div style={{float: 'right'}}>
        <Neighbourhoods city_id={this.state.city_id}/>
      </div>
    </div>)
 }
}

export default Achievements