// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("Ecommerce", async () => {
  // console.log("hello")
  const response = await axios.get("https://fakestoreapi.com/products/");
  // console.log(response.data)
  return response.data;
});

// export const fechData= createAsyncThunk("ecom", async()=>{
//     const responseData = await axios.get("https://fakestoreapi.com/products/")
//     console.log(responseData.data)
//     return responseData.data
// })

export const ecommerce = createSlice({
  name: "ecommarce",
  initialState: {
    products: [],
    loding: false,
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loding = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loding = false;
      state.products = action.payload;
    },
  },
});
// export const {}= ecom.actions
export default ecommerce.reducer;
