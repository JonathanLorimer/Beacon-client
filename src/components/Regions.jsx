import React from 'react'

import Resource from '../models/resource'
import Cities from './Cities'

const RegionsList = Resource('regions')


class Regions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regions: [],
      selectedRegion: {},
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    RegionsList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ regions: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    return (


            <tbody>
              {this.state.regions.map((region, index) => (
                <tr key={index}>

                  <td>{region.name}</td>
                  <td><Cities /></td>
                </tr>
              ))}
            </tbody>
    )
  }
}

export default Regions