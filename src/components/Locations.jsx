import React from 'react'
// Client-side model
import Resource from '../models/resource'

const LocationsList = Resource('neighbourhoods', 'locations')

class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      selected_id: 0,
      parent_id: 0,
      loading: false,
      errors: null
    }
  }

  componentWillMount() {
    LocationsList.findAllChildren(this.props.parent_id)
      .then((result) => this.setState({ locations: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  // loadChildren = (ids_array, parent_id) => {
  //   if (this.state.loading) {
  //     this.setState({ loading: false })
  //     return
  //   }
  //   this.setState({ selected_id: ids_array, parent_id: parent_id, loading: true })
  // }

  listPresenter() {
    const list = this.state.locations.map((location) => {
      if (location.neighbourhood_id === this.props.parent_id) {
        return (<div><button className="achievement location">{location.name}</button></div>)
      }
    })
    return list
  }

  render() {
    return (

      <div>
        <div>
          {this.listPresenter()}
        </div>
      </div>
    )
  }
}

export default Locations