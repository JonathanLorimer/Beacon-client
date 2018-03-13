import React from 'react'
import Resource from '../models/resource'
import Neighbouroods from './Neighbourhoods'

const citiesList = Resource('regions', 'cities')

class Cities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      selected_id: [],
      parent_id: 0,
      loading: false,
      errors: null
    }
  }

  componentWillMount() {
    citiesList.findAllChildren(this.props.parent_id)
      .then((result) => this.setState({ cities: result.data, errors: null }))
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
    const list = this.state.cities.map((city) => {
      if (city.region_id === this.props.parent_id) {
        return (<div><button className="achievement city" onClick={event => {
          this.loadChildren(city.neighbourhoods_ids, city.id);
        }} >{city.name}</button></div>)
      }
    })
    return list
  }

  render() {
    return (

      <div>
        <div>
        </div>
        {this.state.loading && <Neighbouroods neighbouroods={this.state.selected_id} parent_id={this.state.parent_id} />}
      </div>
    )
  }
}

export default Cities