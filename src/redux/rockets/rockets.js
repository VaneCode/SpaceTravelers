/* eslint-disable no-param-reassign */
// Import
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Action types
const FETCHED_ROCKETS = "/spacetravelers/rockets/FETCHED_ROCKETS";

//Create and export action creators
export const FetchedRockets = createAsyncThunk(FETCHED_ROCKETS, () =>
  axios
    .get("https://api.spacexdata.com/v3/rockets")
    .then((response) => response.data)
    .catch((error) => error)
);

const rocketsInitialState = {
  rocketsList: {
    status: "idle",
    data: {},
    error: {},
  },
};

//
const reducerRockets = createSlice({
  name: "rockets",
  initialState: rocketsInitialState,
  reducers: {},
  extraRedducers: (builder) => {
    builder
      .addCase(FetchedRockets.pending, (state) => {
        state.rocketsList = {
          status: "loading",
          data: {},
          error: {},
        };
      })
      .addCase(FetchedRockets.fulfilled, (state, action) => {
        state.rocketsList = {
          status: "fulfilled",
          data: action.payload,
          error: {},
        };
      })
      .addCase(FetchedRockets.rejected, (state, action) => {
        state.rocketsList = {
          status: "rejected",
          data: {},
          error: action.payload,
        };
      });
  },
});

export default reducerRockets.reducer;
