import {ScrollView,Image,TouchableOpacity, View, Text ,SafeAreaView, FlatList} from 'react-native'
import React from 'react'
import Tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import ChevronLeftIcon from '../icons/ChevronLeftIcons';
import { useState } from 'react';

const RideOptionsCard = () => {
  const navigation =useNavigation();
  const [selected,setSelected]=useState(null);
  const data =[
    // {
    //   id:"Uber-bike-111",
    //   title:"Uber-Bike",
    //   multiplier:0.5,
    //   image:"https://tse3.mm.bing.net/th?id=OIP.tYGTv3t-SA6xFfIjAqZo8gHaFB&pid=Api&P=0&h=180",
    // },
    {
      id:"Uber-X-123",
      title:"Uber X",
      multiplier:1,
      image:"https://links.papareact.com/3pn",
    },
    {
      id:"Uber-XL-456",
      title:"Uber XL",
      multiplier:1.2,
      image:"https://links.papareact.com/5w8",

    },
    {
      id:"Uber-LUX-789",
      title:"Uber LUX",
      multiplier:1.75,
      image:"https://links.papareact.com/7pf",      
    }

  ]

  return (
      <SafeAreaView>
        <View>
          <TouchableOpacity onPress={navigation.goBack} style={Tw` z-50 absolute top-3.5 left-5 p-3 rounded-full`}>
            <ChevronLeftIcon size={30} color={"black"}></ChevronLeftIcon> 
          </TouchableOpacity>
          <Text style={Tw`text-center text-xl py-5`}> Select a Ride </Text>
        </View>
        
        
        <FlatList
          style={Tw``}
          data={data}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            <TouchableOpacity 
              onPress={()=> setSelected(item)} 
              style={Tw`px-10  flex-row items-center justify-between ${
                item.id===selected?.id && "bg-gray-300"
              }`}
            >
              <Image
                style={{
                  width:100,
                  height:100,
                  resizeMode:'contain'
                }}
                source={{
                  uri : item.image
                }}
              >
              </Image>
              <View style={Tw`-ml-6`}>
                <Text style={Tw`text-xl font-semibold`}> {item.title} </Text>
                <Text style={Tw``}> travel time ...</Text>
              </View>

              <Text style={Tw`text-xl`}>   PKR 300</Text>
            </TouchableOpacity>
          )}
        >
        </FlatList>
        
        <View>
          <TouchableOpacity
            disabled={!selected}
            onPress
            style={Tw`bg-black py-3 m-2 ${!selected && "bg-gray-300"}`}
          >
            <Text style={Tw`text-center text-white text-l`}>
              Choose {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
    )
}

export default RideOptionsCard