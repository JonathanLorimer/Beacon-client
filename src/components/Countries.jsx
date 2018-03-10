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
      selected_id: 0,
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    CountriesList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ countries: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  showChildren = (parent) => {
    this.setState({ selected_id: parent.id })
  }

  render() {
    return (


            <tbody>
              {this.state.countries.map((country, index) => (
                (country.continent_id === this.props.parent) ?                
                <td><button className="achievement" onClick ={event => {
                  this.showChildren(country);
                }} >{country.name}</button>
                <Regions parent={this.state.selected_id}/></td> :
                  <td> no regions </td>
                ))}
            </tbody>
    )
  }
}

export default Countries