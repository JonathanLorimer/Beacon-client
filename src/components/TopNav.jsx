import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Resource from '../models/resource'
const Coordinates = Resource('coordinates')

class TopNav extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: "",
      errors: null
    }
  }

  handleSubmit = data => {
    if (isNaN(this.state.latitude) || isNaN(this.state.longitude)) {
      this.setState({ status: "Invalid Coordinates" })
    }
    else {
      Coordinates.create({ latitude: this.state.latitude, longitude: this.state.longitude })
        .then((result) => {
          this.setState({ status: result.data.data, errors: null })
        })
        .catch((errors) => this.setState({ errors: errors }))      
    }
  }

render(){

    return (
      
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
           <Link to='/'>Beacon</Link>

          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem eventKey={1}>
            {(this.props.auth && this.props.currentUser.data !=="failed") ? (<Link to="/userlogin" onClick={this.props.onLogout}>Logout</Link>) :( <Link to="/userlogin">User Login</Link>)}
          </NavItem>

          <NavItem eventKey={2}>
            <Link to="/achievements">Achievements</Link>
          </NavItem>

          <NavItem eventKey={3}>
            <Link to="/diary">Diary</Link>
          </NavItem>
        </Nav>

          <p> {this.state.status} </p>
          <div class="input-coord">
            <input type="text" placeholder="latitude" name="latitude" onChange={event => {
              this.setState({ latitude: event.target.value })
            }} />
          <input type="text" placeholder="longitude" name="longitude" onChange={event => {
              this.setState({ longitude: event.target.value })
            }} />
            <input type="submit" value="send" onClick={event => {
              console.log(this.state.latitude)
              console.log(this.state.longitude)
              this.handleSubmit()
            }} />
          </div>


      </Navbar>
    )
  }
}
export default TopNav

// Coordinates.create({ latitude: "51.07545", longitude: "-113.95276" })
// Coordinates.create({ latitude: "43.6425662", longitude: "-79.3892455" })
// Coordinates.create({ latitude: "51.07545", longitude: "-113.95276" })
// Coordinates.create({ latitude: "43.6425662", longitude: "-79.3892455" })