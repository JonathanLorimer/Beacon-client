import React from 'react'


// Client-side model
import Resource from '../models/resource'
import Neighbourhoods from './Neighbourhoods'
const CitiesList = Resource('cities')


class Cities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      selected_id: 0,
      errors: null
    }
  }

  componentWillMount() {
    CitiesList.findAll() 
      .then((result) => this.setState({ cities: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }


  render() {
    return (

      <tbody>
        {this.state.cities.map((city) => (
          (city.region_id === this.props.parent) &&
            <td><button className="achievement" onClick={event => {
              this.props.showChildren(this, city);
            }} >{city.name}</button>

            <Neighbourhoods parent={this.state.selected_id} showChildren={this.props.showChildren}/></td>
        ))}
      </tbody>
    )
  }
}

export default Cities