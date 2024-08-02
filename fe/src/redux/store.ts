import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productReducer from './features/productSlice'
import antReducer from './features/antSlice'
const useReducer = combineReducers({
    products: productReducer,
    ant:antReducer
})

const store = configureStore({
    reducer: useReducer
})

export default store