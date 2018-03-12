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
      errors: null
    }
  }

  componentWillMount() {
    CountriesList.findAll()
      .then((result) => this.setState({ countries: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }


  render() {
    return (

      <tbody>
        {this.state.countries.map((country) => (
          (country.continent_id === this.props.parent) &&                
          <td><button className="achievement" onClick ={event => {
            this.props.showChildren(this, country);
          }} >{country.name}</button>

          <Regions parent={this.state.selected_id} showChildren={this.props.showChildren}/></td>
          ))}
      </tbody>
    )
  }
}

export default Countries