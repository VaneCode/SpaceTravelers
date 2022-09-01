/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// Import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Action types
const FETCHED_ROCKETS = '/spacetravelers/rockets/FETCHED_ROCKETS';

// Create and export async action creators
export const FetchedRockets = createAsyncThunk(FETCHED_ROCKETS, async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const payload = response.data.map((rocket) => {
      const {
        id, rocket_name, description, flickr_images,
      } = rocket;
      return {
        id,
        rocket_name,
        description,
        flickr_images,
        reserved: false,
      };
    });
    // const payload = response.data;
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
  reducers: {
    HandledBookRocket: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload.rocket.id) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return { ...state, rockets: newState };
    },
  },
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

// Exports actions created automaticaly with createSlice
export const { HandledBookRocket } = reducerRockets.actions;

export default reducerRockets.reducer;
