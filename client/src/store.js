import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import cardlistReducer from './slices/cardlistSlice' 

export default configureStore({reducer:{userReducer,cardlistReducer}})