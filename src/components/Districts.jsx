import React from 'react'


// Client-side model
import Resource from '../models/resource'
import Locations from './Locations'
const DistrictsList = Resource('districts')


class Districts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      districts: [],
      selected_id: [],
      errors: null,
      loading: true
    }
  }

  // componentWillMount() {
  //   DistrictsList.findAll()
  //     .then((result) => this.setState({ districts: result.data, errors: null }))
  //     .catch((errors) => this.setState({ errors: errors }))
  // }

  componentDidUpdate() {

    if(this.state.loading) {
      let districtsArray = []

      let promises = this.props.districtsToDisplay.map(id => {
      return DistrictsList.find(id)
          .then((result) =>{
            // console.log(result)
            districtsArray.push(result)
            return districtsArray
          }).catch((errors) => this.setState({ errors: errors }))              
        })

        Promise.all(promises).then((result => {
          console.log('result: ', result)
          this.setState({ districts: result, errors: null, loading: false })
        }))
      }      
    }

  

  render() {
    return (

      <tbody>
        {this.state.districts.map((district) => (
          (district.neighbourhood_id === this.props.parent) &&
            <td><button className="achievement" onClick={event => {
              this.props.showChildren(this, district);
            }} >{district.name}</button>

            </td>
        ))}
      </tbody>
    )
  }
}

export default Districts