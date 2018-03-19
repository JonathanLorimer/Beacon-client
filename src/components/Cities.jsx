import React from 'react'
import Resource from '../models/resource'

const CitiesList = Resource('regions', 'cities')

class Cities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      errors: null,
      last_click: 0,
      render: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reRenderCities){
      this.setState({render: true})
      this.setState({render: false})
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
      if (this.props.completedAchievements.cities.hasOwnProperty(city.id) && this.props.completedAchievements.cities[city.id]){
        return (
          <div>
            <button className="achievement city complete" onClick={event => {
              if (this.state.last_click !== city.id){
                this.props.getCityId(city.id)
                this.setState({last_click: city.id})
              } else {
                this.props.getCityId(0)
              }
  
                let lat = (city.least_lat + city.greatest_lat) / 2
                let lng = (city.least_lng + city.greatest_lng) / 2
  
                this.props.getMapCenter(lat, lng, [
                  { lat: city.least_lat, lng: city.greatest_lng },
                  { lat: city.least_lat, lng: city.least_lng },
                  { lat: city.greatest_lat, lng: city.least_lng },
                  { lat: city.greatest_lat, lng: city.greatest_lng }
                ])
            }}>
            {city.name}
            </button>
          </div>)
      } else {
        return (
          <div>
            <button className="achievement city" onClick={event => {
              this.props.getCityId(city.id)
  
                let lat = (city.least_lat + city.greatest_lat) / 2
                let lng = (city.least_lng + city.greatest_lng) / 2
  
                this.props.getMapCenter(lat, lng, [
                  { lat: city.least_lat, lng: city.greatest_lng },
                  { lat: city.least_lat, lng: city.least_lng },
                  { lat: city.greatest_lat, lng: city.least_lng },
                  { lat: city.greatest_lat, lng: city.greatest_lng }
                ])
            }}>
            {city.name}
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

export default Cities