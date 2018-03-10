import React from 'react'

import Resource from '../models/resource'
import Cities from './Cities'

const RegionsList = Resource('regions')


class Regions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regions: [],
      selected_id: 0,
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    RegionsList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ regions: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  showChildren = (parent) => {
    this.setState({ selected_id: parent.id })
  }

  render() {
    return (


            <tbody>
            {this.state.regions.map((region, index) => (
              (region.country_id === this.props.parent) ?
                <td><button className="achievement" onClick={event => {
                  this.showChildren(region);
                }} >{region.name}</button>
                  <Cities parent={this.state.selected_id} /></td> :
                <td> no cities </td>
            ))}
            </tbody>
    )
  }
}

export default Regions