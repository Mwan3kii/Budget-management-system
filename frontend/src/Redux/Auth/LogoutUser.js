import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    success: false,
    loading: false,
    isAuthenticated: false
}

export const logoutUser = createAsyncThunk('auth/logout', async () => {
    const localUser = JSON.parse(localStorage.getItem('user logged-in'));
    const accessToken = localUser && localUser.token;

    try {
        const response = await axios.get('http://localhost:4000/api/v1/logout', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        if (response.status === 200) {
            localStorage.removeItem('user logged-in');
        }
        return null;
    } catch (error) {
        throw new Error(error.response.data.status || 'Logout failed');
    }
});


const logoutSlice = createSlice({
    name: 'Login-user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state)=>{
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.error = true
            })
    }
})

export default logoutSlice.reducer;