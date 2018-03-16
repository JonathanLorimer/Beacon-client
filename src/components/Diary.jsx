import React from 'react'
import { Row, Col, PageHeader, Table } from 'react-bootstrap'
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
    Locations.findAllChildren(1)
      .then((result) => {console.log(result.data); this.setState({ locations: result.data })})
      .catch((errors) => this.setState({ errors: errors }))
  }

  listPresenter() {
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