import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    category: {},
    success: false,
    error: null,
    loading: false
}

export const displaySingleCategory = createAsyncThunk('displayCategory/single', async (id)=> {
    const baseAPI = 'http://localhost:4000/api/v1/home';
        try {
            const response = await axios.get(`${baseAPI}/${id}`);
            const singleProd = response.data;
            return singleProd;
        } catch (error) {
            console.error('Error fetching single series:', error);
            return [];
        }
});


const singleCategorySlice = createSlice({
    name: 'showSingleCategory',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(displaySingleCategory.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(displaySingleCategory.fulfilled, (state, action)=> {
                state.category = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(displaySingleCategory.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
    }
})

export default singleCategorySlice.reducer;