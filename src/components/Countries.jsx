import React from 'react'


// Client-side model
import Resource from '../models/resource'
import Regions from './Regions'

const CountriesList = Resource('countries')


class Countries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      selectedCountry: {},
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    CountriesList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ countries: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    return (


            <tbody>
              {this.state.countries.map((country, index) => (
                <tr key={index}>

                  <td>{country.name}</td>
                   <td><Regions /></td>
                </tr>
              ))}
            </tbody>
    )
  }
}

export default Countries