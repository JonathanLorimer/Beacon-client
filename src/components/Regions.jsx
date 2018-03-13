import React from 'react'
import Resource from '../models/resource'
import Cities from './Cities'
const $ = require('jquery')

const RegionsList = Resource('regions')
const CitiesList = Resource('regions', 'cities')

class Regions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regions: [],
      selected_id: [],
      parent_id: 0,
      loading: false,
      errors: null,
      cities: []
    }
  }

  componentWillMount() {
    RegionsList.findAll() 
      .then((result) => this.setState({ regions: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  loadChildren = (ids_array, parent_id) => {
    if(this.state.loading){
      this.setState({ loading: false })
      return
    }
    CitiesList.findAllChildren(this.state.parent_id)
      .then((result) => this.setState({ cities: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))

    this.setState({ selected_id: ids_array, parent_id: parent_id, loading: true })    
  }

  listPresenter(){
    const list = this.state.regions.map((region) => {
      if (region.id === this.state.parent_id) {

        return (<div className={`region_id_${region.id}`}><button className="achievement region" onClick={event => {
          this.loadChildren(region.cities_ids, region.id);
        }} >{region.name}</button>{this.state.loading && <Cities cities={this.state.selected_id} parent_id={this.state.parent_id}/>}</div>)

      } else {

        return (<div className={`region_id_${region.id}`}><button className="achievement region" onClick={event => {
          this.loadChildren(region.cities_ids, region.id);
        }} >{region.name}</button></div>)

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
        <div>
          neighbourhoods
        </div>
        {this.state.loading && <Cities cities={this.state.selected_id} parent_id={this.state.parent_id}/>}
      </div>
    )
  }
}

export default Regions