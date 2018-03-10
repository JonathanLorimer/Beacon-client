import React from 'react'


// Client-side model
import Resource from '../models/resource'


const LocationsList = Resource('locations')


class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      selectedLocations: {},
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    LocationsList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ locations: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    return (

            <tbody>
              {this.state.locations.map((location, index) => (
                (location.district_id === this.props.parent) && <td><button className="achievement">{location.name}</button></td>
              ))}           
            </tbody>
    )
  }
}

export default Locations