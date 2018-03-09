import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const TopNav = (props) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>
          The app!
        </Link>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav>
      <NavItem eventKey={1}>
        <Link to="/achievements">Achievements</Link>
      </NavItem>

      <NavItem eventKey={2}>
        <Link to="/diary">Diary</Link>
      </NavItem>
    </Nav>

  </Navbar>
)

export default TopNav