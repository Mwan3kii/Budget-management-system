import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    success: false,
    loading: false,
}

export const registerUser = createAsyncThunk('auth/register', async (userData) => {
        const registerAPI = 'http://localhost:4000/api/v1/register';
        try {
            const response = await axios.post(registerAPI, userData);
            
            return response.data;
        } catch (error) {
            console.error('Error fetching series:', error);
            return [];
        }
    },
)

const registerSlice = createSlice({
    name: 'Register-user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(registerUser.fulfilled, (state, action)=> {
                state.user = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
    }
})

export default registerSlice.reducer;