import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class TopNav extends Component {
  constructor(props){
   super(props)
  }

render(){

    return (
      
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
           <Link to='/'>Beacon</Link>
            {Coordinates.create({latitude: "43.6425662", longitude: "-79.3892455" })}
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

      </Navbar>
    )
  }
}
export default TopNav

