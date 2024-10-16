import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    error: null,
    success: false,
    loading: false,
}

export const displayCategories = createAsyncThunk('displayCategory/all', async () => {
        const baseAPI = 'http://localhost:4000/api/v1/home';
        try {
            const response = await axios.get(baseAPI);
            
            return response.data;
        } catch (error) {
            console.error('Error fetching series:', error);
            return [];
        }
    },
)

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

export const deleteCategory = createAsyncThunk('deleteCategory', async (id) => {
    const baseAPI = 'http://localhost:4000/api/v1/home';
    try {
        const response = await axios.delete(`${baseAPI}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(displayCategories.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(displayCategories.fulfilled, (state, action)=> {
                state.categories = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(displayCategories.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
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
            .addCase(deleteCategory.fulfilled, (state, action)=>{
                state.categories = action.payload;
                state.loading = false;
                state.success = true;
            });
    }
})

export default categoriesSlice.reducer;