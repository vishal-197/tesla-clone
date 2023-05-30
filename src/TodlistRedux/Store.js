import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from './slices/todoSlice'

export default configureStore({
    reducer:{
        todo: todoListReducer
    }
})