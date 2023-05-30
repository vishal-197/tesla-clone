import { configureStore } from "@reduxjs/toolkit"
import randamListReducer from './slices/RandemSlice'

export default configureStore({
    reducer:{
        randam: randamListReducer
    }

})

