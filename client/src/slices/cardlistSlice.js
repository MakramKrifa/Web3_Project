import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
export const getCardList = createAsyncThunk("list/getCardList",async(info,{rejectWithValue})=>{
    try {
       const res = await axios.get('http://localhost:5000/api/v1/posts/cardList')
    
       return res?.data
    } catch (error) {
        
            return rejectWithValue(error?.response?.data?.msg)
        
       
    }
})

export const addNewProduct = createAsyncThunk("list/addNewProduct",async(info,{rejectWithValue,dispatch})=>{
    try {
        
    const formData= new FormData()
formData.append('card-image',info.file)
formData.append('name',info.name)
formData.append('reference',info.reference)
formData.append('description',info.description)
formData.append('category',info.category)
formData.append('price',info.price)
       const res = await axios.post('http://localhost:5000/api/v1/posts/card',formData)
    
    //    return res?.data
    return dispatch(getCardList());
    } catch (error) {
        
            return rejectWithValue(error?.response?.data?.msg)
        
    }
    
    
    })


const cardlistSlice =createSlice({
    name:"cardlist",
    initialState:{
        
        cardlistInfo:[],
        cardInfo:[],
        errors:null,
        loading:false,
    },
    reducers:{
       
    },
    extraReducers:{
        [getCardList.pending]:(state)=>{
            state.loading=true
        },
        [getCardList.fulfilled]:(state,action)=>{
            state.loading=false
            state.cardlistInfo=action.payload
            
            state.errors=null
        },
        [getCardList.rejected]:(state,action)=>{
            state.loading=false
            
            state.errors=action.payload
        },
        //addNewProduct
        [addNewProduct.pending]:(state)=>{
            state.loading=true
        },
        [addNewProduct.fulfilled]:(state,action)=>{
            state.loading=false
            state.cardInfo=action.payload
            
            state.errors=null
        },
        [addNewProduct.rejected]:(state,action)=>{
            state.loading=false
            
            state.errors=action.payload
        },
     
    }
})
export default cardlistSlice.reducer

