import React from 'react'


// Client-side model
import Resource from '../models/resource'
import Neighbourhoods from './Neighbourhoods'
const CitiesList = Resource('cities')


class Cities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      selectedCity: {},
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    CitiesList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ cities: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    return (


            <tbody>
              {this.state.cities.map((city, index) => (
                <tr key={index}>
                  <td>{city.name}</td>
                  <td><Neighbourhoods/></td>
                </tr>
              ))}
            </tbody>
    )
  }
}

export default Cities