import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice/productSlice";
import productSlice from './slice/productSlice';

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice
    }
})

export default cartStore