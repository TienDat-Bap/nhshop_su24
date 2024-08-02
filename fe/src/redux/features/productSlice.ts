import { Iproduct } from "@/common/interfaces/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [] as Iproduct[],
    product:{} as Iproduct,
    attributes: []
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts: (state, action) =>{
            state.products = action.payload
        },
        setProduct: (state, action) =>{
            state.product = action.payload
        },
        setAttributes: (state, action) =>{
            state.attributes = action.payload
        },
    }
})
export const {setProducts,setProduct,setAttributes} = productSlice.actions

export default productSlice.reducer