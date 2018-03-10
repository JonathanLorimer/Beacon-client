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
      selected_id: 0,
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    DistrictsList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ districts: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  showChildren = (parent) => {
    this.setState({ selected_id: parent.id })
  }

  render() {
    return (


            <tbody>
              {this.state.districts.map((district, index) => (
                (district.neighbourhood_id === this.props.parent) ?
                  <td><button className="achievement" onClick={event => {
                    this.showChildren(district);
                  }} >{district.name}</button>
                    <Locations parent={this.state.selected_id} /></td> :
                  <td> no Locations </td>
              ))}
            </tbody>
    )
  }
}

export default Districts