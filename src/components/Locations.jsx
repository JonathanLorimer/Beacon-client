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
                <tr key={index}>

                  <td>{location.name}</td>

                </tr>
              ))}
            </tbody>
    )
  }
}

export default Locations