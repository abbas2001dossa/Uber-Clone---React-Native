import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {useDispatch, useSelector } from 'react-redux';
import { SelectDestination, SelectOrigin } from '../Slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import Tw from 'twrnc';
import { setTravelTimeInformation} from '../Slices/navSlice';

const Map = () => {
  const mapRef = useRef(null);
  const origin = useSelector(SelectOrigin);
  const destination = useSelector(SelectDestination);
  const dispatch = useDispatch();

  // to calculate pricing and time taken for ride 
  useEffect(()=>{
    if (!origin || !destination){ return;}

    const getTravelTime = async ()=>{
      
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial
      &origins=${origin.description}&destinations=${destination.description}&key=${
      GOOGLE_MAPS_APIKEY}`)
      .then((res)=> res.json())
      .then(data =>{
        console.log(data);
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
      })



    }


    getTravelTime();
  },[origin,destination,GOOGLE_MAPS_APIKEY]);

  useEffect(() => {
    if (!origin || !destination ) return;

    // console.log(mapRef);
    // Zoom and fit to current markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true,
    });
    
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={Tw`flex-1`}
      initialRegion={{
        latitude: origin?.location?.lat || 0,
        longitude: origin?.location?.lng || 0,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor='black'
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier='origin'
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          identifier='destination'
          description={destination.description}
        />
      )}
    </MapView>
  );
};

export default Map;
