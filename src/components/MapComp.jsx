import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const markerIncomplete = require('../styles/location_incomplete.png')
const markerComplete = require('../styles/location_complete.png')
const markerMouseOverComplete = require('../styles/location_mouseover.png')
const markerMouseOverIncomplete = require('../styles/location_mouseover.png')

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAhxm02vnBa-hzc1GuSsjKEhr5u-u8RX6s&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
)((props) => {
  return(<GoogleMap
      defaultZoom={4}
      center={props.center}
      ref={(ref) => { this.map = ref; }}
      defaultOptions={
        {
        disableDefaultUI: true,
        maxZoom: 16,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#263c3f"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6b9a76"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#38414e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#212a37"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
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
                  "color": "#9ca5b3"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#1f2835"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#f3d19c"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2f3948"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#515c6d"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#17263c"
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
        zIndex={5}
        icon={{
          url: markerIncomplete,
          scaledSize: new window.google.maps.Size(25, 25),
        optimized: false,
        zIndex: 5
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.completedMarkerList && props.completedMarkerList.map(marker => (<Marker
      zIndex={5}
        icon={{
          url:  markerComplete ,
        scaledSize: new window.google.maps.Size(25, 25),
        optimized: false,
        zIndex: 5
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.mouseOverComplete && props.mouseOverComplete.map(marker => (<Marker
      zIndex={9999}
        icon={{
          url: markerMouseOverComplete,
        scaledSize: new window.google.maps.Size(25, 25),
        optimized: false,
        zIndex: 99999
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.mouseOverIncomplete && props.mouseOverIncomplete.map(marker => (<Marker
      zIndex={9999}
        icon={{
          url: markerMouseOverIncomplete,
        scaledSize: new window.google.maps.Size(25, 25),
        optimized: false,
        zIndex: 99999
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.mouseOverCompleteLocation && props.mouseOverCompleteLocation.map(marker => (<Marker
      zIndex={9999}
        icon={{
          url: markerMouseOverComplete,
        scaledSize: new window.google.maps.Size(25, 25),
        optimized: false,
        zIndex: 99999
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.mouseOverIncompleteLocation && props.mouseOverIncompleteLocation.map(marker => (<Marker
      zIndex={9999}
        icon={{
          url: markerMouseOverIncomplete,
        scaledSize: new window.google.maps.Size(25, 25),
        optimized: false,
        zIndex: 99999
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}
   

    </GoogleMap>
    )
  }
)

export default MyMapComponent


// This is the ugly outline :)
//{/* {props.outline && <Polygon paths={props.outline} />} */ }