import React from 'react'


// Client-side model
import Resource from '../models/resource'
import Locations from './Locations'
const DistrictsList = Resource('districts')


class Districts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      districts: [],
      selectedDistrict: {},
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    DistrictsList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ districts: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    return (


            <tbody>
              {this.state.districts.map((district, index) => (
                <tr key={index}>
                  <td>{district.name}</td>
                  <td><Locations /></td>
                </tr>
              ))}
            </tbody>
    )
  }
}

export default Districts