import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    error: null,
    success: false,
    loading: false,
}



export const createCategory = createAsyncThunk('createCategory', async (useData) => {
    const baseAPI = 'http://localhost:4000/api/v1/category';
    try {
        const response = await axios.post(baseAPI, useData);
        return response.data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
});



const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            
            .addCase(createCategory.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            })
            
    }
})

export default categoriesSlice.reducer;