import React from "react"
import { compose, lifecycle, withHandlers, withState, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  lifecycle({
    componentWillReceiveProps(nextProps){
      this.setState({center: nextProps.center})
    }
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAhxm02vnBa-hzc1GuSsjKEhr5u-u8RX6s&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)

((props) =>
  <GoogleMap
    defaultZoom={8}
    center={props.center}
  >
  {console.log("PROPS: ",props)}
    {<Marker
      title={'The marker`s title will appear as a tooltip.'}
      name={'SOMA'}
      position={{ lat: 37.778519, lng: -122.405640 }} /> }
  </GoogleMap>
)

// class MyFancyComponent extends React.PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = {
//       center: this.props.center,
//       marker: { lat: -34.397, lng: 150.644 },
//       currentPosition: "Default"
//     }
//   }

//   render() {
//     console.log('RENDERINNNNG')
//     return (
//       <div>
//         <MyMapComponent center={this.state.center}/>
//       </div>
//     )
//   }
// }

export default MyMapComponent



