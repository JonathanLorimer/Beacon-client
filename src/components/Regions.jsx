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
      errors: null
    }
  }

  componentWillMount() {
    RegionsList.findAll() 
      .then((result) => this.setState({ regions: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    return (

      <tbody>
      {this.state.regions.map((region) => (
        (region.country_id === this.props.parent) &&
          <td><button className="achievement" onClick={event => {
            this.props.showChildren(this, region);
          }} >{region.name}</button>

          <Cities parent={this.state.selected_id} showChildren={this.props.showChildren}/></td>
      ))}
      </tbody>
    )
  }
}

export default Regions