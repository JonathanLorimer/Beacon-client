import React from 'react'
// import { Row, Col, PageHeader, Table } from 'react-bootstrap'
// import { Route, Switch, Link } from 'react-router-dom'


// Client-side model
import Resource from '../models/resource'
import Regions from './Regions'
import Neighbourhoods from './Neighbourhoods'


class Achievements extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     city_array: []
   }
 }

getCityarray = (array) => {
  this.setState({city_array: array})
}

 render() {
   return (<div>
         <div style={{float: 'left'}}>
           <Regions getCityarray={this.getCityarray}/>
         </div>

         <div style={{float: 'right'}}>
           <Neighbourhoods city_array={this.state.city_array}/>
         </div>
       </div>)
 }
}

export default Achievements