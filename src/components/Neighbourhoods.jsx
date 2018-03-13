import React from 'react'
import Resource from '../models/resource'
import Locations from './Locations'

const NeighbourhoodsList = Resource('cities', 'neighbourhoods')
const LocationsList = Resource('neighbourhoods', 'locations')

class Neighbourhoods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      neighbourhoods: [],
      locations: [],
      selected_id: [],
      parent_id: 0,
      location_id: 0,
      city_id: 1,
      loading: false,
      errors: null
    }
  }

  componentWillMount() {
    console.log()
    NeighbourhoodsList.findAllChildren(this.props.city_id)
      .then((result) => this.setState({ neighbourhoods: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  loadChildren = (parent_id) => {
    if (this.state.loading) {
      this.setState({ loading: false })
      return
    }
    LocationsList.findAllChildren(parent_id)
      .then((result) => this.setState({ locations: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))

    this.setState({ parent_id: parent_id, loading: true })
  }

  listPresenter() {
    const list = this.props.city_array.map((neighbourhood) => {
      if (neighbourhood.id === this.state.parent_id) {
        return (<div><button className="achievement neighbourhood" onClick={event => {
          this.loadChildren(neighbourhood.id);
        }} >{neighbourhood.name}</button>{this.state.loading && <Locations locations={this.state.locations} parent_id={this.state.parent_id} />}</div>)
      } else {
          return (<div><button className="achievement neighbourhood" onClick={event => {
            this.loadChildren(neighbourhood.id);
          }} >{neighbourhood.name}</button></div>)
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

export default Neighbourhoods