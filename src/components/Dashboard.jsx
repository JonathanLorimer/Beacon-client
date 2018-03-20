import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <div className="background"></div>
        <div>{(this.props.auth && this.props.currentUser.data !=="failed") ? (<Link to="/userlogin" onClick={this.props.onLogout}>Logout</Link>) :( <Link to="/userlogin">User Login</Link>)}</div>
      </div>)
  }
}

export default Dashboard