import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    singleTran: {},
    success: false,
    error: null,
    loading: false
}

export const displaySingleTransaction = createAsyncThunk('displayCategory/single', async (categoryId)=> {
    const baseAPI = 'http://localhost:4000/api/v1/home';
        try {
            const response = await axios.get(`${baseAPI}/${categoryId}`);
            const singleProd = response.data;
            return singleProd;
        } catch (error) {
            console.error('Error fetching single series:', error);
            return [];
        }
});

const displayTransactionSlice = createSlice({
    name: 'showSingleCategory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(displaySingleTransaction.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(displaySingleTransaction.fulfilled, (state, action)=> {
                state.singleTran = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(displaySingleTransaction.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
    }
})

export default displayTransactionSlice.reducer;