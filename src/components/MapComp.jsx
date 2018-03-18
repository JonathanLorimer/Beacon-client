import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const markerIncomplete = require('../styles/incomplete.png')
const markerComplete = require('../styles/complete.jpeg')
const markerMouseOverComplete = require('../styles/mouse-over-complete.png')
const markerMouseOverIncomplete = require('../styles/mouse-over-incomplete.png')

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
      defaultZoom={4}
      center={props.center}
      ref={(ref) => { this.map = ref; }}
      defaultOptions={
        {
        disableDefaultUI: true,
        maxZoom: 20,
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
      {/* {console.log(props.markerList)} */}
      {(props.bounds.length > 0) && (this.map.fitBounds(
        new window.google.maps.LatLngBounds()
          .extend(new window.google.maps.LatLng(props.bounds[1][0], props.bounds[0][1]))
          .extend(new window.google.maps.LatLng(props.bounds[0][0], props.bounds[1][1]))))}

      {props.markerList && props.markerList.map(marker => (<Marker
        icon={{
          url: markerIncomplete,
          scaledSize: new window.google.maps.Size(15, 15)
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {/* {props.completedMarkerList && props.completedMarkerList.map(marker => (<Marker
        icon={{
          url:  markerComplete ,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.mouseOverComplete && props.mouseOverComplete.map(marker => (<Marker
        icon={{
          url: markerMouseOverComplete,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.mouseOverIncomplete && props.mouseOverIncomplete.map(marker => (<Marker
        icon={{
          url: markerMouseOverIncomplete,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.mouseOverCompleteLocation && props.mouseOverCompleteLocation.map(marker => (<Marker
        icon={{
          url: markerMouseOverComplete,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.mouseOverIncompleteLocation && props.mouseOverIncompleteLocation.map(marker => (<Marker
        icon={{
          url: markerMouseOverIncomplete,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))} */}
     

    </GoogleMap>
    )
  }
)

export default MyMapComponent


// This is the ugly outline :)
//{/* {props.outline && <Polygon paths={props.outline} />} */ }