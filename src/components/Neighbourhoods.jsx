import React from 'react'
import Resource from '../models/resource'
import Locations from './Locations'

const NeighbourhoodsList = Resource('cities', 'neighbourhoods')

class Neighbourhoods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      neighbourhood_id: 0,
      loading: false,
      errors: null,
      neighbourhoods: [],
      city_id: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city_id !== this.state.city_id){
      NeighbourhoodsList.findAllChildren(this.props.city_id)
        .then((result) => this.setState({ neighbourhoods: result.data, errors: null }))
        .catch((errors) => this.setState({ errors: errors }))
    }
  }

  loadChildren = (neighbourhood_id) => {
    if (this.state.loading) {
      this.setState({ loading: false })
      return
    }
    this.setState({neighbourhood_id: neighbourhood_id, loading: true})
  }

  listPresenter() {
    const list = this.state.neighbourhoods.map((neighbourhood) => {
      if (neighbourhood.id === this.state.neighbourhood_id) {
        return (
        <div>
          <button className="achievement neighbourhood" onClick={event => {this.loadChildren(neighbourhood.id)}}>
            {neighbourhood.name}
          </button>
          {this.state.loading && <Locations neighbourhood_id={this.state.neighbourhood_id}/>}
        </div>)
      } else {
          return (
          <div>
            <button className="achievement neighbourhood" onClick={event => {this.loadChildren(neighbourhood.id)}}>
              {neighbourhood.name}
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

export default Neighbourhoods