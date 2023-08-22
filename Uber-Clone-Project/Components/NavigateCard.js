import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React, { useEffect } from 'react';
import Tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../Slices/navSlice';
import { useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import { setDestination } from '../Slices/navSlice';
import NavFavourites from './NavFavourites';


const NavigateCard = () => {
  
  
  const dispatch = useDispatch();
  const navigation =useNavigation();
  

  // useEffect(() => {
  //   dispatch(setDestination(null));
  // }, []);
  

  return (
    <SafeAreaView style={Tw`bg-white flex-1`}>
      <Text style={Tw`font-bold text-center py-5 text-xl`}> Good Morning, Abbas </Text>
      <View style={Tw`border-t border-gray-200 flex-shrink`}>
        {/* google places autocomplete */}
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where To ?'
            debounce={400}
            styles={st}
            nearbyPlacesAPI='GooglePlacesSearch'
            fetchDetails={true}
            query={{
              language:'en',
              key: GOOGLE_MAPS_APIKEY,
            }}
            onPress={(data,details=null)=>{
              dispatch(setDestination({
                location: details.geometry.location,
                description : data.description,
              }));

            navigation.navigate('RideOptionsCard');
            }}
          />
        </View>
        <NavFavourites type="destination"></NavFavourites>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const st = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDD',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
