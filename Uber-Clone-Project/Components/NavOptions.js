import {Image,  FlatList,TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { SelectOrigin } from '../Slices/navSlice';


const NavOptions = () => {

    const origin= useSelector(SelectOrigin);
    const navigation=useNavigation();
    const data =[
        {
            id: "123",
            title : "Get A Ride",
            image : "https://links.papareact.com/3pn",
            screen : "Map"
        },
        {
            id : "234",
            title: "Order Food",
            image: "https://links.papareact.com/28w",
            screen: "EatsScreen"
        }
    ];

  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity style={Tw`p-2 pl-6 pb-8 pt-4 m-2 bg-gray-200 w-40`} disabled={!origin} onPress={()=>navigation.navigate(item.screen)}>
                <View style={Tw`${!origin && "opacity-20"}`}>
                    <Image source={{uri: item.image }} style={{ height:120,width:120,resizeMode:"contain"}}></Image>
                    <Text style={Tw`items-center text-lg mt-2 font-semibold`}> {item.title}</Text>
                    <View style={Tw`p-2 ml-2 bg-black rounded-full  w-10 mt-4 `}>
                        <ArrowRightIcon size={20} color={"white"}></ArrowRightIcon>
                    </View>
                    
                </View>
            </TouchableOpacity>
        )}
    >
        
    </FlatList>
  )
}

export default NavOptions;

