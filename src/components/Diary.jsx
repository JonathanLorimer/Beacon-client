import React from 'react'
// import { Row, Col, PageHeader, Table } from 'react-bootstrap'
// import { Route, Redirect, Switch, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

// Client-side model
import Resource from '../models/resource'
const Locations = Resource('users', 'diaries')

class Diary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      errors: null

    }
  }

  componentWillMount() {
    // user id 1
     Locations.findAllChildren(1)
     .then((result) => {

       let newLocations = result.data[0]
       let newLocationsVisited = result.data[1]

       for (let location of newLocations){
         for (let visitedLocation of newLocationsVisited){
           if(location.name === visitedLocation.name){
             location.created_at = visitedLocation.visited_at
           }
         }
       }

       this.setState({ locations: newLocations, }) })
     .catch((errors) => this.setState({ errors: errors }))
  }

  orderByLocation = () => {
    this.listPresenter('name')
  }

  orderByType = () => {
    this.listPresenter('category')
  }

  orderByDate = () => {
    this.listPresenter('created_at')
  }

  listPresenter(sortBy) {
    if(sortBy === "created_at"){
      let locationsToSort = this.state.locations
      let sorting = locationsToSort.slice(0);
      sorting.sort(function (a, b) {
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();
        return x > y ? -1 : x < y ? 1 : 0;
      });

      this.setState({ locations: sorting })
    }

      else if(sortBy){
      let locationsToSort = this.state.locations
      let sorting = locationsToSort.slice(0);
      sorting.sort(function (a, b) {
        let x = a[sortBy].toLowerCase();
        let y = b[sortBy].toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });

      this.setState({ locations: sorting })
    }

    const list = this.state.locations.map((location) => {
        return (
          <tr>
            <td>{location.name}</td>
            <td>{location.created_at.slice(0,10)}</td>
            <td>{location.category}</td>
          </tr>)
    })
    return list
  }

  render() {
    if(this.props.auth && this.props.currentUser.data !=="failed"){
      return (
  <div>
      <div>
        <p className="diary byorder">order by:</p>
        <button className="diary diaryButton byLocation" onClick={() => this.orderByLocation()}>Location Name</button>
        <button className="diary diaryButton byType" onClick={() => this.orderByType()}>Type </button>
        <button className="diary diaryButton byDate" onClick={() => this.orderByDate()}>Date Completed </button>
      </div>
      <table className="diary entry">
        <tr>
          <th>Location</th>
          <th>Date Achieved</th>
          <th>Type</th>
        </tr>

        {this.listPresenter()}

      </table>
    </div> )
    } else {
       return <Redirect to='/userlogin'/>
    }
  }
}

export default Diary