import React from "react"
import { compose, lifecycle, withHandlers, withState, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon, Circle } from "react-google-maps"
const markerIcon = require('../styles/marker-default.png')

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
      defaultOptions={{
        styles: [
          {
            "featureType": "water",
            "stylers": [
              {
                "color": "#0e171d"
              }
            ]
          },
          {
            "featureType": "landscape",
            "stylers": [
              {
                "color": "#1e303d"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "color": "#1e303d"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "stylers": [
              {
                "color": "#1e303d"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "color": "#182731"
              },
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
              {
                "color": "#f0c514"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1e303d"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#e77e24"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#94a5a6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#e84c3c"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "color": "#e84c3c"
              },
              {
                "visibility": "off"
              }
            ]
          }
        ] }}

    >
      {(props.bounds.length > 0) && console.log(props.bounds)}
      
      {(props.bounds.length > 0) && console.log(props.bounds[1][0])}
      {(props.bounds.length > 0) && console.log(props.bounds[0][1])}
      {(props.bounds.length > 0) && (this.map.fitBounds(
        new window.google.maps.LatLngBounds()
          .extend(new window.google.maps.LatLng(props.bounds[1][0], props.bounds[0][1]))
          .extend(new window.google.maps.LatLng(props.bounds[0][0], props.bounds[1][1]))))}

      {props.markerList && props.markerList.map(marker => (<Marker
        icon={{
          url: markerIcon,
          scaledSize: new window.google.maps.Size(30, 30)
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}
      {props.outline && <Polygon paths={props.outline} />}

    </GoogleMap>
    )
  }
)

export default MyMapComponent



