import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    origin: null , 
    destination : null ,
    travelTimeInformation : null 
}

export const navSlice = createSlice({
    name :"nav",
    initialState,
    reducers:{
        setOrigin : (state,action)=>{
            state.origin = action.payload ;
        },
        setDestination : (state,action)=>{
            state.destination = action.payload;
        },
        setTravelTimeInformation : (state,action)=>{
            state.travelTimeInformation = action.payload;
        }
    }

});

export const {setDestination , setOrigin , setTravelTimeInformation} = navSlice.actions;

// selectors - to gfet data from the store-> navSlice 
// this would give the current value 

export const SelectOrigin = (state)=> state.nav.origin; 
export const SelectDestination = (state)=> state.nav.destination; 
export const SelectTravelTimeInformation = (state)=> state.nav.travelTimeInformation; 

export default navSlice.reducer;

