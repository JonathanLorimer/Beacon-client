import React from 'react'


// Client-side model
import Resource from '../models/resource'
import Districts from './Districts'

const NeighbourhoodsList = Resource('neighbourhoods')


class Neighbourhoods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      neighbourhoods: [],
      selected_id: 0,
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    NeighbourhoodsList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ neighbourhoods: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  showChildren = (parent) => {
    this.setState({ selected_id: parent.id })
  }

  render() {
    return (


            <tbody>
              {this.state.neighbourhoods.map((neighbourhood, index) => (
                (neighbourhood.city_id === this.props.parent) ?
                  <td><button className="achievement" onClick={event => {
                    this.showChildren(neighbourhood);
                  }} >{neighbourhood.name}</button>
                    <Districts parent={this.state.selected_id} /></td> :
                  <td> no Districts </td>
              ))}
            </tbody>
    )
  }
}

export default Neighbourhoods