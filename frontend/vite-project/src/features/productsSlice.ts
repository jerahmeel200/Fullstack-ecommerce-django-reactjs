import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Product } from '../types/product';

 

 
export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const res = await axios.get<Product[]>('http://localhost:8000/api/products/');
    return res.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchProducts.fulfilled, (_, action)=> action.payload)
  }
  
});

export default productSlice.reducer;
