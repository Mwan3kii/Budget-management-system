import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    success: false,
    loading: false,
}

export const logoutUser = createAsyncThunk('auth/logout', async () => {
        const logoutAPI = 'http://localhost:4000/api/v1/logout';
        try {
            const response = await axios.get(logoutAPI);
            
            return response.data;
        } catch (error) {
            console.error('Error logging out', error);
            return [];
        }
    },
)

const logoutSlice = createSlice({
    name: 'Login-user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logoutUser.pending, (state)=>{
                state.loading = true; 
            })
            .addCase(logoutUser.fulfilled, (state, action)=> {
                state.user = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
    }
})

export default logoutSlice.reducer;