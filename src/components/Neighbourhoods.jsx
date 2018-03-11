import React from 'react'


// Client-side model
import Resource from '../models/resource'
import Districts from './Districts'

const NeighbourhoodsList = Resource('neighbourhoods')
// const DistrictsList = Resource('districts')


class Neighbourhoods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      neighbourhoods: [],
      selected_id: [],
      errors: null,
      childReload: true
    }
  }

  componentWillMount() {
    NeighbourhoodsList.findAll()
      .then((result) => this.setState({ neighbourhoods: result.data, errors: null }))
      .catch((errors) => this.setState({ errors: errors }))
  }

  // That is the children
  showChildren = (parent) => {
    this.setState({ selected_id: parent.districts_ids })
  }

  // findDistrict(neighbourhood) {
  //   neighbourhood.districts_ids.map(id => {
  //     DistrictsList.find(id)
  //       .then((result) => this.setState({ neighbourhoods: result.data, errors: null }))
  //       .catch((errors) => this.setState({ errors: errors }))
  //   })
  // }

  render() {
    const listOfSomething = this.state.neighbourhoods.map((neighbourhood) => {
      return (                                  
        (neighbourhood.city_id === this.props.parent) && 
          (<td><button className="achievement" onClick={event => {
            this.showChildren(neighbourhood);
          }} >{neighbourhood.name}</button>

          <Districts districtsToDisplay={this.state.selected_id} 
          showChildren={this.props.showChildren} 
          reload={this.state.childReload} 
          parent={neighbourhood.id}/></td>)

        );
      });
      return (
        <div>{listOfSomething}</div>
      );
  }
}

export default Neighbourhoods

