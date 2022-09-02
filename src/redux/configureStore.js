import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
});

export default store;
