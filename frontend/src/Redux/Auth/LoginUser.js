import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    success: false,
    loading: false,
}

export const loginUser = createAsyncThunk('auth/login', async (userData) => {
        const loginAPI = 'http://localhost:4000/api/v1/login';
        try {
            const response = await axios.post(loginAPI, userData);
            
            return response.data;
        } catch (error) {
            console.error('Error fetching series:', error);
            return [];
        }
    },
)

const loginSlice = createSlice({
    name: 'Login-user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(loginUser.fulfilled, (state, action)=> {
                state.user = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
    }
})

export default loginSlice.reducer;