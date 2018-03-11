import React from 'react'


// Client-side model
import Resource from '../models/resource'
import Locations from './Locations'
const DistrictsList = Resource('neighbourhoods', 'districts')


class Districts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      districts: [],
      selected_id: [],
      parent_id: 0,
      loading: false,
      errors: null    
    }
  }

  componentWillMount() {
    DistrictsList.findAllChildren(this.props.parent_id)
      .then((result) => this.setState({ districts: result.data, errors: null }))
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
    const list = this.state.districts.map((district) => {
      if (district.neighbourhood_id === this.props.parent_id) {
        return (<td><button className="achievement district" onClick={event => {
          this.loadChildren(district.locations_ids, district.id);
        }} >{district.name}</button></td>)
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

export default Districts