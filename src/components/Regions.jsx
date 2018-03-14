import React from 'react'
import Resource from '../models/resource'
import Cities from './Cities'
import { Route, Redirect, Switch, Link } from 'react-router-dom'
const RegionsList = Resource('regions')
const CitiesList = Resource('regions', 'cities')

class Regions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regions: [],
      region_id: 0,
      loading: false,
      errors: null
    }
  }

  componentWillMount() {

    RegionsList.findAll()
      .then((result) => this.setState({ regions: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  loadChildren = (region_id) => {
    if(this.state.loading){
      this.setState({ loading: false })
      return
    }
    this.setState({region_id: region_id, loading: true })    
  }

  listPresenter(){
    const list = this.state.regions.map((region) => {
      if (region.id === this.state.region_id) {
        return (
        <div className={`region_id_${region.id}`}>
          <button className="achievement region" onClick={event => {this.loadChildren(region.id)}}>
            {region.name}
          </button>
          {this.state.loading && <Cities getCityId={this.props.getCityId} region_id={this.state.region_id}/>}
        </div>)
      } else {
        return (
        <div className={`region_id_${region.id}`}>
          <button className="achievement region" onClick={event => {this.loadChildren( region.id)}}>
            {region.name}
          </button>
        </div>)
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

export default Regions