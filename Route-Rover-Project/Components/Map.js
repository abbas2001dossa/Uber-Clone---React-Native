import { View, Text } from 'react-native'
import React from 'react'
import MapView ,{Marker} from 'react-native-maps';
import Tw from 'twrnc';
import {  useSelector } from 'react-redux';
import { SelectOrigin } from '../Slices/navSlice';

const Map = () => {

    const origin = useSelector(SelectOrigin);

  return ( 
        <MapView
            style={Tw`flex-1`}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta:0.05,
                longitudeDelta:0.05,

            }}
        >

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude:origin.location.lat,
                        longitude:origin.location.lng
                    }}
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                >
                </Marker>
            )}

        </MapView>
    
    )
}

export default Map