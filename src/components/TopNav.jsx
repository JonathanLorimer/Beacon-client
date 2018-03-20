import React , { Component } from 'react'
import { Link } from 'react-router-dom'
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

render(){
  return (
    <div className="input-coord">
      <span id="beacon" className="topnav element"><Link to='/'>Beacon</Link></span>
      <span className="topnav element">
        {(this.props.auth && this.props.currentUser.data !=="failed") ? (<Link to="/userlogin" onClick={this.props.onLogout}>Logout</Link>) :( <Link to="/userlogin">User Login</Link>)}
      </span>
      <span className="topnav element"><Link to="/achievements">Achievements</Link></span>
      <span className="topnav element"><Link to="/diary">Diary</Link></span>
    </div>)
  }
}
export default TopNav

// Coordinates.create({ latitude: "51.07545", longitude: "-113.95276" })
// Coordinates.create({ latitude: "43.6425662", longitude: "-79.3892455" })
// Coordinates.create({ latitude: "51.07545", longitude: "-113.95276" })
// Coordinates.create({ latitude: "43.6425662", longitude: "-79.3892455" })