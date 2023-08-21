import {FlatList, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeWorkIcon from '../icons/HomeWorkIcon';
// import HomeIcon from '../icons/UserIcon'
import Tw from 'twrnc';
import { useDispatch , useSelector } from 'react-redux';
import {setOrigin , setDestination} from '../Slices/navSlice';
import {useNavigation} from '@react-navigation/native';
import { GOOGLE_MAPS_APIKEY } from '@env';


const NavFavourites = (props) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const data =
    [
        {
            id:"123",
            icon:"Home",
            location: "Home",
            address: "Jiwani Homes, Soldier Bazaar Garden East, Karachi",
        },
        {
            id:"456",
            icon:"briefcase",
            location:"Work",
            address:"Pie in the Sky,Khayaban-e-Badar,phase V Badar Commercial Area Defence V Defence Housing Authority , Karachi, Pakistan",
        },
    ]


  return (
    <FlatList
        data={data}
        ItemSeparatorComponent={()=>(
            <View
                style={[Tw`bg-gray-200` , {height:0.5}]}
            >
            </View>
        )}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> (
            <TouchableOpacity 
                style={Tw`flex-row items-center p-5`} 
                onPress={async ()=>{
                    if (props.type==='origin'){
                        const encodedLocationName = encodeURIComponent(item.address);               
                        const response = await fetch(
                            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocationName}&key=${GOOGLE_MAPS_APIKEY}`
                          );
                        const data = await response.json();
                          console.log(data.results[0].geometry.location);
                          console.log(data.results[0].formatted_address);
                        dispatch(setOrigin({
                            location: data.results[0].geometry.location ,
                            description: data.results[0].formatted_address ,
                         }));
                        dispatch(setDestination(null));
                        navigation.navigate('Map');
                    }
                    else{
                        const encodedLocationName = encodeURIComponent(item.address);               
                        const response = await fetch(
                            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocationName}&key=${GOOGLE_MAPS_APIKEY}`
                          );
                        const data = await response.json();
                          console.log(data.results[0].geometry.location);
                          console.log(data.results[0].formatted_address);
                        dispatch(setDestination({
                            location: data.results[0].geometry.location ,
                            description: data.results[0].formatted_address ,
                         }));
                        navigation.navigate('RideOptionsCard'); 
                    }
                }}
            >
                <View style={Tw`mr-4 bg-gray-300 p-2 rounded-full`}>
                    <HomeWorkIcon
                        name={item.icon}
                        size={30}
                        color={"black"}
                    >  
                    </HomeWorkIcon>
                </View>
                <View>
                    <Text style={Tw`font-bold text-lg`}>{item.location}</Text>
                    <Text style={Tw`text-gray-500`}>{item.address}</Text>
                </View>
            </TouchableOpacity>
        )}
    >
    </FlatList>
  )
}

export default NavFavourites