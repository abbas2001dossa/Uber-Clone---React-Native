import { TouchableOpacity,View, Text } from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import Map from '../Components/Map';
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../Components/NavigateCard';
import RideOptionsCard from '../Components/RideOptionsCard';
import MenuIcon from '../icons/MenuIcon';
import {useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={Tw`p-2 z-50 absolute top-8 bg-gray-100 left-5 rounded-full shadow-lg`}>
        <MenuIcon size={30} color="black"></MenuIcon>
      </TouchableOpacity>


      <View style={Tw`h-1/2`}> 
        <Map></Map>
      </View>
      <View style={Tw`h-1/2 `}>
        <Stack.Navigator>
          <Stack.Screen 
            name='NavigateCard'
            component={NavigateCard}
            options={{headerShown:false}}
          ></Stack.Screen>

          <Stack.Screen 
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{headerShown:false}}
          ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen