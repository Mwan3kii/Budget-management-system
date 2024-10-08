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


export default registerSlice.reducer;