import React from 'react'
import Resource from '../models/resource'
import Cities from './Cities'
import { Route, Redirect, Switch, Link } from 'react-router-dom'
const RegionsList = Resource('regions')

class Regions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regions: [],
      selected_id: [],
      parent_id: 0,
      loading: false,
      errors: null
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
      this.setState({ selected_id: ids_array, parent_id: parent_id, loading: true })
  }

  listPresenter(){
    const list = this.state.regions.map((region) => {
      if (region.id === 1) {
        return (<td><button className="achievement region" onClick={event => {
          this.loadChildren(region.cities_ids, region.id);
        }} >{region.name}</button></td>)
      }
    })
    return list
  }

  render() {
    if(this.props.auth && this.props.currentUser.data!=="failed"){
      return (

        <tbody>
          <div>
            {this.listPresenter()}
          </div>
          {this.state.loading && <Cities cities={this.state.selected_id} parent_id={this.state.parent_id}/>}
        </tbody>
      )
    } else {
       return <Redirect to='/userlogin'/>
    }
  }
}

export default Regions