import React from 'react'
// Client-side model
import Resource from '../models/resource'

const LocationsList = Resource('neighbourhoods', 'locations')

class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      errors: null
    }
  }

  componentWillMount() {
    LocationsList.findAllChildren(this.props.neighbourhood_id)
      .then((result) => this.setState({ locations: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  // Presenter maps html over array of locations
  listPresenter() {
    const list = this.state.locations.map((location) => {
        return (<div><button className="achievement location">{location.name}</button></div>)
    })
    return list
  }

  render() {
    return (
      <div>
        {this.listPresenter()}
      </div>
    )
  }
}

export default Locations