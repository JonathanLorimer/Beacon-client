import React from "react"
import { compose, lifecycle, withHandlers, withState, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon, Circle } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAhxm02vnBa-hzc1GuSsjKEhr5u-u8RX6s&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,  
)

((props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      center={props.center}
      ref={(ref) => { this.map = ref; }}
    >

      {props.markerList.length > 0 && this.map.fitBounds((new window.google.maps.LatLngBounds(new window.google.maps.LatLng(props.markerList[0].lat, props.markerList[0].lng))))}
      {/* {console.log(props.bounds)}
      {this.map && this.map.fitBounds(props.bounds)} */}
      {props.markerList && props.markerList.map(marker => (<Marker position={{ lat: marker.lat, lng: marker.lng }} />))}
      {props.outline && <Polygon paths={props.outline} />}

    </GoogleMap>
    )
  }
)

export default MyMapComponent



