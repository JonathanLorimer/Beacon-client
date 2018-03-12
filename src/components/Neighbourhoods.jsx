import React from 'react'
import Resource from '../models/resource'
import Locations from './Locations'

const neighbourhoodsList = Resource('cities', 'neighbourhoods')

class Neighbourhoods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      neighbourhoods: [],
      selected_id: [],
      parent_id: 0,
      loading: false,
      errors: null
    }
  }

  componentWillMount() {
    neighbourhoodsList.findAllChildren(this.props.parent_id)
      .then((result) => this.setState({ neighbourhoods: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  loadChildren = (ids_array, parent_id) => {
    if (this.state.loading) {
      this.setState({ loading: false })
      return
    }
    this.setState({ selected_id: ids_array, parent_id: parent_id, loading: true })
  }

  listPresenter() {
    const list = this.state.neighbourhoods.map((neighbourhood) => {
      if (neighbourhood.city_id === this.props.parent_id) {
        return (<td><button className="achievement neighbourhood" onClick={event => {
          this.loadChildren(neighbourhood.locations_ids, neighbourhood.id);
        }} >{neighbourhood.name}</button></td>)
      }
    })
    return list
  }

  render() {
    return (

      <tbody>
        <div>
          {this.listPresenter()}
        </div>
        {this.state.loading && <Locations locations={this.state.selected_id} parent_id={this.state.parent_id} />}
      </tbody>
    )
  }
}

export default Neighbourhoods