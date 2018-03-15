import React from "react"
import { compose, lifecycle, withHandlers, withState, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon, Circle } from "react-google-maps"


const MyMapComponent = compose(
  lifecycle({
    componentDidReceiveProps(nextProps){       
      this.setState({ center: nextProps.center, outline: nextProps.outline, markerList: nextProps.markerList })
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
    center={ props.center }
  >

    {props.markerList && props.markerList.map(marker => ( <Marker position={{ lat: marker.lat, lng: marker.lng }} /> ))}      
    {props.outline && <Polygon paths={ props.outline } />}

  </GoogleMap>
)

export default MyMapComponent



