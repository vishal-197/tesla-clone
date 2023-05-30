import { configureStore } from "@reduxjs/toolkit";
// import Slice from "./slices/Slice"
import ecomReducer from "./slices/Slice"

export default configureStore({
    reducer:{
        ecom: ecomReducer
    },
    middleware: [thunk]

})