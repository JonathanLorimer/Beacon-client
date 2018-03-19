import React from 'react'
// import { Row, Col, PageHeader, Table } from 'react-bootstrap'
import { Route, Redirect, Switch, Link } from 'react-router-dom'

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
      .then((result) => { this.setState({ locations: result.data }) })
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
    if(sortBy){
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
          <tr className="diary entry">
            <td>{location.name}</td>
            <td>{location.created_at}</td>
            <td>{location.category}</td>
          </tr>)
    })
    return list
  }

  render() {
    if(this.props.auth && this.props.currentUser.data !=="failed"){
      return (
      <table>
        <div>
          order by: 
          <button onClick={() => this.orderByLocation()}>Location Name</button> 
          <button onClick={() => this.orderByType()}>Type </button>
          <button onClick={() => this.orderByDate()}>Date Completed </button>
        </div>
        <tr>
          <th>Location</th>
          <th>Date Achieved</th>
          <th>Type</th>
        </tr>
        {this.listPresenter()}
      </table>)
    } else {
       return <Redirect to='/userlogin'/>
    }
  }
}

export default Diary