import React from 'react'
import { Row, Col, PageHeader, Table } from 'react-bootstrap'
import { Route, Switch, Link } from 'react-router-dom'

// Product details modal dialog
import ProductDetails from './ProductDetails'
import Countries from './Countries'



// Client-side model
import Resource from '../models/resource'
const Continents = Resource('continents')


class Achievements extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      continents: [],
      selectedContinent: {},
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    Continents.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ continents: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    return (
      <Row>
        <Col xs={12}>

          <PageHeader>
            continents
          </PageHeader>

          <Table>
            <thead>
              <tr>
                <th>Continents</th>
                <th>Countries</th>
                <th>Regions</th>
                <th>Cities</th>
                <th>Neighbourhoods</th>
                <th>Districts</th>
                <th>Locations</th>
              </tr>
            </thead>

            <tbody>
              {this.state.continents.map((continent, index) => (
                <tr key={index}>
                  <td>{continent.name}</td>
                  <td><Countries /></td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* If the URL has an id at the end, we show the details dialog */}
          <Switch>
            <Route path="/continents/:id" component={ProductDetails} />
          </Switch>

        </Col>
      </Row>
    )
  }
}

export default Achievements