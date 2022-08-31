/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// Import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Action types
const FETCHED_ROCKETS = '/spacetravelers/rockets/FETCHED_ROCKETS';

// Create and export action creators

export const FetchedRockets = createAsyncThunk(FETCHED_ROCKETS, async () => {
  try {
    // const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const payload = response.data.map((rocket) => {
      const {
        id, rocket_name, description, flickr_images,
      } = rocket;
      return {
        id, rocket_name, description, flickr_images, reserved: false,
      };
    });
    return payload;
  } catch (err) {
    return err.message;
  }
});

// Initialize the state
const initialState = {
  rockets: [],
  loading: 'idle',
};

//
const reducerRockets = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchedRockets.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(FetchedRockets.fulfilled, (state, action) => {
        state.status = 'Fulfilled';
        state.rockets = action.payload;
      })
      .addCase(FetchedRockets.rejected, (state, action) => {
        state.status = 'Rejected';
        state.error = action.error.message;
      });
  },
});

export default reducerRockets.reducer;
