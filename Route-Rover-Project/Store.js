import { configureStore } from "@reduxjs/toolkit";
import navReducer from './Slices/navSlice';


// nav for navigation 
export const store = configureStore({
    reducer:{
        nav: navReducer 
    }
});