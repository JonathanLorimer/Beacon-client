import React from 'react'
import Resource from '../models/resource'

const CitiesList = Resource('regions', 'cities')

class Cities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      loading: false,
      errors: null
    }
  }

  componentWillMount() {
      CitiesList.findAllChildren(this.props.region_id)
        .then((result) => {
          this.setState({ cities: result.data, errors: null })
          this.props.getCitiesMarker(result.data)
        })
        .catch((errors) => this.setState({ errors: errors }))
  }

  listPresenter() {
    const list = this.state.cities.map((city) => {
        return (
        <div>
          <button className="achievement city" onClick={event => {this.props.getCityId(city.id)}}>
          {city.name}
          </button>
        </div>)
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