import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps"

const markerIncomplete = require('../styles/location_incomplete.png')
const markerComplete = require('../styles/location_complete.png')
const markerMouseOverComplete = require('../styles/location_mouseover.png')
const markerMouseOverIncomplete = require('../styles/location_mouseover.png')

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAhxm02vnBa-hzc1GuSsjKEhr5u-u8RX6s&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `450px` }} />,
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
        maxZoom: 16,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#523735"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#c9b2a6"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#dcd2be"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ae9e90"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#93817c"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.government",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.medical",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#a5b076"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#447530"
                }
              ]
            },
            {
              "featureType": "poi.place_of_worship",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.school",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.sports_complex",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f1e6"
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
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#fdfcf8"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f8c967"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#e9bc62"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e98d58"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#db8555"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#806b63"
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
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8f7d77"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b9d3c2"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#92998d"
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
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        position={{ lat: marker.lat, lng: marker.lng }} />))}

      {props.completedMarkerList && props.completedMarkerList.map(marker => (<Marker
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
        position={{ lat: marker.lat, lng: marker.lng }} />))}
     {props.outline && <Polygon paths={props.outline} />}

    </GoogleMap>
    )
  }
)

export default MyMapComponent


// This is the ugly outline :)
//{/* {props.outline && <Polygon paths={props.outline} />} */ }