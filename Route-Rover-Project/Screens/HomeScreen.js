import { View, Text,SafeAreaView , Image } from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import NavOptions from '../Components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch , useSelector } from 'react-redux';
import {setOrigin , setDestination} from '../Slices/navSlice'
const HomeScreen = () => {

   const dispatch =useDispatch();


  return (

    <SafeAreaView style={Tw`bg-white h-full `}>
        <View style={Tw`p-5 `}>
            <Image
             source={{
                uri: "https:links.papareact.com/gzs"
             }}
             style={{
                height:100 , width:100 , resizeMode:'contain'
             }}
            >
            </Image>
            <GooglePlacesAutocomplete
               placeholder='Where From ?'
               nearbyPlacesAPI='GooglePlacesSearch'
               debounce={400}
               styles={{
                  container:{
                     flex:0,
                  },
                  textInput:{
                     fontSize:18,
                  },
               }} 
               minLength={2}
               enablePoweredByContainer={false}
               query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language:'en'
               }}
               fetchDetails={true}
               onPress={(data, details = null) => {
                  dispatch(setOrigin({
                     location: details ? details.geometry.location : null,
                     description: data.description,
                  }));
                  dispatch(setDestination(null));
               }}
               
               returnKeyType={"search"}
            > 
            </GooglePlacesAutocomplete>
            <NavOptions></NavOptions>
        </View>
    </SafeAreaView>   

 )
}

export default HomeScreen;