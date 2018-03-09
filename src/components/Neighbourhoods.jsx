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
      selectedNeighbourhood: {},
      showDetails: false,
      errors: null
    }
  }

  componentWillMount() {
    NeighbourhoodsList.findAll() // continentstore does the API fetching!
      .then((result) => this.setState({ neighbourhoods: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  render() {
    return (


            <tbody>
              {this.state.neighbourhoods.map((neighbourhood, index) => (
                <tr key={index}>

                  <td>{neighbourhood.name}</td>
                  <td><Districts /></td>
                </tr>
              ))}
            </tbody>
    )
  }
}

export default Neighbourhoods