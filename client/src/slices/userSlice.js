import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



export const userRegister = createAsyncThunk("user/userRegister",async(info,{rejectWithValue})=>{
    try {
       const res = await axios.post('http://localhost:5000/api/v1/users/register',info.data)
    //    dispatch({type:'LOGIN',payload:res.data}) 
    info.navigate('/login')
       return res?.data
    } catch (error) {
        
            return rejectWithValue(error?.response?.data?.msg)
        
    }
    
    
    })

export const loginUser = createAsyncThunk("user/loginUser",async(info,{rejectWithValue})=>{
try {
   const res = await axios.post('http://localhost:5000/api/v1/users/login',info)
//    dispatch({type:'LOGIN',payload:res.data}) 
   return res?.data
} catch (error) {
    
        return rejectWithValue(error?.response?.data?.msg)
    
   
} 
})
export const getUserInfo = createAsyncThunk("user/getUserInfo",async(info,{rejectWithValue})=>{
    try {
       const res = await axios.get('http://localhost:5000/api/v1/users/userdata',
       {headers:{authorization:`Bearer ${localStorage.getItem('token')}`} }
       )
    
       return res?.data
    } catch (error) {
        
            return rejectWithValue(error?.response?.data?.msg)
        
       
    }
})

export const getUsersList = createAsyncThunk("user/getUsersList",async(info,{rejectWithValue})=>{
    try {
       const res = await axios.get('http://localhost:5000/api/v1/users/allusers',
      
       )
    
       return res?.data
    } catch (error) {
        
            return rejectWithValue(error?.response?.data?.msg)
        
       
    }
})
export const deleteUser = createAsyncThunk("user/deleteUser",async(id,{rejectWithValue,dispatch})=>{
    try {
       const res = await axios.delete('http://localhost:5000/api/v1/users/deleteuser/'+id ,
       {headers:{authorization:`Bearer ${localStorage.getItem('token')}`} }
       )
    
    //    return res?.data
    return dispatch (getUsersList());
    } catch (error) {
        
            return rejectWithValue(error?.response?.data?.msg)
        
       
    }
})

export const updateUser = createAsyncThunk("user/updateUser",async(data,{rejectWithValue,dispatch})=>{
    try {
        const updatedAt=Date.now()
        data={...data,updatedAt}
       const res = await axios.put('http://localhost:5000/api/v1/users/updateuser/'+data.id ,data,
       {headers:{authorization:`Bearer ${localStorage.getItem('token')}`} }
       )
       return dispatch (getUsersList());
    //    return res?.data
    } catch (error) {
        
            return rejectWithValue(error?.response?.data?.msg)
        
       
    }
})
export const countUser = createAsyncThunk("user/countUser",async(info,{rejectWithValue})=>{
    try {
       const res = await axios.get('http://localhost:5000/api/v1/users/countusers',
      
       )
    
       return res?.data
    } catch (error) {
        
            return rejectWithValue(error?.response?.data?.msg)
        
       
    }
})

const userSlice =createSlice({
    name:"user",
    initialState:{
        userInfo:JSON.parse(localStorage.getItem("userInfo"))||{},
        usersList:[],
        token:localStorage.getItem("token")?localStorage.getItem("token"):null,
        isAuth:Boolean(localStorage.getItem("isAuth"))||false,
        errors:null,
        loading:false,
    },
    reducers:{
        logout:(state)=>{
        state.userInfo={}
        state.isAuth=false
        state.token=null
        localStorage.removeItem("token")
        localStorage.removeItem("isAuth")
        localStorage.removeItem("userInfo")
        },
    },
    extraReducers:{
        [loginUser.pending]:(state)=>{
            state.loading=true
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.loading=false
            state.token=action.payload.token
            localStorage.setItem("token",action.payload.token)
            state.userInfo=action.payload.userdata
            localStorage.setItem("userInfo",JSON.stringify(action.payload.userdata))
            state.isAuth=true
            localStorage.setItem("isAuth",true)
            state.errors=null
        },
        [loginUser.rejected]:(state,action)=>{
            state.loading=false
            state.isAuth=false
            state.errors=action.payload
        },

// userRegister

        [userRegister.pending]:(state)=>{
            state.loading=true
        },
        [userRegister.fulfilled]:(state,action)=>{
            state.loading=false
            
            // state.newPerson=action.payload.newPerson
            
            state.errors=null
        },
        [userRegister.rejected]:(state,action)=>{
            state.loading=false
           
            state.errors=action.payload
        },
        [getUserInfo.fulfilled]:(state,action)=>{
            state.userInfo=action.payload
            
        },

       // usersList 
       [getUsersList .pending]:(state)=>{
        state.loading=true
    },
    [getUsersList .fulfilled]:(state,action)=>{
        state.loading=false
        state.usersList=action.payload
        
        state.errors=null
    },
    [getUsersList .rejected]:(state,action)=>{
        state.loading=false
        
        state.errors=action.payload
    },
// counter
[countUser .pending]:(state)=>{
    state.loading=true
},
[countUser .fulfilled]:(state,action)=>{
    state.loading=false
    state.count =action.payload
    
    state.errors=null
},
[countUser .rejected]:(state,action)=>{
    state.loading=false
    
    state.errors=action.payload
},

    }
})
export default userSlice.reducer
export const {logout}=userSlice.actions