import React from 'react';
import { LoadScript, GoogleMap, Marker, Polyline, DistanceMatrixService } from '@react-google-maps/api';

const MapContainer = () => {

  const mapStyles = {
    height: "80vh",
    width: "80%"
  }

  const pathCoordinates = [
    {
      name: "Vivek Vihar",
      location: {
        lat: 26.891394,
        lng: 75.768275
      },
    },
    {
      name: "Techno Softwares",
      location: {
        lat: 26.789785,
        lng: 75.830513
      },
    },
  ];

  const defaultCenter = {
    lat: 26.891394, lng: 75.768275
  }

  // const Haversine_Distance = (mk1, mk2) => {

  //   var R = 6371.0710;
  //   var rlat1 = mk1.position.lat() * (Math.PI / 180);
  //   var rlat2 = mk2.position.lat() * (Math.PI / 180);
  //   var difflat = rlat2 - rlat1;
  //   var difflon = (mk2.position.lng() - mk1.position.lng()) * (Math.PI / 180);

  //   var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));

  //   return d;

  // }

  // const Distance = () => {
  //   var distance = Haversine_Distance(mk1, mk2);
  //   document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " Km.";
  // }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyBIol8Iw52VGQR5wOWYkAqcFeD4-7WQdPw'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {
          pathCoordinates.map(item => {
            return (
              <Marker position={item.location} />
            )
          })
        }
        <Polyline path={[{ lat: 26.891394, lng: 75.768275 }, { lat: 26.789785, lng: 75.830513 }]} ></Polyline>
        <DistanceMatrixService
          options={{
            destinations: [{ lat: 26.891394, lng: 75.768275 }],
            origins: [{ lat: 26.789785, lng: 75.830513 }],
            travelMode: "DRIVING",
          }}
          callback={(response) => { console.log(response) }}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;