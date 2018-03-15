import React from 'react'
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
  console.log('city id in achievements', city_id)
  this.setState({city_id: city_id})
}

 render() {
   return (
    <div>
      <div className="container regioncontainer">
        <Regions getCityId={this.getCityId}/>
      </div>
      <div className="container neighbourhoodcontainer">
        <Neighbourhoods city_id={this.state.city_id}/>
      </div>
    </div>)
 }
}

export default Achievements