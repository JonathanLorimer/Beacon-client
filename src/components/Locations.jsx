import React from 'react'
// Client-side model
import Resource from '../models/resource'

const LocationsList = Resource('neighbourhoods', 'locations')

class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      errors: null
    }
  }




  // componentWillUpdate() {
  //   LocationsList.findAllChildren(this.props.neighbourhood_id)
  //     .then((result) => {
  //       this.setState({ locations: result.data, errors: null })
  //     })
  //     .catch((errors) => this.setState({ errors: errors }))
  // }

  componentWillMount() {
    console.log('queries updating the state with')
    LocationsList.findAllChildren(this.props.neighbourhood_id)
      .then((result) => {
        this.setState({ locations: result.data, errors: null })
        this.props.getLocationsMarkers(result.data)
      })
      .catch((errors) => this.setState({ errors: errors }))
  }

  // Presenter maps html over array of locations
  listPresenter() {
    let newLocationsQuery = this.state.locations
    LocationsList.findAllChildren(this.props.neighbourhood_id)
      .then((result) => {
        newLocationsQuery = result.data
      })
      .catch((errors) => this.setState({ errors: errors }))

    let latestAchList = this.props.getLatestAchievementList()
    let newLatestAchList = {}
    newLatestAchList.locations = {}

    for (let location in latestAchList.locations){
      console.log(newLatestAchList);
      newLatestAchList.locations[latestAchList.locations[location].id] = latestAchList.locations[location]
    }

    const list = newLocationsQuery.map((location) => {
      // console.log(latestAchList.locations," to ", location.id)
      if (newLatestAchList.locations.hasOwnProperty(location.id)){
         console.log("in the if")
        return (<div className="achievement location complete" onMouseOver={() => this.props.mouseOverComplete(location)} onMouseOut={() => this.props.mouseOut() }>{location.name}</div>)
      } else {
        return (<div className="achievement location" onMouseOver={() => this.props.mouseOverIncomplete(location)}>{location.name}</div>)
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

export default Locations