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
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "saturation": 36
                },
                {
                  "color": "#000000"
                },
                {
                  "lightness": 40
                }
              ]
            },
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "on"
                },
                {
                  "color": "#000000"
                },
                {
                  "lightness": 16
                }
              ]
            },
            {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "lightness": 20
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "lightness": 17
                },
                {
                  "weight": 1.2
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "simplified"
                },
                {
                  "color": "#797979"
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "lightness": 20
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "landscape.natural.landcover",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "lightness": 21
                },
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#151515"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "lightness": 17
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "lightness": 29
                },
                {
                  "weight": 0.2
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "on"
                },
                {
                  "color": "#be3e08"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#be3e08"
                },
                {
                  "lightness": 18
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "off"
                },
                {
                  "color": "#ff0000"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#be3e08"
                },
                {
                  "lightness": 16
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "lightness": 19
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                },
                {
                  "lightness": 17
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#151515"
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
     

    </GoogleMap>
    )
  }
)

export default MyMapComponent


// This is the ugly outline :)
//{/* {props.outline && <Polygon paths={props.outline} />} */ }