/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  mission: [],
  loading: 'idle',
};

export const getMissionData = createAsyncThunk('./missions/getMissionItems', async () => {
  const fetchMissions = await axios.get(url).catch((err) => err);
  const missionData = fetchMissions.data;
  const fetchAllMissions = missionData.map((mission) => ({
    id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    join: false,
  }));
  return fetchAllMissions;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, join: !mission.join };
      }
      return mission;
    }),
  },
  extraReducers: {
    [getMissionData.pending]: (state) => {
      state.status = 'Loading....';
    },
    [getMissionData.fulfilled]: (state, action) => {
      state.status = 'Fulfilled';
      state.mission = action.payload;
    },
    [getMissionData.rejected]: (state, action) => {
      state.status = 'Rejected';
      state.mission = action.error;
    },
  },

});

export const { joinMission } = missionSlice.actions;
export default missionSlice.reducer;
