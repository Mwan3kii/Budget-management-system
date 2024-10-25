import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    success: false,
    loading: false,
    isAuthenticated: false
}

export const loginUser = createAsyncThunk('auth/login', async (userData) => {
        const loginAPI = 'http://localhost:4000/api/v1/login';
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true, // Include cookies with the request
        };
        const response = await axios.post(`${loginAPI}`, userData, config);
        try {
            if (response.data) {
                localStorage.setItem('user logged-in', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error('Error fetching login details', error);
            return [];
        }
    },
)

export const logout = createAsyncThunk('auth/logout', async () => {
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
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload
            })
            .addCase(logout.fulfilled, (state)=>{
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = true
            })
    }
})

export default loginSlice.reducer;