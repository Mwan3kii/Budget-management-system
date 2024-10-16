import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    transaction: {},
    success: false,
    error: null,
    loading: false
}

export const createTransaction = createAsyncThunk('displayTransaction', async ({id, transactionData})=> {
    const baseAPI = 'http://localhost:4000/api/v1/home';
        try {
            const response = await axios.post(`${baseAPI}/${id}/transaction`, transactionData);
            const singleProd = response.data;
            return { ...singleProd, categoryId: id };
        } catch (error) {
            console.error('Error fetching single series:', error);
            return [];
        }
});


const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createTransaction.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(createTransaction.fulfilled, (state, action)=> {
                state.transaction = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
    }
})

export default transactionSlice.reducer;