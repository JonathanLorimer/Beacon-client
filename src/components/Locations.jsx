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
      .then((result) => {
        this.setState({ locations: result.data, errors: null })
        this.props.getLocationsMarkers(result.data)
      })
      .catch((errors) => this.setState({ errors: errors }))
  }

  // Presenter maps html over array of locations
  listPresenter() {
    console.log(this.props.completedAchievements.locations)
    const list = this.state.locations.map((location) => {
      if (this.props.completedAchievements.locations.hasOwnProperty(location.id)){
        return (<div className="achievement location complete">{location.name}</div>)
      } else {
        return (<div className="achievement location">{location.name}</div>)
      }
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