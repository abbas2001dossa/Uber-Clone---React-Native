import {StyleSheet, View,SafeAreaView ,Text } from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY} from '@env';

const NavigateCard = () => {
  return (
    <SafeAreaView style={Tw`bg-white flex-1`}>
      <Text style={Tw`text-center py-5 text-xl `}> Good Morning, Abbas </Text>
      <View style={Tw`border-t border-gray-200 flex-shrink`}>
        
        {/* google places autocomplete */}
        <View>
            <GooglePlacesAutocomplete
                placeholder='Where To ?'
                debounce={400}
                styles={st}
                nearbyPlacesAPI='GooglePlacesSearch'
            />
        </View>
      
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard;

const st = StyleSheet.create[{
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0
    },
    textInput:{
        backgroundColor:"#DDDDDDF",
        borderRadius:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }


}]

