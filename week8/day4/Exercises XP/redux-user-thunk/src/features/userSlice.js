// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk to fetch user data
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch user data';
      });
  },
});

export default userSlice.reducer;
