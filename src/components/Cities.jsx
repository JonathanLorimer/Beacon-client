import React from 'react'
import Resource from '../models/resource'
import Neighbouroods from './Neighbourhoods'

const CitiesList = Resource('regions', 'cities')
const NeighbourhoodsList = Resource('cities', 'neighbourhoods')

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
    CitiesList.findAllChildren(this.props.parent_id)
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
          // this.loadChildren(city.neighbourhoods_ids, city.id);
          NeighbourhoodsList.findAllChildren(city.id)
            .then((result) => {console.log(result.data)
               this.props.getCityarray(result.data)})
            .catch((errors) => this.setState({ errors: errors }))
        }} >{city.name}</button></div>)
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

export default Cities