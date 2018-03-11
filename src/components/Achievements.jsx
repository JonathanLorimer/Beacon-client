import React from 'react'
// import { Row, Col, PageHeader, Table } from 'react-bootstrap'
// import { Route, Switch, Link } from 'react-router-dom'

// Product details modal dialog
// import ProductDetails from './ProductDetails'
import Countries from './Countries'



// Client-side model
import Resource from '../models/resource'
const Continents = Resource('continents')


class Achievements extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      continents: [],
      selected_id: 0,
      errors: null
    }
  }

  componentWillMount() {
    Continents.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ continents: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  // That is the children
  showChildren = (that, parent) => {
    that.setState({ selected_id: parent.id })
  }

  render() {
    return (

        <tbody>
          {this.state.continents.map((continent) => (              
            <td><button name="this continent" className="achievement" onClick={event => {
              this.showChildren(this, continent);
            }}>{continent.name}</button>

            <Countries parent={this.state.selected_id} showChildren={this.showChildren}/></td>                  
          ))}
        </tbody>

    )
  }
}

export default Achievements