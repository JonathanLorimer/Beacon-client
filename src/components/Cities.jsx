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
      selected_id: 0,
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    CitiesList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ cities: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  showChildren = (parent) => {
    this.setState({ selected_id: parent.id })
  }

  render() {
    return (


            <tbody>
              {this.state.cities.map((city, index) => (
                (city.region_id === this.props.parent) ?
                  <td><button className="achievement" onClick={event => {
                    this.showChildren(city);
                  }} >{city.name}</button>
                    <Neighbourhoods parent={this.state.selected_id} /></td> :
                  <td> no neighbourhoods </td>
              ))}
            </tbody>
    )
  }
}

export default Cities